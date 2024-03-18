import request from '@/utils/request'

export const getAccountList = (params) => request({
  url: '/backendApi/account/list',
  method: 'get',
  params,
  isLoaded: true
})