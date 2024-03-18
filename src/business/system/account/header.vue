<template>
  <div>
    <el-form
      class="flex flex-wrap items-center gap-3 mb-2 max-h-20 bg-gray-100 p-3 shadow-sm"
      ref="form"
      v-show="showSearch"
    >
      <el-form-item class="flex" label="用户名">
        <el-input
          v-model="searchParams.accountName"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item class="flex" label="真实姓名">
        <el-input
          v-model="searchParams.realName"
          placeholder="请输入真实姓名"
        ></el-input>
      </el-form-item>
      <el-form-item class="flex" label="状态">
        <el-select v-model="searchParams.accountStatus" placeholder="用户状态">
          <el-option label="启用" :value="1"></el-option>
          <el-option label="禁用" :value="0"></el-option>
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
          icon="el-icon-search"
          type="primary"
          plain
          @click="$emit('action-event', 'search')"
        >
          搜索
        </el-button>
        <el-button
          size="mini"
          icon="el-icon-refresh-left"
          type="success"
          plain
          @click="$emit('action-event', 'reset')"
        >
          重置
        </el-button>
      </div>
      <right-toolbar
        :showSearch.sync="showSearch"
        @queryTable="$emit('action-event', 'refresh')"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["searchParams"],
  data() {
    return {
      showSearch: true,
    };
  },
  methods: {},
};
</script>
