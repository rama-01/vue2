<template>
  <el-form class="flex items-center gap-3 mb-2" ref="form" :model="form">
    <el-form-item class="flex" label="文章标题">
      <el-input v-model="form.title" placeholder="请输入文章标题"></el-input>
    </el-form-item>
    <el-form-item class="flex" label="状态">
      <el-select v-model="form.status" placeholder="状态">
        <el-option label="启用" value="A"></el-option>
        <el-option label="禁用" value="N"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button
        size="mini"
        icon="el-icon-search"
        class="searchBtn"
        @click="$emit('action-event', 'search', form)">
        搜索
      </el-button>
      <el-button
        size="mini"
        icon="el-icon-refresh"
        class="resetBtn"
        @click="handleReset">
        重置
      </el-button>
      <el-button
        size="mini"
        icon="el-icon-plus"
        class="addBtn"
        @click="$emit('action-event', 'add')">
        新增
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        status: ''
      }
    }
  },
  methods: {
    // 重置搜索参数并刷新表格
    handleReset() {
      this.form = {
        title: '',
        status: ''
      }
      this.$emit('action-event', 'reset')
    }
  }
}
</script>
