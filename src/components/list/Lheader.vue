<template>
	<div>
		<img @click="forback" src="https://m.youpin.mi.com/youpin/static/m/res/images/std_tittlebar_main_device_back_normal.png" />
		<span>有品推荐</span>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			forback(){
				history.back();
			}
		}
	}
</script>

<style scoped>
	div {
		display: flex;
		align-items: center;
		height: 45px;
	}
	
	img {
		width: 40px;
		height: 45px;
	}
	
	span {
		margin-left: 25%;
		font-size: 16px;
	}
</style>