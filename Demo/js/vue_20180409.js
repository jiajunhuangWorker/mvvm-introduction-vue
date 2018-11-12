/*
	vue模块化前提需要集成开发环境
	这里简单描述以作练习场景使用
*/		
	import Vue from 'Vue';
	new Vue({
		el:'#app',
		template:'<p>11{{ el }}</p>',
		data:{
			el：'2111'	
		}
	})

/*
	全局注册
	创建完全局组件之后就开始调用组件可以在挂载节点那直接调用{{ 组件名 }}
*/
	Vue.component("组件名",{
		template:'<p>我是全局组件，{{ el }}</p>',
			data:{
				el:'我是数据'		
			}
		}
	})
/*
	局部注册
*/
	var my-component ={
		template:'<div>123{{ my-component2}}</div>',
		component:{
			:'my-component2'
		}
	}
	var my-component2 ={
		template:'<div>我是my-component组件2</div>'
	}
	new Vue({
		el:'#app',
		template:'<div>123</div>',
		data:{
			el:'我是数据啊'
		},
		component:{
			my-component:'my-component'
		}
	})
