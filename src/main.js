import Vue from 'vue'
import App from './App.vue'

import router from '@/router'

Vue.config.productionTip = false

import toast from '@/components';
Vue.use(toast);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
