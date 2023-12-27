<template>
  <el-table
    :data="articleList"
    :height="tableHeight"
    size="small"
    style="width: 100%">
    <el-table-column prop="id" label="ID"></el-table-column>
    <el-table-column label="图片"></el-table-column>
    <el-table-column prop="title" label="文件标题"></el-table-column>
    <el-table-column prop="storeId" label="点击数"></el-table-column>
    <el-table-column prop="status" label="状态"></el-table-column>
    <el-table-column prop="operator" label="创建者"></el-table-column>
    <el-table-column prop="createTime" label="创建时间"></el-table-column>
    <el-table-column prop="address" label="操作" width="125">
      <template slot-scope="{ row }">
        <el-button
          style="padding: 0"
          size="mini"
          icon="el-icon-edit"
          type="text"
          @click="$emit('action-event', 'edit', row)">
          修改
        </el-button>
        <el-button
          style="padding: 0"
          size="mini"
          icon="el-icon-delete"
          type="text"
          @click="$emit('action-event', 'delete', row)">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    tableHeight: Number,
    articleList: Array
  },
  data() {
    return {
    }
  },
  methods: {}
}
</script>
