<template>
  <el-dialog
    :title="roleInfo ? '修改角色' : '新增角色'"
    width="50%"
    :close-on-click-modal="false"
    @close="handleCloseDialog"
    append-to-body
    :visible="visible"
  >
    <el-form ref="roleForm" :model="form" label-width="80px">
      <el-form-item
        label="角色名称"
        prop="roleName"
        :rules="{
          required: true,
          message: '角色名称不能为空',
          trigger: 'blur',
        }"
      >
        <el-input
          class="w-60 float-left"
          placeholder="请输入角色名称"
          v-model="form.roleName"
          :disabled="!!roleInfo"
        ></el-input>
      </el-form-item>
      <el-form-item label="角色类型" :required="true" prop="roleType">
        <el-select
          class="w-60 float-left"
          v-model="form.roleType"
          :disabled="!!roleInfo"
        >
          <el-option label="超级管理员" value="1" />
          <el-option label="普通管理员" value="2" />
          <el-option label="用户角色" value="3" />
        </el-select>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <div class="h-8 float-left">
          <el-radio class="h-8" v-model="form.status" label="A">启用</el-radio>
          <el-radio class="h-8" v-model="form.status" label="N">禁用</el-radio>
        </div>
      </el-form-item>
      <el-form-item label="菜单权限" prop="menuCheckStrictly">
        <div class="flex h-8">
          <el-checkbox class="h-8" @change="handleExpandAll"
            >展开/折叠</el-checkbox
          >
          <el-checkbox class="h-8" @change="handleSelectAll"
            >全选/全不选</el-checkbox
          >
          <el-checkbox
            class="h-8"
            v-model="form.menuCheckStrictly"
            @change="handleMenuCheckStrictly"
            >父子联动</el-checkbox
          >
        </div>
        <el-tree
          ref="roleTree"
          v-if="refreshTable"
          :data="data"
          show-checkbox
          node-key="id"
          class="border"
          :props="{ children: 'childrens', label: 'label' }"
          :default-expand-all="expandAll"
          :check-strictly="checkStrictly"
        >
        </el-tree>
      </el-form-item>
      <el-form-item label="备注" prop="description">
        <el-input type="textarea" v-model="form.description"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleCloseDialog">取消</el-button>
      <el-button class="confirmBtn" @click="handleSubmitForm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: ["visible", "data", "roleInfo"],
  data() {
    return {
      form: {
        roleName: "",
        roleType: "1",
        status: "A",
        menuIds: [],
        description: "",
        menuCheckStrictly: true,
      },
      refreshTable: true,
      expandAll: false,
      checkStrictly: false,
      selectAll: false,
    };
  },
  watch: {
    roleInfo: {
      handler(newVal) {
        if (!newVal) return;
        this.form.roleName = newVal.roleInfo.name;
        this.form.roleType = newVal.roleInfo.type;
        this.form.status = newVal.roleInfo.status;
        this.form.menuIds = newVal.checkedKeys;
        this.form.description = newVal.roleInfo.description;
        this.$refs["roleTree"].setCheckedKeys(newVal.checkedKeys ?? []);
      },
      deep: true,
    },
  },
  methods: {
    handleCloseDialog() {
      this.$refs["roleForm"].resetFields();
      this.$refs["roleTree"].setCheckedKeys([]);
      setTimeout(() => {
        this.$emit("update:visible", false);
      }, 0);
    },
    handleSubmitForm() {
      this.$refs["roleForm"].validate((valid) => {
        if (valid) {
          this.form.menuIds = this.$refs["roleTree"].getCheckedKeys();
          if (!this.roleInfo) {
            this.$emit("action-event", "add-role", this.form);
          } else {
            const params = { id: this.roleInfo["roleInfo"].id, ...this.form };
            this.$emit("action-event", "update-role", params);
          }
        }
      });
      this.$emit("update:visible", false);
    },
    handleExpandAll() {
      this.refreshTable = false;
      this.expandAll = !this.expandAll;
      this.$nextTick(() => (this.refreshTable = true));
    },
    handleMenuCheckStrictly() {
      this.refreshTable = false;
      this.checkStrictly = !this.checkStrictly;
      this.$nextTick(() => (this.refreshTable = true));
    },
    handleSelectAll(selectAll) {
      if (selectAll) {
        this.$refs["roleTree"].setCheckedNodes(this.data);
      } else {
        this.$refs["roleTree"].setCheckedNodes([]);
      }
    },
  },
};
</script>
