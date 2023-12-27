<template>
  <el-menu
    class="no-scrollbar bg-gray-600 h-full"
    @open="handleOpen"
    @close="handleClose">
    <el-menu-item class="text-white" @click="$router.push('/')">
      <i class="el-icon-location float-left mt-19"></i>
      系统首页
    </el-menu-item>
    <el-submenu v-for="i in menu" :key="i.path" :index="i.path">
      <template slot="title">
        <i class="el-icon-location float-left mt-19"></i>
        <span class="text-white text-left">{{ i.meta.title }}</span>
      </template>
      <el-menu-item
        class="bg-gray-600 text-white"
        v-for="j in i.children.filter((i) => !i.hidden)"
        :key="j.path"
        :index="j.path"
        @click="$router.push({ path: j.path })">
        {{ j.meta.title }}
      </el-menu-item>
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
      // console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath)
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
<style lang="scss" scoped>
::v-deep .el-submenu__title {
  background-color: rgba(55, 65, 81) !important;
}
.el-menu-item:hover {
  background-color: rgba(55, 65, 81) !important;
}
</style>
