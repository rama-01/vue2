<template>
  <el-menu
    class="no-scrollbar overflow-y-scroll bg-gray-600"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item> <i class="el-icon-location"></i>系统首页</el-menu-item>
    <el-submenu
      class="hover:bg-gray-800"
      v-for="i in menu"
      :key="i.path"
      :index="i.path"
    >
      <template slot="title">
        <i class="el-icon-location"></i>
        <span class="text-white">{{ i.meta.title }}</span>
      </template>
      <el-menu-item
        class="bg-gray-600 text-white hover:opacity-0"
        v-for="j in i.children.filter((i) => !i.hidden)"
        :key="j.path"
        :index="j.path"
        >{{ j.meta.title }}</el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>

<script>
import { getRouters } from '@/api/menu'
export default {
  data() {
    return {
      menu: []
    }
  },
  created() {
    this.getMenu()
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    getMenu() {
      getRouters().then(({ data }) => {
        if (data) {
          this.menu = data.filter((item) => !item.hidden)
        }
      })
    }
  }
}
</script>
