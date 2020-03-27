import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Detail from '@/pages/detail'
import analysis from '@/pages/detail/analysis'
import count from '@/pages/detail/count'
import publish from '@/pages/detail/publish'
import forecast from '@/pages/detail/forecast'
import OrderList from '@/pages/orderList'

Vue.use(Router)
console.log('index.js');
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/detail',
      name: 'detail',
      redirect:'/detail/analysis',
      component: Detail,
      children:[
      	{
      		path: 'analysis',
	      	name: 'analysis',
	      	component: analysis
      	},
      	{
      		path: 'count',
	      	name: 'count',
	      	component: count
      	},
      	{
      		path: 'publish',
	      	name: 'publish',
	      	component: count
      	},
      	{
      		path: 'forecast',
	      	name: 'forecast',
	      	component: forecast
      	}
      ]
    },{
      path:'/orderList'
      ,name:'orderList'
      ,component:OrderList
    }
  ]
})