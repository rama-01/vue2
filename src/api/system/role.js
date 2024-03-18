import request from '@/utils/request'

export const getRoleList = (params) => request({
  url: '/backendApi/duty/list',
  method: 'get',
  params,
  isLoading: true
})

export const delRole = (id) => request({
  url: '/backendApi/duty/delete/' + id,
  method: 'post',
  isLoading: true
})

export const updateRoleStatus = (params) => request({
  url: '/backendApi/duty/changeStatus',
  method: 'post',
  data: params,
  isLoading: true
})

export const addRole = (params) => request({
  url: '/backendApi/duty/add',
  method: 'post',
  data: params,
  isLoading: true
})

//数据库异常
export const updateRole = (params) => request({
  url: '/backendApi/duty/update',
  method: 'post',
  data: params,
  isLoading: true
})

export const getRoleInfo = (roleId) => request({
  url: '/backendApi/duty/info/' + roleId,
  method: 'get',
  isLoading: true
})