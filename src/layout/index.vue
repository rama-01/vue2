<template>
  <div class="flex w-full h-full hidden-scrollbar ">
    <side-bar class="w-48 h-full" v-if="!sidebar.hide" />
    <div class="flex-1 h-full overflow-x-auto">
      <nav-bar class="h-12" />
      <tags-view class="h-7" />
      <app-main
        class="p-5 overflow-auto"
        style="max-height: calc(100% - 76px)"
      />
    </div>
  </div>
</template>

<script>
import SideBar from "./components/sidebar";
import NavBar from "./components/navbar";
import TagsView from "./components/tags-view";
import AppMain from "./components/app-main";
import { mapState } from "vuex";
export default {
  components: {
    SideBar,
    NavBar,
    TagsView,
    AppMain,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      sidebar: (state) => state.app.sidebar,
    }),
  },
  created() {},
};
</script>
