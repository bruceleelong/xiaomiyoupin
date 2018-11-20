<template>
	<div class="mainbottom">
		<dl @click="skip(index)" v-for="(a,index) in list6" :key="index">
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
				list6: [{
					id:51,
					img800: "https://img.youpin.mi-img.com/800_pic/74354dcef5b47cb5bfa4a60d8a4bb993.png",
					custom_name: "COMO LIVING 铜纤维抗菌防螨保暖被",
					custom_summary: "铜基纤维，抗菌防螨，柔软轻盈",
					custom_price: 179
				}, {
					id:52,
					img800: "http://img.youpin.mi-img.com/800_pic/100412_uh56g5lgtxos.png",
					custom_name: "3D七孔保暖被",
					custom_summary: "1:4:1优质填充，更轻更暖不压身",
					custom_price: 209
				}, {
					id:53,
					img800: "http://img.youpin.mi-img.com/800_pic/100360_2w342lnm2q6u2.png",
					custom_name: "8H 95%白鹅绒静音被（冬款）",
					custom_summary: "95%大朵白鹅绒，防钻绒工艺",
					custom_price: 1399
				}, {
					id:54,
					img800: "http://img.youpin.mi-img.com/800_pic/836107762158311e2cf62a20c9cc7416.png",
					custom_name: "8H天然蚕丝子母被",
					custom_summary: "100%天然蚕丝，四季可用",
					custom_price: 329
				}, {
					id:55,
					img800: "https://img.youpin.mi-img.com/800_pic/74c32f77d4da2787f173e1bb5c470aaa.png",
					custom_name: "长绒棉暖绒四件套",
					custom_summary: "60支长绒棉，陶瓷温感起绒技术",
					custom_price: 419
				}, {
					id:56,
					img800: "http://img.youpin.mi-img.com/800_pic/848_3kl6tgeb6djr2.png",
					custom_name: "光双宫茧桑蚕丝被（春秋款）",
					custom_summary: "舒适保暖，3斤/4斤可选",
					custom_price: 1099
				}, {
					id:57,
					img800: "https://img.youpin.mi-img.com/800_pic/c6bf0f358d6cd3dd1dd142812a30f747.png",
					custom_name: "每晚澳大利亚羊毛床褥",
					custom_summary: "100%美利奴羊毛 久用不塌陷 ",
					custom_price: 279
				}, {
					id:58,
					img800: "https://img.youpin.mi-img.com/800_pic/1ad1166686c428445e26b26bd6b95aab.png",
					custom_name: "每晚白鹅毛蓄热床褥",
					custom_summary: "自然蓄热，蓬松温暖",
					custom_price: 319
				}, {
					id:59,
					img800: "https://img.youpin.mi-img.com/800_pic/2bcd3b155b08dbee3a8b9542b7e0d30d.png",
					custom_name: "智暖95％白鹅绒被",
					custom_summary: "超轻超暖分区白鹅绒，超柔静音",
					custom_price: 899
				}, {
					id:60,
					img800: "https://img.youpin.mi-img.com/800_pic/f5579f64a3b8c71d11c6c55d7f9ed0bf.png",
					custom_name: "8H抗菌白鸭绒被 冬被",
					custom_summary: "90%白鸭绒，全棉防羽面料",
					custom_price: 699
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