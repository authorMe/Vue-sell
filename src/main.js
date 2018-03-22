import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import App from './App'

import router from './router/index.js'
// Vue.config.productionTip = false
Vue.use(Router)

/* eslint-disable no-new */
Vue.prototype.$http = axios
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
