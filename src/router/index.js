import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/HomePage.vue'
import AboutPage from '@/AboutPage.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: HomePage },
  { path: '/about', component: AboutPage }
]

const router = new VueRouter({
  routes // routes: routes 的简写
})

export default router