<template>
  <el-menu
    default-active="2"
    class="no-scrollbar overflow-y-scroll"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item>系统首页</el-menu-item>
    <el-submenu v-for="i in menu" :key="i.path" :index="i.path">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ i.meta.title }}</span>
      </template>
      <el-menu-item
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
        this.menu = data.filter((item) => !item.hidden)
      })
    }
  }
}
</script>
