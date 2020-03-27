import Vue from 'vue'
import App from './App'
import router from './router'
import mock from './mock/mock'

import store from './store'
Vue.config.productionTip = false
console.log(Vue);
/* eslint-disable no-new */
new Vue({
  el: '#app ',
  router,
  store,
  render: h => h(App)
})
