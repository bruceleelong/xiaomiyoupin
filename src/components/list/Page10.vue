<template>
	<div class="mainbottom">
		<dl @click="skip(index)" v-for="(a,index) in list10" :key="index">
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
				list10: [{
					id:91,
					img800: "http://img.youpin.mi-img.com/800_pic/101240_1vtnefo3ejel1.png",
					custom_name: "乔治威拿·罗蒂丘·宝龙干红葡萄酒",
					custom_summary: "罗蒂丘代表酒庄 法国2200年历史产区",
					custom_price: 649
				}, {
					id:92,
					img800: "http://img.youpin.mi-img.com/800_pic/100978_a0839af2eddb8307a8d76dd4f334ddf9.png",
					custom_name: "洁净免洗 1号黑茶",
					custom_summary: "洁净免洗，营养丰富，科学重塑",
					custom_price: 169
				}, {
					id:93,
					img800: "https://img.youpin.mi-img.com/800_pic/9e3b18b8205f6e1b287cc528269b1f75.png",
					custom_name: "阳澄湖大闸蟹（礼盒礼卡可选）",
					custom_summary: "出口品质，生态养殖，鲜活4对装",
					custom_price: 218
				}, {
					id:94,
					img800: "http://img.youpin.mi-img.com/800_pic/102346_e9bcc06ba68ab2e17d01f71fa743158a.png",
					custom_name: "一支好参（干海参速发型）",
					custom_summary: "营养便携，泡发简单",
					custom_price: 368
				}, {
					id:95,
					img800: "https://img.youpin.mi-img.com/800_pic/c8eb70764204557e929ed2a58cbc3ff5.png",
					custom_name: "沃格尔混合麦片 400g/盒",
					custom_summary: "新西兰进口，丰富原料，均衡配比",
					custom_price: 39
				}, {
					id:96,
					img800: "https://img.youpin.mi-img.com/800_pic/0230f76974b6c7504611a139176ce499.png",
					custom_name: "南美进口整肉原切牛肉块",
					custom_summary: "真味牛肉，一次吃个够",
					custom_price: 129
				}, {
					id:97,
					img800: "https://img.youpin.mi-img.com/800_pic/71ef08aeffcab5eef6906bf0cbdbe3f4.png",
					custom_name: "极简珍珠项链",
					custom_summary: "AKOYA海水珍珠，18K金",
					custom_price: 899
				}, {
					id:98,
					img800: "http://img.youpin.mi-img.com/800_pic/101900_3su9rodgvilrb.png",
					custom_name: "经典闪耀钻戒",
					custom_summary: "比利时亮式切割，显钻设计",
					custom_price: 4349
				}, {
					id:99,
					img800: "https://img.youpin.mi-img.com/800_pic/180c16d38d9c0bb1ef401bae0f4221f2.png",
					custom_name: "水晶石英腕表",
					custom_summary: "轻奢水晶元素，瑞士进口机芯",
					custom_price: 369
				}, {
					id:100,
					img800: "http://img.youpin.mi-img.com/800_pic/101427_23jv61c96b1p.png",
					custom_name: "牛皮水桶包(赠配包）",
					custom_summary: "美国进口优质皮胚，七十三道手作工艺，可调节肩带",
					custom_price: 399
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