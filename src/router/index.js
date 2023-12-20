import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter);

// 公共路由
const constantRoutes = [
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
  {
    path: '/index',
    component: Layout,
  }
]

const router = new VueRouter({
  routes: constantRoutes // routes: routes 的简写
})

export default router