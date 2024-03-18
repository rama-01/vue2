<template>
  <div>
    <banner-header
      class="max-h-20"
      :storeList="storeList"
      @action-event="handleActionEvent"
    />
    <banner-table :bannerList="bannerList" @action-event="handleActionEvent" />
    <edit-popup
      :visible.sync="editPopup.visible"
      :data="editPopup.data"
      :storeList="storeList"
      @action-event="handleActionEvent"
    />
  </div>
</template>

<script>
import BannerHeader from "@/business/content/banner/header.vue";
import BannerTable from "@/business/content/banner/table.vue";
import editPopup from "@/business/content/banner/edit-popup.vue";
import { getBannerList, updateSingleBanner } from "@/api/banner";
export default {
  name: "banner",
  components: {
    BannerHeader,
    BannerTable,
    editPopup,
  },
  data() {
    return {
      bannerList: [],
      storeList: [],
      queryParams: {
        //文章列表查询参数
        page: 1,
        pageSize: 10,
        title: "",
        status: "",
        storeId: "",
      },
      editPopup: {
        data: null,
        visible: false,
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      getBannerList(this.queryParams).then(
        ({ dataList: { content }, storeList }) => {
          this.bannerList = content;
          this.storeList = storeList;
        }
      );
    },
    handleActionEvent(action, data) {
      switch (action) {
        case "add":
          this.editPopup.visible = true;
          break;
        case "search":
          this.queryParams = { page: 1, pageSize: 10, ...data };
          this.getList();
          break;
        case "reset":
          this.queryParams = {
            page: 1,
            pageSize: 10,
            title: "",
            status: "",
            storeId: "",
          };
          this.getList();
          break;
        case "delete":
          const { title, id } = data;
          this.confirm('是否确认删除"' + title + '"的数据项吗？', () =>
            updateSingleBanner({ id, status: "D" }).then(() => this.getList())
          );
          break;
        case "edit":
          this.editPopup.visible = true;
          break;
      }
    },
  },
};
</script>
