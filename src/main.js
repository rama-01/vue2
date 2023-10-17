import Vue from 'vue'
import App from './App.vue'
import '@/plugins/element-ui'

import router from '@/router'

// Vue.config.productionTip = false

// 全部引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

import '@/assets/styles/tailwind/index.css'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
