<template>
	<div>
		<pheader />		
		<pbanner />
		<pcontent1 />
		<pcontent2 />
		<pcontent3 />
		<xfooter />
	</div>
</template>

<script>
	import pheader from '../components/pinwei/Pheader.vue';
	import pbanner from '../components/pinwei/Pbanner.vue';
	import pcontent1  from '../components/pinwei/Pcontent1.vue';
	import pcontent2  from '../components/pinwei/Pcontent2.vue';
	import pcontent3  from '../components/pinwei/Pcontent3.vue';
	import xfooter  from '../components/main/Xfooter.vue';
	
	export default {
		data() {
			return {

			}
		},
		components: {
			pheader,
			pbanner,
			pcontent1,
			pcontent2,
			pcontent3,
			xfooter
		}
	}
</script>

<style>

</style>