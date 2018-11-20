<template>
	<div>
		<img src="../../assets/home-banner1.jpg" alt="" />
		<button>跳转</button>
	</div>
</template>

<script>
	import $ from 'jquery'
	window.$ = $
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		mounted() {
			$('img').click(function() {
				location.href = "http://www.baidu.com";
			})
		}
	}
</script>

<style>

</style>