<template>
	<div class="mainbottom">
		<dl @click="skip(index)" v-for="(a,index) in list1" :key="index" :data-guid="a.id">
			<dt><img :src="a.img800"/></dt>
			<dd v-text="a.custom_summary"></dd>
			<dd v-text="a.custom_name"></dd>
			<dd>￥<span v-text="a.custom_price"></span></dd>
		</dl>
	</div>
</template>
<script>
	import common from '../../js/common.js';
	import $ from 'jquery'
	window.$ = $
	export default {
		data() {
			return {
				list1: [{
					id: 1,
					img800: "https://img.youpin.mi-img.com/800_pic/66c98da4db8a03085fec8cb64f928c56.png",
					custom_summary: "空气热能幕墙，通电即热",
					custom_name: "乐秀踢脚线式电暖器",
					custom_price: 749
				}, {
					id: 2,
					img800: "https://img.youpin.mi-img.com/800_pic/a32f6e7b1166e28baa711b1f0e1b2eca.png",
					custom_name: "云米对开门冰箱 483L",
					custom_summary: "大而纤薄，冷而无霜",
					custom_price: 2399
				}, {
					id: 3,
					img800: "https://img.youpin.mi-img.com/800_pic/e6dbf6cc4eaa294c2906168bee746ad2.png",
					custom_name: "脑电波助眠眼罩",
					custom_summary: "来自灵魂的音乐，让你安然入睡",
					custom_price: 249
				}, {
					id: 4,
					img800: "https://img.youpin.mi-img.com/800_pic/3c52d2bce4a408c41ea2fe8f6e21bc1c.png",
					custom_name: "男式纯羊毛英伦风短款大衣",
					custom_summary: "抗皱保暖，挺括立体，时尚轮廓",
					custom_price: 699
				}, {
					id: 5,
					img800: "https://img.youpin.mi-img.com/800_pic/410d1b13da478451cd556d081c5d4b69.png",
					custom_name: "全棉多袋休闲长裤（WORK系列）",
					custom_summary: "宽松版型，舒适透气，多种穿法",
					custom_price: 199
				}, {
					id: 6,
					img800: "https://img.youpin.mi-img.com/800_pic/6983541682d3c48a9d8286597ace6020.png",
					custom_name: "婴幼儿隔尿护理垫",
					custom_summary: "加厚进口木浆棉，3D导流",
					custom_price: 39
				}, {
					id: 7,
					img800: "https://img.youpin.mi-img.com/800_pic/5aeadc51d3a52df503fe9b87edd1a988.png",
					custom_name: "云米智能茶几冰吧",
					custom_summary: "尽享客厅美好时光",
					custom_price: 2499
				}, {
					id: 8,
					img800: "https://img.youpin.mi-img.com/800_pic/cee339a3352e6c2fd77d77db3153fb8d.png",
					custom_name: "双重抗菌床垫保护垫",
					custom_summary: "双重呵护 整夜清新睡眠",
					custom_price: 79
				}, {
					id: 9,
					img800: "https://img.youpin.mi-img.com/800_pic/a4150832535b47bf4143d0fbfbc15b18.png",
					custom_name: "修身小直筒轻暖牛仔裤（男女款）",
					custom_summary: "法兰绒牛仔面料，牛仔洗水风格",
					custom_price: 229
				}, {
					id: 10,
					img800: "https://img.youpin.mi-img.com/800_pic/2ad9f9e881266a74912fbebc63765cc1.png",
					custom_name: "多功能自由组合柜",
					custom_summary: "天然竹制，双向开放，灵活组合",
					custom_price: 29
				}]
			}
		},
		methods: {
			skip(index) {
				//数据信息保存到对象goods里面
				var goods = {
					id: this.list1[index].id,
					custom_summary: this.list1[index].custom_summary,
					custom_name: this.list1[index].custom_name,
					custom_price: this.list1[index].custom_price
				}
				var goodslist = common.Cookie.get('goodslist');
				if(goodslist === '') {
					goodslist = [];
				} else {
					goodslist = JSON.parse(goodslist);
				}

				goodslist.push(goods);
				//读取cookie
				common.Cookie.set('goodslist', JSON.stringify(goodslist));

				console.log(goodslist);
				location.href = "#/detail?id="+goods.id;
				
////				console.log(this);//this指向vue实例
////				console.log(this.list1[index].id);//显示点击的商品id
//				var params = 'id='+this.list1[index].id;
////				console.log(params);
//				location.href = "#/detail?"+params;//把商品id传递到详情页

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