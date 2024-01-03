<template>
  <el-form
    class="flex flex-wrap max-h-19 items-center gap-3 mb-2 max-h-20"
    ref="form"
    :model="form">
    <el-form-item class="flex" label="标题">
      <el-input v-model="form.title" placeholder="请输入标题"></el-input>
    </el-form-item>
    <el-form-item class="flex" label="所属店铺">
      <el-select v-model="form.status" placeholder="所属店铺"></el-select>
    </el-form-item>
    <el-form-item class="flex w-40" label="状态">
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
        @click="$emit('action-event', 'reset')">
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
  methods: {}
}
</script>
