<template>
	<div>
		{{hellow}}
		<button @click="emitMyEvent">emit</button>
	</div>
</template>
<script>
export default{
	data(){
		return {
			hellow:'i am component a'
		}
	},
	methods:{
		emitMyEvent(){
			this.$emit('my-event',this.hellow)
		}
	}
}
</script>