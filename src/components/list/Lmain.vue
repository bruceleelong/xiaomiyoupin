<template>
	<div class="main">
		<div class="maintop">
			<!-- Swiper -->
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div :class="{active:page===index}" @click="skip(index)" v-for="(a,index) in arr" :key="index" v-text="a.title" class="swiper-slide"></div>
					<!--<div class="swiper-slide">Slide 2</div>
					<div class="swiper-slide">Slide 3</div>
					<div class="swiper-slide">Slide 4</div>
					<div class="swiper-slide">Slide 5</div>
					<div class="swiper-slide">Slide 6</div>
					<div class="swiper-slide">Slide 7</div>
					<div class="swiper-slide">Slide 8</div>
					<div class="swiper-slide">Slide 9</div>
					<div class="swiper-slide">Slide 10</div>
					<div class="swiper-slide">Slide 11</div>-->
				</div>
			</div>
		</div>

		
		<!--<div class="mainbottom">
			<dl v-for="(a,index) in list1" :key="index">
				<dt><img :src="a.img800"/></dt>
				<dd v-text="a.custom_summary"></dd>
				<dd v-text="a.custom_name"></dd>
				<dd>￥<span v-text="a.custom_price"></span></dd>
			</dl>
		</div>-->
	</div>
</template>

<script>
//	import axios from 'axios'
	import Swiper from 'swiper' //引入的是swiper.js
	import "../../../node_modules/swiper/dist/css/swiper.css"
	export default {
		data() {
			return {
				page: 0,
				arr: [{
					isShow: false,
					title: "每日上新"
				}, {
					isShow: false,
					title: "小米自营"
				}, {
					isShow: false,
					title: "开学自备"
				}, {
					isShow: false,
					title: "生活电器"
				}, {
					isShow: false,
					title: "应季换新"
				}, {
					isShow: false,
					title: "秋冬换新"
				}, {
					isShow: false,
					title: "男士精选"
				}, {
					isShow: false,
					title: "女神范儿"
				}, {
					isShow: false,
					title: "秋季出游"
				}, {
					isShow: false,
					title: "世界风物"
				}, {
					isShow: false,
					title: "本月推荐"
				}],
//				list1: [{
//					img800: "https://img.youpin.mi-img.com/800_pic/66c98da4db8a03085fec8cb64f928c56.png",
//					custom_summary: "空气热能幕墙，通电即热",
//					custom_name: "乐秀踢脚线式电暖器",
//					custom_price: 749
//				}, {
//					img800: "https://img.youpin.mi-img.com/800_pic/a32f6e7b1166e28baa711b1f0e1b2eca.png",
//					custom_name: "云米对开门冰箱 483L",
//					custom_summary: "大而纤薄，冷而无霜",
//					custom_price: 2399
//				}, {
//					img800: "https://img.youpin.mi-img.com/800_pic/e6dbf6cc4eaa294c2906168bee746ad2.png",
//					custom_name: "脑电波助眠眼罩",
//					custom_summary: "来自灵魂的音乐，让你安然入睡",
//					custom_price: 249
//				}, {
//					img800: "https://img.youpin.mi-img.com/800_pic/3c52d2bce4a408c41ea2fe8f6e21bc1c.png",
//					custom_name: "男式纯羊毛英伦风短款大衣",
//					custom_summary: "抗皱保暖，挺括立体，时尚轮廓",
//					custom_price: 699
//				}, {
//					img800: "https://img.youpin.mi-img.com/800_pic/410d1b13da478451cd556d081c5d4b69.png",
//					custom_name: "全棉多袋休闲长裤（WORK系列）",
//					custom_summary: "宽松版型，舒适透气，多种穿法",
//					custom_price: 199
//				}, {
//					img800: "https://img.youpin.mi-img.com/800_pic/6983541682d3c48a9d8286597ace6020.png",
//					custom_name: "婴幼儿隔尿护理垫",
//					custom_summary: "加厚进口木浆棉，3D导流",
//					custom_price: 39
//				}, {
//					img800: "https://img.youpin.mi-img.com/800_pic/5aeadc51d3a52df503fe9b87edd1a988.png",
//					custom_name: "云米智能茶几冰吧",
//					custom_summary: "尽享客厅美好时光",
//					custom_price: 2499
//				}, {
//					img800: "https://img.youpin.mi-img.com/800_pic/cee339a3352e6c2fd77d77db3153fb8d.png",
//					custom_name: "双重抗菌床垫保护垫",
//					custom_summary: "双重呵护 整夜清新睡眠",
//					custom_price: 79
//				}, {
//					img800: "https://img.youpin.mi-img.com/800_pic/a4150832535b47bf4143d0fbfbc15b18.png",
//					custom_name: "修身小直筒轻暖牛仔裤（男女款）",
//					custom_summary: "法兰绒牛仔面料，牛仔洗水风格",
//					custom_price: 229
//				}, {
//					img800: "https://img.youpin.mi-img.com/800_pic/2ad9f9e881266a74912fbebc63765cc1.png",
//					custom_name: "多功能自由组合柜",
//					custom_summary: "天然竹制，双向开放，灵活组合",
//					custom_price: 29
//				}]
			}
		},
		methods: {
			skip(index) {
				this.page = index;
				switch(index) {
					case 0:
						location.href = '#/list/page1';
						break;
					case 1:
						location.href = '#/list/page2';
						break;
					case 2:
						location.href = '#/list/page3';
						break;
					case 3:
						location.href = '#/list/page4';
						break;
					case 4:
						location.href = '#/list/page5';
						break;
					case 5:
						location.href = '#/list/page6';
						break;
					case 6:
						location.href = '#/lsit/page7';
						break;
					case 7:
						location.href = '#/list/page8';
						break;
					case 8:
						location.href = '#/list/page9';
						break;
					case 9:
						location.href = '#/list/page10';
						break;

					case 10:
						location.href = '#/list/page11';
						break;
				}
			}
			//			getNews: function() {
			//				var self = this;
			//				$.ajax({
			//					type: "POST",
			//					url: "http://localhost:5000/list", //之前post请求不显示数据是因为把http写成了https
			//					success: function(data) {
			//						var goods = JSON.parse(data);
			//						console.log(goods);
			//						
			//					}
			//				})
			//			}
			//			postInfo(){
			//				let url = "https://m.youpin.mi.com/app/shopv3/pipe";
			//				let params = new URLSearchParams();//这个方法在axios的官网中有介绍，除了这个方法还有qs这个方法
			//				params.append("key",index);
			//				params.append("key",index);
			//				axios.post(url,params).then(function(res){
			//					console.log(res);
			//				})
			//			}
		},
		mounted() {
			//			this.getNews();
			//			this.postInfo();
			var swiper = new Swiper('.swiper-container', {
				slidesPerView: 3,
				spaceBetween: 30,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});
		}
	}
