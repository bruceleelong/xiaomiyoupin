<template>
	<div class="tabbar">
		<div @click="skip(index)" v-for="(a,index) in arr" :key="index" class="tabbar-item" id="tabbar_main" data-tab-name="首页" data-next-url="/main/">
			<img class="tab-01-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIAQMAAABvIyEEAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA9JREFUeNpjYBgFo2D4AAAC0AAB4tdONAAAAABJRU5ErkJggg==">
			<span v-text="a.title" class="tabbar-item-text"></span>
		</div>
		<!--<div id="tabbar_category" class="tabbar-item" data-tab-name="分类" data-next-url="/goodscategory/">
			<img class="tab-02-0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIAQMAAABvIyEEAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA9JREFUeNpjYBgFo2D4AAAC0AAB4tdONAAAAABJRU5ErkJggg==">
			<span class="tabbar-item-text">分类</span>
		</div>
		<div id="tabbar_pinwei" class="tabbar-item" data-tab-name="品味" data-next-url="/pinwei/">
			<img class="tab-03-0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIAQMAAABvIyEEAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA9JREFUeNpjYBgFo2D4AAAC0AAB4tdONAAAAABJRU5ErkJggg==">
			<span class="tabbar-item-text">品味</span>
		</div>
		<div id="tabbar_cart" class="tabbar-item tabbar-cart" data-tab-name="购物车" data-next-url="/cart/">
			<img class="tab-04-0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIAQMAAABvIyEEAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA9JREFUeNpjYBgFo2D4AAAC0AAB4tdONAAAAABJRU5ErkJggg==">
			<span class="tabbar-item-text">购物车</span>
			<span class="cart-dot"></span>
		</div>
		<div id="tabbar_ucenter" class="tabbar-item" data-tab-name="个人" data-next-url="/ucenter/">
			<img class="tab-05-0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIAQMAAABvIyEEAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA9JREFUeNpjYBgFo2D4AAAC0AAB4tdONAAAAABJRU5ErkJggg==">
			<span class="tabbar-item-text">个人</span>
		</div>-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				page: 0,
				arr: [{
					title: "首页"
				}, {
					title: "分类"
				}, {
					title: "品味"
				}, {
					title: "购物车"
				}, {
					title: "个人"
				}]
			}
		},
		methods: {
			skip(index) {
				this.page = index;
				switch(index) {
					case 0:
						location.href = "#/main";
						break;
					case 1:
						location.href = "#/goodscategory";
						break;
					case 2:
						location.href = "#/pinwei";
						break;
					case 3:
						location.href = "#/cart";
						break;
					case 4:
						location.href = "#/ucenter";
						break;
					
				}
			}
		}
	}
</script>

<style>
	.tabbar {
		/* border-top-style: solid; */
		border-top: thin solid #b0b0b0;
		height: 50px;
		width: 100%;
		background-color: rgb(255, 255, 255);
		/*display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;*/
		display: -webkit-flex;
		-webkit-flex-direction: row;
		-webkit-justify-content: center;
		-webkit-align-items: center;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	
	.tabbar-item {
		position: relative;
		height: 100%;
		width: 25%;
		bottom: 0px;
		/*display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;*/
		display: -webkit-flex;
		-webkit-flex-direction: column;
		-webkit-align-items: center;
		-webkit-justify-content: flex-start;
	}
	
	.tab-01-1 {
		background-position: 0 11.111111%;
		background-size: 100%;
		position: absolute;
		left: 10px;
		top: 0px;
	}
	
	.tab-01-0,
	.tab-01-1,
	.tab-02-0,
	.tab-02-1,
	.tab-03-0,
	.tab-03-1,
	.tab-04-0,
	.tab-04-1,
	.tab-05-0,
	.tab-05-1 {
		margin-top: 4px;
		max-width: 100%;
		/*background-size: 100%;*/
		height: 24px;
		width: 24px;
		/*background-image: url(http://static.home.mi.com/app/shop/img?id=shop_712453f….png&w=72&h=720);*/
		background-image: url(../../assets/Xfooter.png);
	}
	
	.tabbar-item-text {
		display: inline-block;
		margin-top: 25px;
		padding: 10px;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 12px;
		color: rgb(132, 95, 63);
		line-height: 14.4px;
	}
	
	.tab-02-0 {
		background-position: 0 22.222222%;
		background-size: 100%;
		position: absolute;
		left: 10px;
		top: 0px;
	}
	
	.tab-03-0 {
		background-position: 0 44.444444%;
		background-size: 100%;
		position: absolute;
		left: 10px;
		top: 0px;
	}
	
	.tab-04-0 {
		background-position: 0 66.666667%;
		background-size: 100%;
		position: absolute;
		left: 10px;
		top: 0px;
	}
	
	.tabbar-cart .cart-dot {
		display: none;
		position: absolute;
		right: 10px;
		top: 3px;
		width: 16px;
		height: 16px;
		border-radius: 8px;
		background-color: #f00;
		color: #fff;
		font-size: 12px;
		line-height: 16px;
		text-align: center;
	}
	
	.tab-05-0 {
		background-position: 0 88.888889%;
		background-size: 100%;
		position: absolute;
		left: 10px;
		top: 0px;
	}
</style>