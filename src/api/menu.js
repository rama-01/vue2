import request from '@/utils/request'

// 获取登录路由菜单接口
export const getRouters = () => request({
  url: 'backendApi/login/getRouters',
  method: 'get'
})
