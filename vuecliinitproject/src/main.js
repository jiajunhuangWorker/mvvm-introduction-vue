import Vue from 'vue'
import App from './App'
import VRouter from '../node_modules/vue-router'
import Apple from './components/apple'
import Banner from './components/banner'
import redApple from './components/redApple'
import Vuex from '../node_modules/vuex'
Vue.use(VRouter);
Vue.use(Vuex);
Vue.config.productionTip = false;
let router = new VRouter({
	mode:"history"
	,routes:[
		{
		/*重定向*/
			path:'/'
			,redirect:'/apple'
		}
		,{
			path:'/apple'
			,component:{
				viewA:Apple,
				viewB:redApple
			}
			,name:"applePage"
			,children:[
				{
					path:'red'
					,component:redApple
				}
			]
		}
		,{
			path:'/banner',
			component:Banner
		}
	]
})

let store = new Vuex.Store({
	state:{
		totalPrice:0
	},
	getters:{
		getTotal(state){
			return state.totalPrice
		}
	}
	,mutations:{
		//同步操作
		increment(state,price){
			state.totalPrice +=price
		},
		decrement(state,price){
			state.totalPrice -=price
		}
	},
	actions:{
		//異步操作
		increase(context,price){
			context.commit('increment',price);
		},
		reduce(context,price){
			context.commit('decrement',price);
		}
	}
})
Vue.directive('css',{
	// 只执行一次
	bind(el,bind){
		console.info('---------start-----------');
		console.info('bind:',el)
		console.info('bind:',bind)

		let styleObj = bind.value;
		let arr = []
		for(let key in styleObj){
			arr.push(key + ':' + styleObj[key])
		}
		arr=arr.join(';');
		el.style.cssText = arr;
		console.info('---------end-----------');
		console.info('bind:',el)
		console.info('bind:',bind)
	}
	,inserted(el,bind){
		console.info('inserted:',el)
		console.info('inserted:',bind)
	}
	,destroy(el){

	}
})
Vue.directive('focus',{
	// 只执行一次
	bind(el,bind){
		console.info('focus',el)
		el.focus()
	}
	,inserted(el,bind){
		console.info('focus',el)
		el.focus()
	}
	,destroy(el){

	}
})
// router.beforeEach(router.push({path:'apple'}))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  /*
	function(h){
		return h(App)
	}
  */
  render: h => h(App)
})
