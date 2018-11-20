<template>
	<div class="mainbottom">
		<dl @click="skip(index)" v-for="(a,index) in list5" :key="index">
			<dt><img :src="a.img800"/></dt>
			<dd v-text="a.custom_summary"></dd>
			<dd v-text="a.custom_name"></dd>
			<dd>￥<span v-text="a.custom_price"></span></dd>
		</dl>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list5: [{
					id:41,
					img800: "https://img.youpin.mi-img.com/800_pic/8f65645770d87bee716f290ad94413c2.png",
					custom_name: "蓄热保暖空军夹克（男女款）",
					custom_summary: "高科技蓄热棉，4级防泼水",
					custom_price: 239
				}, {
					id:42,
					img800: "https://img.youpin.mi-img.com/800_pic/2eb6a20cbd3fd0cfb352eb0671f98a12.png",
					custom_name: "单向导湿长袖T恤",
					custom_summary: "单向导湿，排汗速干，贴身保暖",
					custom_price: 169
				}, {
					id:43,
					img800: "https://img.youpin.mi-img.com/800_pic/3db75e81d21898404bd35735506dc6d2.png",
					custom_name: "全棉重磅圆领卫衣（WORK行动系列）",
					custom_summary: "重磅纯棉，百搭有型，原创图案",
					custom_price: 149
				}, {
					id:44,
					img800: "https://img.youpin.mi-img.com/800_pic/46ef2d9d05e1e9f2ea51f65ac6582c19.png",
					custom_name: "全棉重磅印花连帽卫衣（WORK系列）",
					custom_summary: "重磅纯棉，经典连帽，原创图案",
					custom_price: 169
				}, {
					id:45,
					img800: "https://img.youpin.mi-img.com/800_pic/8ba41c6871dc96168561544fdbac61ed.png",
					custom_name: "基础秋衣秋裤套装（男款）",
					custom_summary: "立体裁剪，简约大气，柔软舒适",
					custom_price: 89
				}, {
					id:46,
					img800: "https://img.youpin.mi-img.com/800_pic/d3310402e0f04a10565eb055bd48291c.png",
					custom_name: "针织抓绒卫裤 男女款",
					custom_summary: "立体包针凸绣工艺，加厚抓绒保暖",
					custom_price: 129
				}, {
					id:47,
					img800: "https://img.youpin.mi-img.com/800_pic/6fd0f0f892ee54c86e0e8e165855d464.png",
					custom_name: "城市迷彩圆领卫衣（WORK系列）",
					custom_summary: "潮流迷彩，简单易搭，舒适有型",
					custom_price: 129
				}, {
					id:48,
					img800: "https://img.youpin.mi-img.com/800_pic/35466fc26a525f561da86e9a3cc8183c.png",
					custom_name: "全棉素色连帽卫衣",
					custom_summary: "全棉精梳面料，经典百搭",
					custom_price: 129
				}, {
					id:49,
					img800: "https://img.youpin.mi-img.com/800_pic/25fa2ca86ecf610d6a5b00c23b46a5ed.png",
					custom_name: "基础秋衣秋裤套装（女款）",
					custom_summary: "修身版型，优雅圆领，保暖舒适",
					custom_price: 89
				}, {
					id:50,
					img800: "https://img.youpin.mi-img.com/800_pic/b83de7d2d49c209e8616b7ebc699cae2.png",
					custom_name: "刺绣针织圆领抓绒卫衣",
					custom_summary: "双层复合面料，立体包针凸绣工艺",
					custom_price: 129
				}]
			}
		},
		methods: {
			skip(index) {
				location.href = "#/detail?id="+goods.id;
			}
		},
		mounted() {

		}
	}
</script>

<style scoped>
	.mainbottom {
		flex: 1;
		flex-wrap: wrap;
	}
	
	.mainbottom dl {
		width: 50%;
		padding: 0 5px;
		box-sizing: border-box;
		margin: 0 0;
		float: left;
	}
	
	.mainbottom dl>dd {
		margin: 0 0;
	}
	
	.mainbottom dl>dd:nth-child(2) {
		height: 32px;
		font-size: 12px;
		color: rgb(159, 128, 82);
		line-height: 32px;
		overflow: hidden;
	}
	
	.mainbottom dl>dd:nth-child(3) {
		height: 20px;
		line-height: 20px;
		font-size: 13px;
		overflow: hidden;
	}
	
	.mainbottom dl>dd:nth-child(4) {
		font-size: 15px;
		color: rgb(182, 9, 9);
	}
</style>