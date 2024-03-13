import request from '@/utils/request'

// `params` 是与请求一起发送的 URL 参数
// 必须是一个简单对象或 URLSearchParams 对象
export const getBannerList = (params) => request({
  url: '/backendApi/banner/list',
  method: 'get',
  params,
  isLoading: true
})

// `data` 是作为请求体被发送的数据
// 仅适用 'PUT', 'POST', 'DELETE 和 'PATCH' 请求方法
// 在没有设置 `transformRequest` 时，则必须是以下类型之一:
// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
// - 浏览器专属: FormData, File, Blob
// - Node 专属: Stream, Buffer
/* status: 'D' 删除 */
export const updateSingleBanner = (params) => request({
  url: '/backendApi/banner/updateStatus',
  method: 'post',
  data: params,
  isLoading: true
})