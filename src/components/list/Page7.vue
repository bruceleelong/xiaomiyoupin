<template>
	<div class="mainbottom">
		<dl @click="skip(index)" v-for="(a,index) in list7" :key="index">
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
				list7: [{
					id:61,
					img800: "http://img.youpin.mi-img.com/800_pic/101422_1ee2jhwb4wxh6.png",
					custom_name: "反绒牛皮豆豆鞋",
					custom_summary: "丝柔感反绒牛皮，透气牛皮里面，分区按摩式鞋底",
					custom_price: 299
				}, {
					id:62,
					img800: "http://img.youpin.mi-img.com/800_pic/102027_f7340c0a0267ea5a3604367b99adda67.png",
					custom_name: "玺佳机械表•MY系列",
					custom_summary: "德国iF设计金奖，镂空机械美学",
					custom_price: 999
				}, {
					id:63,
					img800: "https://img.youpin.mi-img.com/800_pic/2d63d69d360304f493b43b3760f6cdbb.png",
					custom_name: "小米8 屏幕指纹版",
					custom_summary: "压感屏幕指纹，双频GPS",
					custom_price: 3199
				}, {
					id:64,
					img800: "http://img.youpin.mi-img.com/800_pic/101284_588f824e5d275df174c855a2516e1e22.png",
					custom_name: "小米蓝牙项圈耳机",
					custom_summary: "项圈式设计，双单元声学架构",
					custom_price: 299
				}, {
					id:65,
					img800: "http://img.youpin.mi-img.com/800_pic/101975_c42c1253d0e0eb4ce9b2b7c733d672be.png",
					custom_name: "ZMI 无线充电器（套装版）",
					custom_summary: "多协议快充，智能识别",
					custom_price: 119
				}, {
					id:66,
					img800: "https://img.youpin.mi-img.com/800_pic/4fd0aaefd6d07a39737681312bc90a75.png",
					custom_name: "炽魂游戏机械键盘 青春版",
					custom_summary: "Cherry机械轴，全键无冲",
					custom_price: 399
				}, {
					id:67,
					img800: "https://img.youpin.mi-img.com/800_pic/427551af639f9efa1259ffb094be8d2f.png",
					custom_name: "超纤PU贴皮篮球",
					custom_summary: "“掌”控全场，做你的MVP",
					custom_price: 169
				}, {
					id:68,
					img800: "http://img.youpin.mi-img.com/800_pic/102005_21lt83h2xx968.png",
					custom_name: "轻质植鞣皮低帮板鞋",
					custom_summary: "质感植鞣皮，抗菌防臭",
					custom_price: 339
				}, {
					id:69,
					img800: "https://img.youpin.mi-img.com/800_pic/8f31cf7ba472d52d863de8e7ebbe6097.png",
					custom_name: "INSAIT JOY茵战智能足球",
					custom_summary: "视频录制分享，优质控球体验",
					custom_price: 499
				}, {
					id:70,
					img800: "http://img.youpin.mi-img.com/800_pic/102217_0602863e06d8a437831a20b9009e2e22.png",
					custom_name: "太阳镜飞行员款",
					custom_summary: "纯钛镜架，尼龙偏光镜片",
					custom_price: 499
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