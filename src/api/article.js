import request from '@/utils/request'

export const getArticleList = (params) => request({
  url: '/backendApi/article/list',
  method: 'get',
  params,
  isLoading: true
})

// 新增或删除文章
export const updateArticle = (data) => request({
  url: '/backendApi/article/updateStatus',
  method: 'post',
  data,
  isLoading: true
})

// 新增或编辑文章
export const editSingleArticle = (data) => request({
  url: '/backendApi/article/save',
  method: 'post',
  data,
  isLoading: true
})

export const updateArticleStatus = (data) => request({
  url: '/backendApi/article/updateStatus',
  method: 'post',
  data,
  isLoading: true
})