<template>
  <div class="flex h-full hidden-scrollbar">
    <side-bar class="w-48 h-full" />
    <div class="flex-1 h-full overflow-auto">
      <nav-bar class="h-12" />
      <tags-view class="h-7" />
      <app-main class="p-5" />
    </div>
  </div>
</template>

<script>
import SideBar from './components/sidebar'
import NavBar from './components/navbar'
import TagsView from './components/tags-view'
import AppMain from './components/app-main'
export default {
  components: {
    SideBar,
    NavBar,
    TagsView,
    AppMain
  },
  data() {
    return {}
  },
  created() {}
}
</script>
