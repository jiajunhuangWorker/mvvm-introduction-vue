var app=new Vue({
	el:'#app',
	data:{
		message:'hellow!lucas'+new Date().toLocaleString(),
		seen:1,
		todo:[
			{text:'我一定要玩转vue'}
			,{text:'每天熬到2点睡觉把你强吃了'}
			,{text:'比knockout容易多了'}
		]
	},methods:{
		reverseMessage:function(){
			return this.message=this.message.split('').reverse().join('');
		}
	}
})