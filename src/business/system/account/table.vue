<template>
  <el-table
    ref="multipleTable"
    :data="accountList"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column prop="id" label="ID"> </el-table-column>
    <el-table-column prop="accountName" label="用户名"> </el-table-column>
    <el-table-column prop="realName" label="真实姓名"> </el-table-column>
    <el-table-column prop="storeId" label="所属商户"> </el-table-column>
    <el-table-column prop="merchantId" label="所属店铺"> </el-table-column>
    <el-table-column prop="status" label="状态">
      <template slot-scope="scope">
        <el-switch
          v-model="scope.row.isActive"
          :active-value="1"
          :inactive-value="0"
          active-color="#409eff"
          @change="$emit('action-event', 'update-role-status', scope.row)"
        />
      </template>
    </el-table-column>
    <el-table-column prop="createDate" label="创建时间"  width="200">
      <template slot-scope="{ row: { createDate } }">
        {{ $utils.parseTime(createDate) }}
      </template>
    </el-table-column>
    <el-table-column label="操作" fixed="right" width="200">
      <template slot-scope="{ row }">
        <el-button
          style="padding: 0"
          size="mini"
          icon="el-icon-edit"
          type="text"
          @click="$emit('action-event', 'update', row.id)"
        >
          修改
        </el-button>
        <el-button
          style="padding: 0"
          size="mini"
          icon="el-icon-delete"
          type="text"
          @click="$emit('action-event', 'delete', row)"
        >
          删除
        </el-button>
        <el-button
          style="padding: 0"
          size="mini"
          icon="el-icon-d-arrow-right"
          type="text"
          @click="$emit('action-event', 'delete', row)"
        >
          更多
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ["accountList"],
  data() {
    return {};
  },
  methods: {
    handleSelectionChange(val) {
      this.$emit("action-event", "selection-change", val);
    },
  },
};
</script>
