// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'
//全局注册组件start
	Vue.component('my-header',{
		template:'<p>this is my header </p>',
		// data:{
		// 	try:'我是trys'
		// }
	})
//全局注册组件end
//局部组件
	var myHeaderChild = {
		template:'<div>我是myheaderChilder引入</div>'
	}
	var myHeader={
		template:'<div><header-child></header-child><br/>我是myHeader的文字</div>',
		components: {
			'header-child' : myHeaderChild
		}
	}
	
//局部组件
// Vue.config.productionTip = false

/* eslint-disable no-new */
// let myVue = new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>',
//   data: { 
//   	fruit: 'apple'
//   }
// })
// console.log(myVue.fruit)

//root组件-案例一
// new Vue({
// 	el:'#app',
// 	template:'<p>hellow!word{{word}}</p>',
// 	data:{
// 		word:' hellow,lucas'
// 	}
// })

//root组件-案例二
// new Vue({
// 	el:'#app',
// 	data:{
// 		word:'hellow!'
// 	}
// })

//root组件-案例三
new Vue({
	el:'#app',
	data:{
		word:'我是data'
	},
	components:{
		'my-header':myHeader
	}
})