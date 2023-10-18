import service from '@/utils/request'

// 游客登陆
export const visitorLogin = () => service.get({ url:"/register/anonimous"})