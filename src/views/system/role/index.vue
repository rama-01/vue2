<template>
  <div>
    <role-header
      :searchParams="searchParams"
      :selected-role="selectedRole"
      @action-event="handleActionEvent"
    />
    <role-table :roleList="roleList" @action-event="handleActionEvent" />
    <edit-popup
      :visible.sync="editPopup.visible"
      :data="editPopup.data"
      :roleInfo="roleInfo"
      @action-event="handleActionEvent"
    />
    <fuint-pagination
      :total="total"
      v-show="total > 0"
      :page.sync="searchParams.pageNum"
      :limit.sync="searchParams.pageSize"
      @pagination="getList"
    />
  </div>
</template>

<script>
import RoleHeader from "@/business/system/role/header.vue";
import RoleTable from "@/business/system/role/table.vue";
import EditPopup from "@/business/system/role/edit-popup.vue";
import FuintPagination from "@/components/pagination";
import { getMenuTreeSelect } from "@/api/system/menu";
import {
  getRoleList,
  delRole,
  updateRoleStatus,
  addRole,
  getRoleInfo,
  updateRole,
} from "@/api/system/role";
export default {
  name: "role",
  components: {
    RoleHeader,
    RoleTable,
    EditPopup,
    FuintPagination,
  },
  data() {
    return {
      searchParams: {
        page: 1,
        pageSize: 10,
        name: "",
        status: "",
      },
      editPopup: {
        visible: false,
        data: null,
      },
      roleList: [],
      total: 0,
      roleInfo: null,
      selectedRole: [],
    };
  },
  created() {
    this.getList();
    getMenuTreeSelect().then((res) => (this.editPopup.data = res));
  },
  methods: {
    getList() {
      getRoleList(this.searchParams).then(({ content, totalElements }) => {
        this.roleList = content;
        this.total = totalElements;
      });
    },
    handleActionEvent(event, data) {
      switch (event) {
        case "search":
          this.getList();
          break;
        case "reset":
          this.searchParams = {
            page: 1,
            pageSize: 10,
            name: "",
            status: "",
          };
          this.getList();
          break;
        case "delete":
          this.confirm(`是否确认删除角色ID为"${data.id}"的数据项`, () =>
            delRole(data.id).then(() => this.getList())
          );
          break;
        case "update-role-status":
          const { id, status, name } = data;
          const text = status === "A" ? "启用" : "禁用";
          this.$confirm(`是否${text}"${name}"的角色?`, "系统提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "系统提示",
          })
            .then(() => {
              updateRoleStatus({ roleId: id, status }).then(() =>
                this.getList()
              );
            })
            .catch(() => {
              // 取消切换状态，需要改回状态
              data.status = status === "A" ? "N" : "A";
            });
          break;
        case "add":
          this.editPopup.visible = true;
          this.roleInfo = null;
          break;
        case "update":
          getRoleInfo(data).then((res) => (this.roleInfo = res));
          this.editPopup.visible = true;
          break;
        case "add-role":
          addRole(data)
            .then(() => {
              this.getList();
              this.$message({ type: "success", message: "新增角色成功！" });
            })
            .catch(() => {});
          break;
        case "update-role":
          updateRole(data)
            .then(() => {
              this.getList();
              this.$message({ type: "success", message: "修改角色成功！" });
            })
            .catch(() => {});
          break;
        case "refresh":
          this.getList();
          break;
        case "selection-change":
          this.selectedRole = data;
          break;
      }
    },
  },
};
</script>
