// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//全局注册组件start
Vue.component('my-header',{
	template:'<p style="color:#252525">this is my header</p>'
})
//全局注册组件end
//局部组件
	var myfooter = {
		template:'<div style="color:red">我是myfooter引入</div>'
	}
	var	myBodyChild={
		template:'<div>this is my body child</div>'
	}
	var myBody={
		template:'<div style="color:#ccc"><body-child></body-child><br/>我是myBody的文字</div>'
		,components:{
			'body-child' : myBodyChild
		}
	}
new Vue({
	el:'#app',
	// template:"<p>hellow!</p>",
	data:{
		word:'我是data'
	}
	,components:{
		'my-footer':myfooter
		,'my-body':myBody
	}
	,render:h => h(App)
})

