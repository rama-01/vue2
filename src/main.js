import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import request from "@/utils/request" // 实现 form generator 使用自己定义的 axios request 对象
import '@/plugins/element-ui'
import '@/assets/styles/index.scss'
import './permission'  //permission control
import '@/utils/umlib'
Vue.prototype.$axios = request //?
Vue.config.productionTip = false

// 计算表格自适应高度
import tableHeight from '@/utils/tableHeight.js'
Vue.prototype.$tableHeight = tableHeight

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
