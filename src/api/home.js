import request from '@/utils/request'

// 获取首页数据
export const getHomeData = () => request({
  url: 'backendApi/home/index',
  method: 'get'
})

// 获取统计数据
export const getStatisticData = (query) => request({
  url: 'backendApi/home/statistic',
  method: 'get',
  params: query
})
