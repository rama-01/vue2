<template>
  <div>
    <el-form
      class="flex flex-wrap items-center gap-3 mb-2 max-h-20 bg-gray-100 p-3 shadow-sm"
      ref="form"
    >
      <el-form-item class="flex" label="角色名称">
        <el-input
          v-model="searchParams.name"
          placeholder="请输入角色名称"
        ></el-input>
      </el-form-item>
      <el-form-item class="flex" label="角色状态">
        <el-select v-model="searchParams.status" placeholder="状态">
          <el-option label="启用" value="A"></el-option>
          <el-option label="禁用" value="N"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="flex-shrink">
        <el-button
          size="mini"
          icon="el-icon-search"
          class="searchBtn"
          @click="$emit('action-event', 'search')"
        >
          搜索
        </el-button>
        <el-button
          size="mini"
          icon="el-icon-refresh"
          class="resetBtn"
          @click="$emit('action-event', 'reset')"
        >
          重置
        </el-button>
      </el-form-item>
    </el-form>
    <div class="flex justify-between items-center">
      <div>
        <el-button
          size="mini"
          icon="el-icon-plus"
          type="primary"
          plain
          @click="$emit('action-event', 'add')"
        >
          新增
        </el-button>
        <el-button size="mini" icon="el-icon-edit" type="success" plain>
          修改
        </el-button>
      </div>
      <div>right tool bar</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["searchParams"],
  data() {
    return {};
  },
};
</script>
