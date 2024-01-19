import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/plugins/element-ui'
import '@/assets/styles/index.scss'
import './permission'  //permission control
import './assets/icons' // icon
import '@/utils/umlib'

// 计算表格自适应高度
import tableHeight from '@/utils/tableHeight.js'
Vue.prototype.$tableHeight = tableHeight

Vue.config.productionTip = false

new Vue({
  store,
  router,
  store,
  render: h => h(App),
}).$mount('#app')




