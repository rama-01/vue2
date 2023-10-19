import request from '@/utils/request'

// 游客登陆
export const visitorLogin = () => request({
  url: "/register/anonimous",
  method: 'get'
})