</script>

<style scoped>
	.main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding-bottom:60px;
	}
	
	.maintop {
		height: 39px;
		border-bottom: 1px solid #ccc;
		margin-bottom: 13px;
	}
	
	.swiper-slide {
		width: 20%;
		height: 36px;
		line-height: 36px;
		font-size: 12px;
	}
	
	.active {
		color: rgb(132, 95, 63);
		border-bottom: 3px solid rgb(132, 95, 63);
	}
	
	/*.mainbottom {
		flex: 1;
		flex-wrap: wrap;
	}
	
	.mainbottom dl {
		width: 50%;
		padding: 0 5px;
		box-sizing: border-box;
		margin: 0 0;
		float:left;
	}
	
	.mainbottom dl>dd {
		margin: 0 0;
	}
	
	.mainbottom dl>dd:nth-child(2) {
		height: 32px;
		font-size: 12px;
		color: rgb(159, 128, 82);
		line-height: 32px;
		overflow:hidden;
	}
	
	.mainbottom dl>dd:nth-child(3) {
		height: 20px;
		line-height: 20px;
		font-size: 13px;
		overflow:hidden;
	}
	
	.mainbottom dl>dd:nth-child(4) {
		font-size: 15px;
		color: rgb(182, 9, 9);
	}*/
</style>