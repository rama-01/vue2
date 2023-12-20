<template>
  <div class="w-full h-full flex">
    <side-bar class="w-48 h-full" />
    <div class="flex flex-1 flex-col">
      <nav-bar class="h-12" />
      <tags-view class="h-7" />
      <app-main class="flex-1 p-5" />
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import TagsView from './components/TagsView'
import AppMain from './components/AppMain'
export default {
  components: {
    SideBar,
    NavBar,
    TagsView,
    AppMain
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
