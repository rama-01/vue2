// 设置路由守卫并动态添加路由
import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  // debugger
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // 当用户角色列表为空时，提示重新登录并获取用户信息
      if (store.getters.roles.length === 0) {
        // store.dispatch('GetInfo').then(() => {
        //   store.dispatch('GenerateRoutes').then(accessRoutes => {
        //     router.addRoute(accessRoutes)
        //     // console.log('accessRoutes', router);
        //     next({ ...to, replace: true })
        //   }).catch((err) => { console.log('err', err) })
        // }).catch(() => { })
        next()
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})