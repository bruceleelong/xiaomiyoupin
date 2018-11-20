<template>
	<div >
		<gheader />
		<gcontent4 />
		<xfooter />
	</div>
</template>

<script>
	import gheader from '../components/goodscategory/Gheader.vue';
	import gcontent4 from '../components/goodscategory/Gcontent4.vue';
	import xfooter from '../components/main/Xfooter.vue';
	export default {
		data() {
			return {

			}
		},
		components: {
			gheader,
			gcontent4,
			xfooter
			
		}
	}
</script>

<style>
	
</style>