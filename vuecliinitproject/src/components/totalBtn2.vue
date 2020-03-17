<template>
	<div>
		<div>totalComponent2</div>
		<button @click ="addOne">add One</button>
		<button @click ="minusOne">minus One</button>
	</div>
</template>
<script>

export default{
	data(){
		return {
			price:1
		}
	}
	,methods:{
		addOne(){
			// this.$store.commit('increment',this.price);
			this.$store.dispatch('increase',this.price);
		}
		,minusOne(){
			this.$store.dispatch('reduce',this.price);
		}
	}
}
</script>