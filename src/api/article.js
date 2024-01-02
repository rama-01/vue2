import request from '@/utils/request'

export const getArticleList = (queryParams) => request({
  url: '/backendApi/article/list',
  method: 'get',
  params: queryParams,
  isLoading: true
})

// 新增或删除文章
export const updateArticle = (params) => request({
  url: '/backendApi/article/updateStatus',
  method: 'post',
  data: params,
  isLoading: true
})

// 新增或编辑文章
export const editSingleArticle = (params) => request({
  url: '/backendApi/article/save',
  method: 'post',
  data: params,
  isLoading: true
})

export const updateArticleStatus = (params) => request({
  url: '/backendApi/article/updateStatus',
  method: 'post',
  data: params,
  isLoading: true
})