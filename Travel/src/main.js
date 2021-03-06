// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'style/reset.css'
import 'style/border.css'
import 'assets/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
import './assets/stylus/init.styl'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
/* 路由根据网址的不同,返回用户的界面不同 */
