<template>
  <el-table
    ref="multipleTable"
    :data="roleList"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column prop="id" label="ID"> </el-table-column>
    <el-table-column prop="name" label="角色名称"> </el-table-column>
    <el-table-column prop="type" label="角色类型"> </el-table-column>
    <el-table-column prop="status" label="状态">
      <template slot-scope="scope">
        <el-switch
          v-model="scope.row.status"
          active-value="A"
          inactive-value="N"
          active-color="#409eff"
          @change="$emit('action-event', 'update-role-status', scope.row)"
        />
      </template>
    </el-table-column>
    <el-table-column label="操作" fixed="right" width="130">
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
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ["roleList"],
  data() {
    return {};
  },
  methods: {
    handleSelectionChange() {},
    
  },
};
</script>
