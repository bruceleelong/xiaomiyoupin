<template>
	<div>
		<cheader /> 
		<ccontent1  /> 

	</div>
</template>

<script>
	import cheader from '../components/cart/Cheader.vue';
	import ccontent1  from '../components/cart/Ccontent1.vue';
	
	export default {
		data() {
			return {

			}
		},
		components: {
			cheader,
			ccontent1 
		}
	}
</script>

<style>

</style>