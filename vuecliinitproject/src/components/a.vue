<template>
	<div>
		<div>{{hellow}}</div>
		<div>{{number}}</div>
		<div>{{myValue}}</div>
		<!-- <div>{{person[0].name}}</div> -->
		<!-- 子组件向父组件传递信息 -->
		<button @click="getMyEvent">SonBtn</button>
		<div>-------------------</div>

		<solt name="header"></solt>
		
		<solt name="footer"></solt>
	</div>
</template>
<script>

export default{
	// props:['number']
	props:{
		// 接受数据的类型
		'number':[Number,String]
		,'myValue':[String]
		,'person':[Object]
	}
	,data(){
		return {
			hellow:'i am component a'
		}
	},
	methods:{
		getMyEvent(){
			this.$emit('my-event',this.hellow)
		}
	}
}
</script>