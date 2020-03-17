import Vue from 'vue'
import App from './App'
import VRouter from '../node_modules/vue-router'
import Apple from './components/apple'
import Banner from './components/banner'
Vue.use(VRouter);
Vue.config.productionTip = false;
let router = new VRouter({
	mode:"history"
	,routes:[
		{
			path:'/apple/:id',
			component:Apple
		}
		,{
			path:'/banner',
			component:Banner
		}
	]
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
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  /*
	function(h){
		return h(App)
	}
  */
  render: h => h(App)
})
