<template>
  <div :class="{ 'has-logo': showLogo }" class="border-r-1 border-inherit">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <div v-if="isStore" class="store-info">
      <span class="name">{{ isStore }}</span>
    </div>
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      :unique-opened="true"
      :collapse-transition="false"
      mode="vertical"
      class="border-r-0"
    >
      <sidebar-item
        v-for="(route, index) in sidebarRouters"
        :key="route.path + index"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/assets/styles/variables.scss";

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapState(["settings"]),
    ...mapGetters(["sidebarRouters", "sidebar"]),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      // return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      // return !this.sidebar.opened;
    },
    isStore() {
      if (this.$store.getters.storeName && this.$store.getters.storeId) {
        return this.$store.getters.storeName;
      }
      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
.store-info {
  height: 38px;
  text-align: center;
  padding-top: 10px;
  background: #00acac;
  overflow: hidden;
  border-radius: 5px;
  margin: 0px 6px 10px 6px;
  .name {
    font-weight: bold;
    font-size: 13px;
    color: #ffffff;
    text-align: center;
    overflow: hidden;
  }
}
</style>
