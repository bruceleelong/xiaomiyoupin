<template>
	<div>
		<uheader />
		<ucontent />
		<xfooter />
	</div>
</template>

<script scoped>
	import uheader from '../components/ucenter/Uheader.vue';
	import ucontent from '../components/ucenter/Ucontent.vue';
	import xfooter from '../components/main/Xfooter.vue';
	
	export default {
		data() {
			return {

			}
		},
		components: {
			uheader,
			ucontent,
			xfooter
		}
	}
</script>

<style>

</style>