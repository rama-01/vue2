<template>
  <el-table
    :data="articleList"
    :height="tableHeight"
    size="small"
    style="width: 100%">
    <el-table-column prop="id" label="ID" />
    <el-table-column prop="title" label="标题" />
    <el-table-column prop="storeId" label="所属店铺" />
    <el-table-column prop="url" label="图片" />
    <el-table-column prop="createTime" label="创建时间" />
    <el-table-column prop="updateTime" label="更新时间" />
    <el-table-column prop="status" label="状态">
      <template slot-scope="{ row: { id, status, title } }">
        <el-switch
          v-model="status"
          active-value="A"
          inactive-value="N"
          active-color="#33bdbd"
          @change="handleSwitchChange(id, status, title)" />
      </template>
    </el-table-column>
    <el-table-column prop="sort" label="排序" />
    <el-table-column label="操作" width="125">
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
import { updateArticleStatus } from '@/api/article'
export default {
  props: {
    tableHeight: Number,
    articleList: Array
  },
  data() {
    return {}
  },
  methods: {
    handleSwitchChange(id, status, title) {
      const text = status === 'A' ? '启用' : '禁用'
      this.confirm(`确认要${text}${title}吗?`, () => {
        updateArticleStatus({ id, status }).then(() => {
          this.$emit('action-event', 'update-status')
          this.$message({
            message: text + '成功',
            type: 'success'
          })
        })
      })
    }
  }
}
</script>
