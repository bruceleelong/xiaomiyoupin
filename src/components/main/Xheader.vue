<template>
	<div id="navigator" class="navigator">
		<div class="navigator-logo">
			<img src="https://static.home.mi.com/youpin/static/m/res/images/navi_title_v4.png" class="navigator-logo-img">
		</div>
		<div id="navigator_search" class="navigator-search">
			<img class="navigator-search-img" src="https://cbu01.alicdn.com/cms/upload/2017/294/133/3331492_2093810242.png">
			<span class="navigator-search-text">小米电视 新品上市</span>
		</div>
		<div id="navigator_msg" class="navigator-msg">
			<img class="navigator-msg-img" src="https://static.home.mi.com/youpin/static/m/res/images/std_titlebar_home_message.png">
			<span class="red-dot">9+</span>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style>
	.navigator {
		/* border-bottom: thin solid #b0b0b0; */
		/*display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;*/
		display: -webkit-flex;
		-webkit-flex-direction: row;
		-webkit-justify-content: flex-start;
		-webkit-align-items: center;
		width: 100%;
		height: 38px;
		background-color: white;
	}
	
	.navigator-logo {
		border: 0px solid black;
		position: relative;
		width: 76px;
		height: 28px;
		/*display: flex;
		flex-direction: column;
		align-items: center;*/
		display: -webkit-flex;
		-webkit-flex-direction: column;
		-webkit-align-items: center;
	}
	
	.navigator-logo-img {
		/*display: flex;*/
		display: -webkit-flex;
		position: relative;
		right: 0px;
		width: 64px;
		height: 28px;
	}
	
	.navigator-search {
		border: 0px solid black;
		position: relative;
		flex: 1 0 0%;
		height: 28px;
		background-color: rgb(238, 238, 238);
		border-radius: 1.5px;
		/*display: flex;
		flex-direction: row;
		align-content: flex-start;
		align-items: center;*/
		display: -webkit-flex;
		overflow: hidden;
		-webkit-flex-direction: row;
		-webkit-align-content: flex-start;
		-webkit-align-items: center;
	}
	
	.navigator-search-img {
		/*display: flex;*/
		display: -webkit-flex;
		width: 13px;
		height: 13px;
		margin-left: 6px;
	}
	
	.navigator-search-text {
		flex: 1;
		border: 0px solid black;
		position: relative;
		box-sizing: border-box;
		/*display: -webkit-block;*/
		-webkit-box-orient: vertical;
		/*flex-direction: column;
		align-content: flex-start;*/
		-webkit-flex-direction: column;
		-webkit-align-content: flex-start;
		flex-shrink: 0;
		font-size: 12px;
		margin-left: 6px;
		margin-right: 6px;
		color: #999999;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.navigator-msg {
		border: 0px solid black;
		/*position: relative;*/
		display: flex;
		flex-direction: column;
		width: 40px;
		height: 28px;
		align-items: center;
		position: relative;
	}
	
	.navigator-msg-img {
		display: flex;
		width: 28px;
		height: 28px;
	}
	
	.red-dot {
		display: none;
		position: absolute;
		right: 3px;
		top: 0;
		width: 14px;
		height: 14px;
		border-radius: 7px;
		background-color: #f00;
		color: #fff;
		font-size: 12px;
		line-height: 14px;
		text-align: center;
	}
</style>