import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter);

// 公共路由
const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/dashboard')
      }
    ]
  }
]

const router = new VueRouter({
  routes: constantRoutes // routes: routes 的简写
})

export default router