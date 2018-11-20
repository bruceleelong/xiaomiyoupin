<template>
	<div class="mainbottom">
		<dl @click="skip(index)" v-for="(a,index) in list9" :key="index">
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
				list9: [{
					id:81,
					img800: "http://img.youpin.mi-img.com/800_pic/100617_179oquvgk60aq.png",
					custom_name: "和厨番茄鸡蛋冻干面",
					custom_summary: "非油炸冻干技术，新鲜口感， 汤汁浓郁",
					custom_price: 59.9
				}, {
					id:82,
					img800: "https://img.youpin.mi-img.com/800_pic/da3389a9a82a72257357b1df8acdce9c.png",
					custom_name: "炫彩小背包",
					custom_summary: "4级防泼水，10L容量",
					custom_price: 29
				}, {
					id:83,
					img800: "http://img.youpin.mi-img.com/800_pic/129_0c5842a5e5b127e493517075187c8156.png",
					custom_name: "小米移动电源10000mAh高配版",
					custom_summary: "双向快充，仅12.58mm薄",
					custom_price: 149
				}, {
					id:84,
					img800: "http://img.youpin.mi-img.com/800_pic/3b0291da429f5c6b730fc1530b408215.png",
					custom_name: "极蜂天文望远镜",
					custom_summary: "90mm物镜口径/高分辨率成像/天地两用/连接手机拍照",
					custom_price: 1199
				}, {
					id:85,
					img800: "http://img.youpin.mi-img.com/800_pic/55b3ecb7cb994c5f1b7b8c1812cf9227.png",
					custom_name: "极蜂强光变焦手电筒",
					custom_summary: "CREE 1000流明进口灯珠",
					custom_price: 149
				}, {
					id:86,
					img800: "https://img.youpin.mi-img.com/800_pic/07603b5a4d80ca1f0186ddb5b874a510.png",
					custom_name: "极蜂智能数字对讲机 ",
					custom_summary: "语音回放/高发射功率/支持蓝牙耳机/手机写频",
					custom_price: 599
				}, {
					id:87,
					img800: "https://img.youpin.mi-img.com/800_pic/5e0627e4f3d2df4d4305b669c96417b4.png",
					custom_name: "极蜂双筒望远镜",
					custom_summary: "8倍黄金倍率，超宽带多层镀膜，IP67级充氮防水",
					custom_price: 299
				}, {
					id:88,
					img800: "http://img.youpin.mi-img.com/800_pic/eb8a78bd2236feb2a12bee12521e678c.png",
					custom_name: "早风多用全自动帐篷",
					custom_summary: "一提即可搭建/UPF50+双重防晒/超大帐内空间/一顶帐篷多种用法",
					custom_price: 299
				}, {
					id:89,
					img800: "http://img.youpin.mi-img.com/800_pic/101627_25b7qqyeqcjs5.png",
					custom_name: "早风户外双层速开帐篷",
					custom_summary: "3秒搭建，超大空间，防雨防潮，立体通风透气",
					custom_price: 229
				}, {
					id:90,
					img800: "https://img.youpin.mi-img.com/800_pic/369bc6f5850e3f3ecdf3a3e91c46c804.png",
					custom_name: "早风户外折叠桌",
					custom_summary: "加大桌面，稳固支撑，优质铝合金，轻巧便携",
					custom_price: 249
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