import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import fuint from '@/plugins/fuint'
import './permission'  //permission control

Vue.use(fuint)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')