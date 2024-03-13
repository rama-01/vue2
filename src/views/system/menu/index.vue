<template>
  <div>
    <div class="flex justify-start">
      <el-button class="addBtn">+ 新增</el-button>
      <el-button class="expandCollapseBtn" @click="handleToggleExpandAll"
        >+ 展开/折叠</el-button
      >
    </div>
    <Table
      :treeData="treeData"
      :tableHeight="tableHeight"
      :isExpand="isExpand"
      :refreshTable="refreshTable"
      @action-event="handleActionEvent"
    />
  </div>
</template>

<script>
import Table from "@/business/system/menu/table.vue";
import pagination from "@/components/pagination";
import { getMenuList, deleteMenu } from "@/api/menu";
export default {
  components: {
    Table,
    pagination,
  },
  data() {
    return {
      treeData: [],
      tableHeight: null,
      isExpand: false, //默认不展开
      refreshTable: true,
    };
  },
  created() {
    this.getList();
    //获取表格自适应高度
    this.$nextTick(() => {
      // idArr:['元素的id名'] otherHeight:其他元素的固定高度 windowHeight:null//默认电脑界面高度，传其他则以传入值为最大高度
      this.tableHeight = this.$tableHeight.adaptiveHeight({
        idArr: [],
        otherHeight: 144,
        windowHeight: null,
      });
    });
  },
  methods: {
    getList() {
      getMenuList().then(
        (res) => (this.treeData = this.$utils.handleTree(res))
      );
    },
    handleActionEvent(event, data) {
      switch (event) {
        case "delete":
          this.confirm(`确认删除名称为"${data.name}"的数据项吗？`, () =>
            deleteMenu(data.id).then(() => this.getList())
          );
          break;
      }
    },
    handleToggleExpandAll() {
      this.refreshTable = false;
      this.isExpand = !this.isExpand;
      this.$nextTick(() => (this.refreshTable = true));
    },
  },
};
</script>
