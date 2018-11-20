<template>
	<div class="mainbottom">
		<dl @click="skip(index)" v-for="(a,index) in list2" :key="index">
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
				list2: [{
					id:11,
					img800: "https://img.youpin.mi-img.com/800_pic/3aec92223d6b8e5bd3927738a4889054.png",
					custom_name: "小米8 青春版",
					custom_summary: "镜面渐变色，2400万自拍旗舰",
					custom_price: 1399
				}, {
					id:12,
					img800: "https://img.youpin.mi-img.com/800_pic/2d63d69d360304f493b43b3760f6cdbb.png",
					custom_name: "小米8 屏幕指纹版",
					custom_summary: "压感屏幕指纹，双频GPS",
					custom_price: 3199
				}, {
					id:13,
					img800: "http://img.youpin.mi-img.com/800_pic/399_80484682e43563e0bc562d7389bfad30.png",
					custom_name: "小米米家电动滑板车",
					custom_summary: "30公里超长续航/双重刹车系统",
					custom_price: 1999
				}, {
					id:14,
					img800: "http://img.youpin.mi-img.com/800_pic/75_f63e91bbdd9569e5ffa718ef03f4cd17.png",
					custom_name: "九号平衡车",
					custom_summary: "22公里超长续航",
					custom_price: 1999
				}, {
					id:15,
					img800: "http://img.youpin.mi-img.com/800_pic/101284_588f824e5d275df174c855a2516e1e22.png",
					custom_name: "小米蓝牙项圈耳机",
					custom_summary: "项圈式设计，双单元声学架构",
					custom_price: 299
				}, {
					id:16,
					img800: "https://img.youpin.mi-img.com/800_pic/3bda19351a96eec8b153ccbcde4ff508.png",
					custom_name: "小米无线充电器（通用快充版）",
					custom_summary: "Qi标准，支持MIX 2S快充",
					custom_price: 69
				}, {
					id:17,
					img800: "https://img.youpin.mi-img.com/800_pic/45be66685c4dd9ec2b9088ae8a09e0e6.png",
					custom_name: "小米游戏本 第八代 15.6英寸",
					custom_summary: "全新第八代英特尔处理器",
					custom_price: 6499
				}, {
					id:18,
					img800: "http://img.youpin.mi-img.com/800_pic/72eb46f14462624dc377d8b6df622d42.png",
					custom_name: "小米蓝牙语音遥控器",
					custom_summary: "语音智能搜片",
					custom_price: 99
				}, {
					id:19,
					img800: "http://img.youpin.mi-img.com/800_pic/351_446f6b13f2bdc73b66243c3fde1b227c.png",
					custom_name: "小米便携鼠标",
					custom_summary: "轻薄便携，蓝牙连接",
					custom_price: 94
				}, {
					id:20,
					img800: "https://img.youpin.mi-img.com/800_pic/60c2446d6f0608f0f8a83ddf1bd220d0.png",
					custom_name: "小米净水器 1A（厨下式）",
					custom_summary: "3合1强化滤芯，更小更省地儿",
					custom_price: 1499
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