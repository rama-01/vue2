import request from '@/utils/request'

export const getBannerList = (params) => request({
  url: '/backendApi/banner/list',
  method: 'get',
  params,
  isLoading: true
})