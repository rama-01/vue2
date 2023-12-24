import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter);

// 公共路由
export const constantRoutes = [
  {
    path: '/login',
    name:'Login',
    component: () => import('@/views/login')
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/dashboard')
      }
    ]
  }
]

export const dynamicRoutes = []

const router = new VueRouter({
  // mode: 'history',
  routes: constantRoutes 
})

export default router