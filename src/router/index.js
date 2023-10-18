import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/dashboard',
    component: () => import('@/views/dashboard')
  },
]

const router = new VueRouter({
  routes // routes: routes 的简写
})

export default router