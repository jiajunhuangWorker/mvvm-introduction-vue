Vue.component('todo',{
	props:['todo'],
	template:'<li>我是測試一下template 模板{{ todo.text }}</li>'
})
new Vue({
	el:'#app'
	,data:{
		gridList:[
			{id:0,text:'111'}
			,{id:1,text:'222'}
			,{id:2,text:'333'}
		]
	}
})