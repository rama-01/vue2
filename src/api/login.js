import request from '@/utils/request'

// 获取验证码
export const getCodeImg = () => request({
  url: 'clientApi/captcha/getCode',
  method: 'get'
})

// 登录方法
export const login = (param) => request({
  url: 'backendApi/login/doLogin',
  headers: {
    isToken: false
  },
  method: 'post',
  data:param
})

// 获取登录相关信息
export const getInfo = () => request({
  url: 'backendApi/login/getInfo',
  method: 'get'
})


// 退出登录
export const logout = () => request({
  url: 'backendApi/login/logout',
  method: 'post'
})
