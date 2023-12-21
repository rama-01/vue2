import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/plugins/element-ui'
import '@/assets/styles/tailwind/index.css'

import request from "@/utils/request" // 实现 form generator 使用自己定义的 axios request 对象
import './permission'  //permission control
Vue.prototype.$axios = request
// Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
