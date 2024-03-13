<template>
  <el-table
    :data="treeData"
    :height="tableHeight"
    style="width: 100%"
    row-key="id"
    border
    :tree-props="{ children: 'childrens' }"
  >
    <el-table-column prop="name" label="菜单" width="180"> </el-table-column>
    <el-table-column label="图标"> </el-table-column>
    <el-table-column prop="perms" label="权限标识" width="220">
    </el-table-column>
    <el-table-column prop="path" label="组件路径" width="220">
    </el-table-column>
    <el-table-column prop="sort" label="排序"> </el-table-column>
    <el-table-column label="状态">
      <!-- 这里如果绑定解构后的值，点击无法切换状态 -->
      <template slot-scope="scope">
        <el-switch
          v-model="scope.row.status"
          active-value="A"
          inactive-value="D"
          active-color="#33bdbd"
        >
        </el-switch>
      </template>
    </el-table-column>
    <el-table-column label="操作" fixed="right" width="200">
      <template slot-scope="{ row }">
        <el-button
          style="padding: 0"
          size="mini"
          icon="el-icon-edit"
          type="text"
          @click="$emit('action-event', 'update', row)"
        >
          修改
        </el-button>
        <el-button
          style="padding: 0"
          size="mini"
          icon="el-icon-plus"
          type="text"
          @click="$emit('action-event', 'create', row)"
        >
          新增
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
  props: {
    treeData: {
      type: Array,
      default() {
        return [];
      },
    },
    tableHeight: null,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
