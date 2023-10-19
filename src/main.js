import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/plugins/element-ui'
import '@/assets/styles/tailwind/index.css'

import request from "@/utils/request" // 实现 form generator 使用自己定义的 axios request 对象
// console.log(request)
Vue.prototype.$axios = request
// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
