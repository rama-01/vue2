import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import request from '@/utils/request'
import '@/plugins/element-ui'
import '@/assets/styles/tailwind/index.css'

// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
