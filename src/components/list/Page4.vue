<template>
	<div class="mainbottom">
		<dl @click="skip(index)" v-for="(a,index) in list4" :key="index">
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
				list4: [{
					id:31,
					img800: "https://img.youpin.mi-img.com/800_pic/74a1df98604dd0735c25a456d6e9c919.png",
					custom_name: "莱克吉米无线冲洗枪",
					custom_summary: "无线便携设计，随时随地清洗",
					custom_price: 699
				}, {
					id:32,
					img800: "https://img.youpin.mi-img.com/800_pic/6d3d040aed9652f8a3527b62e5319a10.png",
					custom_name: "小鲸洗智能马桶盖 Pro版",
					custom_summary: "富氧按摩，爽肤烘干，舒适坐感",
					custom_price: 1099
				}, {
					id:33,
					img800: "https://img.youpin.mi-img.com/800_pic/76c6268e307fd71448c58bcbe2639fc2.png",
					custom_name: "云米电热水器 60L",
					custom_summary: "双管速热，安心沐浴，恒久温暖",
					custom_price: 1099
				}, {
					id:34,
					img800: "http://img.youpin.mi-img.com/800_pic/101974_3rw9vco7sl2ij.png",
					custom_name: "睿米手持无线吸尘器",
					custom_summary: "送除螨刷，轻便大吸力，长久续航",
					custom_price: 1699
				}, {
					id:35,
					img800: "https://img.youpin.mi-img.com/800_pic/e9688a1f1c69fb66b9c5f357a76fec00.png",
					custom_name: "云米滚筒洗衣机 8kg",
					custom_summary: "干净不伤衣，平稳不打扰",
					custom_price: 1699
				}, {
					id:36,
					img800: "https://img.youpin.mi-img.com/800_pic/81653c050364bdc2f00551845c00ec02.png",
					custom_name: "维诺卡夫风冷恒温红酒柜",
					custom_summary: "广域恒温恒湿，光线阻隔，静音减震，国际品牌压缩机",
					custom_price: 1480
				}, {
					id:37,
					img800: "https://img.youpin.mi-img.com/800_pic/07a7b7e4f45ccf734b0af079123f87de.png",
					custom_name: "云米十字四门冰箱",
					custom_summary: "486L大容量，风冷无霜，360°循环出风，智能app控制",
					custom_price: 2699
				}, {
					id:38,
					img800: "https://img.youpin.mi-img.com/800_pic/03afc2c74ad06f1e56faea4d6b9d1e1a.png",
					custom_name: "云米燃气热水器 13L",
					custom_summary: "变频恒温，沐浴的每一刻都温暖",
					custom_price: 1099
				}, {
					id:39,
					img800: "https://img.youpin.mi-img.com/800_pic/9cb87ac5da485c7ce0aa8b3472ca7182.png",
					custom_name: "莱克吉米除螨吸尘器",
					custom_summary: "强力拍打，除螨更彻底",
					custom_price: 299
				}, {
					id:40,
					img800: "https://img.youpin.mi-img.com/800_pic/798bb9c54fa252a0faed94d3b4bd1f3d.png",
					custom_name: "莱克吉米手持无线吸尘器",
					custom_summary: "强劲大吸力，清洁更彻底",
					custom_price: 999
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