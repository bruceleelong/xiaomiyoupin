<template>
	<div>
		<p>
			<img style="width:17px;height:17px;" src="https://m.youpin.mi.com/youpin/static/m/res/images/device_shop_search_button.png" />
			<input type="text" placeholder="小米MIX3" />
		</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	p {
		display: flex;
		align-items: center;
		height: 44px;
		border-bottom: 1px solid rgb(239, 239, 240);
		padding: 0;
	}
	
	p img {
		position: relative;
		left: 25px;
		top: 0;
	}
	
	p input {
		width: 90%;
		height: 25px;
		background-color: #eee;
		border: 0;
		border-radius: 3px;
		padding-left: 35px;
		box-sizing: border-box;
	}
</style>