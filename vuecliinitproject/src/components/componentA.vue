<template>
	<div>
		<!-- 部分组件显示问题 -->
		<div v-if="componentShow">{{hellow}}</div>
		<!-- 父组件传入的双向绑定值 -->
		<div>{{myValue}}</div>
		<!-- 传递number -->
		<!-- 父组件传入的Number值 -->
		<div>{{number}}</div>
		<!-- 父组件传入的对象 -->
		<div>{{person}}</div>
		<!-- <div>{{person[0].name}}</div> -->
		<!-- 子组件向父组件传递信息 -->
		<button v-show="btnShow =='true'" @click="getMyEvent">子组件</button>

		<solt name="header"></solt>
		<solt name="footer"></solt>
		{{keepAlive}}
	</div>
</template>
<script>

export default{
	props:{
		// 接受数据的类型
		'number':[Number,String]
		,'myValue':[String]
		,'person':[Object]
		,'componentShow':[String]
		,'btnShow':[String,Number]
		,'keepAlive':[String]
	}
	,data(){
		return {
			hellow:' i am componentA'
			,person:""
		}
	},
	methods:{
		getMyEvent(){
			this.$emit('my-event',this.hellow)
		}
	}
}
</script>
<style>
.mtt,.tt{
  font-size:16px;
  font-weight:700;
  margin-top:30px;
}
.tt:first-child{
  margin-top:0;
}
.mtt{
  font-size:14px;
  margin-top:15px;
}
</style>
