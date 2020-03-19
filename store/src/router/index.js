import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
Vue.use(Router)
console.log('index.js');
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
