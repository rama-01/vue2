import request from '@/utils/request'

// 获取登录路由菜单接口
export const getRouters = () => request({
  url: 'backendApi/login/getRouters',
  method: 'get'
})

// 查询菜单列表
export const getMenuList = () => request({
  url: '/backendApi/source/list',
  method: 'get',
  isLoading: true
})

// 删除菜单
export const deleteMenu = (id) => request({
  url: '/backendApi/source/delete/' + id,
  method: 'get',
  isLoading: true
})