<template>
  <div class="flex justify-between items-center">
    <div class="flex items-center">
      <hamburger @toggleClick="$store.dispatch('app/toggleSidebar')" />
      <breadcrumb />
    </div>
    <div class="flex items-center">
      <img
        src="@/assets/images/avatar.png"
        alt="avatar"
        class="w-9 h-9 rounded-full mr-1"
      />
      <el-dropdown class="mr-7">
        <span class="el-dropdown-link">
          fuint
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>布局设置</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
export default {
  components: { Breadcrumb, Hamburger },
  data() {
    return {
      data: "",
    };
  },
  methods: {
    logout() {
      this.confirm("确定注销并退出系统吗？", () => {
        this.$store.dispatch("LogOut").then(() => {
          location.href = "/";
        });
      });
    },
  },
};
</script>
