import axios from 'axios'
import { getToken } from './auth';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: 'http://localhost:81' + '/dev-api', // 此处的 /admin-api/ 地址，原因是后端的基础路径为 /admin-api/
  // 超时
  timeout: 30000,
  // 禁用 Cookie 等信息
  // withCredentials: false,
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 请求统一添加token
  if (getToken()) {
    config.headers['Access-Token'] = getToken()
  }
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default service