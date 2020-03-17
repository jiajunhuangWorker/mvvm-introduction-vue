<template>
	<div>
		i am apple
		<!-- <h2>{{$route.params}}</h2> -->
		<button @click='getParam'>get param</button>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		data(){
			return {

    		}
		},methods:{
			getParam(){
				console.info(this.$route.params);
			}
		}
	}
</script>