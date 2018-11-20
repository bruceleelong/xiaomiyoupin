<template>
	<div class="box">
		<!-- Swiper -->
		<div style="height:320px;width:100%;" class="swiper-container1">
			<div class="swiper-wrapper">
				<img style="height:320px;width:100%;" class="swiper-slide" src="https://shop.io.mi-img.com/app/shop/img?id=shop_edf8f0731e817e0abbdff43112ec05e9.jpeg&w=1080&h=1270&crop=a_0_95_1080_1080&t=webp" />
				<img style="height:320px;width:100%;" class="swiper-slide" src="https://shop.io.mi-img.com/app/shop/img?id=shop_053b86ec710f0115d352bb7a1fb7f78c.jpeg&w=1080&h=1270&crop=a_0_95_1080_1080&t=webp" />
				<img style="height:320px;width:100%;" src="https://shop.io.mi-img.com/app/shop/img?id=shop_f1955194913dd772da5e32440d271a0b.jpeg&w=1080&h=1270&crop=a_0_95_1080_1080&t=webp" />
				<img style="height:320px;width:100%;" src="https://shop.io.mi-img.com/app/shop/img?id=shop_2a78172dc844a02b1a5bd725cac24e19.jpeg&w=1080&h=1270&crop=a_0_95_1080_1080&t=webp" />
				<img style="height:320px;width:100%;" src="https://shop.io.mi-img.com/app/shop/img?id=shop_3fd37a0b0ef5e2a4cdf8fd2cafa93715.jpeg&w=1080&h=1270&crop=a_0_95_1080_1080&t=webp" />
				<img style="height:320px;width:100%;" src="https://shop.io.mi-img.com/app/shop/img?id=shop_65939152d995b0ad5852e1dbc761813e.jpeg&w=1080&h=1270&crop=a_0_95_1080_1080&t=webp" />

			</div>
		</div>
		<div class="imgbox">
			<img @click="forback" src="https://m.youpin.mi.com/youpin/static/m/res/images/std_titlebar_detailBackNormal.png" />
			<img @click="forhome" src="https://m.youpin.mi.com/youpin/static/m/res/images/std_titlebar_homeNormal.png" />
		</div>
		<!--商品信息-->
		<div class="detail_list">
			<div class="detail_goods">
				<!--<p>乐秀踢脚线式电暖器</p>
				<p>全屋取暖，空气热能幕墙，通电即热</p>
				<p>￥<span>749</span></p>-->
			</div>
			<p>
				<img src="https://m.youpin.mi.com/youpin/static/m/res/images/newuser.png" />
				<span>150元新人红包</span>
				<span>快来领取</span>
				<img src="https://m.youpin.mi.com/youpin/static/m/res/images/newuser_right.png" />
			</p>
		</div>
		<p class="detail_1">
			<span>已选</span>
			<span><i>1</i>件</span>
			<img class="detail_img" src="https://m.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" />
		</p>
		<!--说明-->
		<div class="detail_2">
			<div>说明:</div>
			<div>
				<p>
					<img src="https://m.youpin.mi.com/youpin/static/m/res/images/detail_icon_service.png" alt="" />
					<span>本产品为有品第三方商品</span>
				</p>
				<p>
					<img src="https://m.youpin.mi.com/youpin/static/m/res/images/detail_icon_service.png" alt="" />
					<span>由 杭州 乐秀电子科技有限公司 发货并提供售后</span>
				</p>
				<p>
					<img src="https://m.youpin.mi.com/youpin/static/m/res/images/detail_icon_service.png" alt="" />
					<span>支持7天无理由退货（请参考商品详情-常见问题）</span>
				</p>
			</div>
			<div>
				<img src="https://m.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" />
			</div>
		</div>
		<!--用户评价-->
		<div class="detail_3">
			<div>
				<span>用户评价</span>
				<img src="https://m.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" />
			</div>
			<!-- Swiper -->
			<div class="swiper-container2">
				<div class="swiper-wrapper" style="width:100%;height:90px;padding:0;">
					<div v-for="(a,index) in arr" :key="index" class="swiper-slide">
						<!--每个swiper自带的css样式不可以修改,所以这里修改的样式没有效果-->
						<p style="width:100%;height: 32px;line-height: 32px;padding: 0;border: 0;flex:1;align-items:center;">
							<img style="width:30px;height:30px;position: static;" :src="a.src1" />
							<span v-text="a.username">J**sia</span>
							<img style="position:static;" :src="a.src2" />
							<img style="position:static;" :src="a.src2" />
							<img style="position:static;" :src="a.src2" />
							<img style="position:static;" :src="a.src2" />
							<img style="position:static;" :src="a.src2" />

						</p>
						<p v-text="a.title" style="width:100%;height: 32px;line-height: 32px;padding: 0;border: 0;flex:1;align-items:center;"></p>
					</div>

				</div>
				<!-- Add Pagination -->
			</div>
		</div>
		<!--产品介绍-->
		<div class="detail_4">
			<img v-for="(a,index) in imgurl" :key="index" :src="a.src" style="width:100%;height:100%;" />

		</div>
		<!--底部-->
		<div class="detail_bottom">
			<p>
				<img src="https://m.youpin.mi.com/youpin/static/m/res/images/device_shop_detail_unfavor_v2.png" />
				<span>收藏</span>
			</p>
			<p>
				<img src="https://m.youpin.mi.com/youpin/static/m/res/images/shop_cart_v2.png" />
				<span>购物车</span>
			</p>
			<p><span @click="showActionSheet">立即购买</span></p>
			<p><span @click="showActionSheet">加入购物车</span></p>

		</div>

	</div>
</template>
<script src="../js/vue.js"></script>
<script>
	import common from '../js/common.js'
	import Swiper from 'swiper' //引入的是swiper.js
	import "../../node_modules/swiper/dist/css/swiper.css" //引入swiper的css样式
	//	import "../../css/animate.css" //引入vue的css动画样式
	//	import "../js/vue.js"
	import $ from 'jquery';
	window.$ = $;
	export default {
		data() {
			return {
				arr: [{
					src1: "https://m.youpin.mi.com/youpin/static/m/res/images/evaluation_icon_user.png",
					src2: "https://m.youpin.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png",
					username: "J**sia",
					title: "非常好用,特别好"
				}, {
					src1: "https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01ItpOJTJWj/d4eqQow0It6XvP.jpg?t=webp",
					src2: "https://m.youpin.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png",
					username: "李*",
					title: "有品品质，值得信赖。"
				}, {
					src1: "https://m.youpin.mi.com/youpin/static/m/res/images/evaluation_icon_user.png",
					src2: "https://m.youpin.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png",
					username: "中*",
					title: "非常好用,特别好"
				}, {
					src1: "https://m.youpin.mi.com/youpin/static/m/res/images/evaluation_icon_user.png",
					src2: "https://m.youpin.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png",
					username: "J**sia",
					title: "此用户没有填写评价内容"
				}, {
					src1: "https://m.youpin.mi.com/youpin/static/m/res/images/evaluation_icon_user.png",
					src2: "https://m.youpin.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png",
					username: "1****30820",
					title: "很惊艳，加热效果很好。值得"
				}, {
					src1: "https://m.youpin.mi.com/youpin/static/m/res/images/evaluation_icon_user.png",
					src2: "https://m.youpin.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png",
					username: "r***chen",
					title: "此用户没有填写评价内容"
				}],
				imgurl: [{
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_03c041b0123f86d438b414461c4a5e38.jpeg&w=1080&h=1300"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_1bdfe1cf7ff6018b152f5e3353223915.jpeg&w=1080&h=693"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_51ae3b3e1f2427aedeed748ff76ef10e.jpeg&w=1080&h=1274"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_86d9432622b4b539b11ce7e0ec086118.jpeg&w=1080&h=516"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_0ffe4635818fd792de7842141a6f686f.gif&w=307&h=382&t=raw&t=raw"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_fd58c86e62f836f092c102497638f752.jpeg&w=1080&h=1620"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_4e2e29e6e2c9aeb868287151ae4915f4.jpeg&w=1080&h=861"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_6bbea8708da1a50c773dff746d540314.jpeg&w=1080&h=839"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_25c030944d3e077bc01090946dd57a22.jpeg&w=1080&h=845"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_49f6a9c7e86961de07bcf341f3177314.jpeg&w=1080&h=840"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_111d8097bca8cd9c493ad43bdbafee3d.jpeg&w=1080&h=800"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_da6c33dfb027e0bc45316184d79dfc67.jpeg&w=1080&h=970"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_4003d78cd440506ad69fa4838f634578.jpeg&w=1080&h=716"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_38cd85f6544100ec1cbe522db9c0b110.gif&w=894&h=783&t=raw&t=raw"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_791d016948d0df79d43fbec23e342938.jpeg&w=1080&h=1400"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_cd403d05c9ef1cd11455ff5e77f0e0a7.jpeg&w=1080&h=1480"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_bcb992269a2f4d757dec7067776e46d2.gif&w=36&h=7&t=raw&t=raw"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_4c623d9dbd8aaf7aff287492aaa96df6.jpeg&w=1080&h=1277"
				}, {
					src: "https://shop.io.mi-img.com/app/shop/img?id=shop_e5ba3dd85448fac1d422256f0c9b4b49.jpeg&w=1080&h=1392"
				}],
			}
		},
		methods: {
			render() {
				var goodslist = common.Cookie.get('goodslist');
				if(goodslist === '') {
					goodslist = [];
				} else {
					goodslist = JSON.parse(goodslist);
				}
				console.log(goodslist);
				var content = goodslist.map(function(goods) {
					return '<p style="font-size:16px;height:22px;line-height:22px;padding:0;border:0;">' + goods.custom_name + '</p>' +
						'<p style="font-size:17px;height:22px;line-height:22px;padding:0;border:0;color: rgb(153, 153, 153);">' + goods.custom_summary + '</p>' +
						'<p style="font-size:24px;height:30px;line-height:30px;padding:0;border:0;color: rgb(182, 9, 9);">' + goods.custom_price + '</p>'

				}).join("")
//				console.log(content);
				document.querySelector('.detail_goods').innerHTML = content;

			},
//			render(){//代码有问题
////				var params = location.search;
////				console.log(params);//值为空.原因是"http://localhost:8080/#/detail?id=1"的路径"?"前面带有"#"
//
//				var goodslist = common.Cookie.get('goodslist');
//				if(goodslist === '') {
//					goodslist = [];
//				} else {
//					goodslist = JSON.parse(goodslist);
//				}
//				console.log(goodslist);
//				console.log(goodslist[0].id);
//				$.ajax({
//					type:"get",
//					url:"http://localhost:7000/detail",
//					async:true,
//					data:{
//						id:goodslist[0].id,
//						
//					},
//					success(data){
//						document.querySelector('.detail_goods').innerHTML=
//						'<p style="font-size:16px;height:22px;line-height:22px;padding:0;border:0;">' + data.custom_name + '</p>' +
//						'<p style="font-size:17px;height:22px;line-height:22px;padding:0;border:0;color: rgb(153, 153, 153);">' + data.custom_summary + '</p>' +
//						'<p style="font-size:24px;height:30px;line-height:30px;padding:0;border:0;color: rgb(182, 9, 9);">' + data.custom_price + '</p>'
//					}
//				});
//			},
			forback() {
				history.back();
			},
			forhome() {
				location.href = '#/main';
			},
			showActionSheet: function() { //弹出购买窗口
				location.href = "#/detailShow";
			}

		},
		mounted() {
			this.render();
			var swiper1 = new Swiper('.swiper-container1', {
				spaceBetween: 30,
				centeredSlides: true,
				loop: true,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				}
			});
			//			var swiper2 = new Swiper('.swiper-container2', {
			//				slidesPerView: 3,
			//				spaceBetween: 30,
			//				freeMode: true,
			//
			//			});
			var swiper2 = new Swiper('.swiper-container2');

			
		}
	}
</script>

<style scoped>
	.box {
		display: flex;
		flex-direction: column;
		height: 100%;
		background-color: rgb(248, 248, 248);
		overflow: hidden;
	}
	
	.swiper-container1 {
		flex: 1;
	}
	
	.swiper-container1 .swiper-slide img {
		width: 100%;
		height: 320px;
	}
	
	.imgbox {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 48px;
	}
	
	.imgbox img {
		width: 48px;
		height: 48px;
		position: absolute;
		z-index: 1;
	}
	
	.imgbox img:first-child {
		left: 0px;
		top: 0px;
	}
	
	.imgbox img:last-child {
		left: 85%;
		top: 0px;
	}
	
	.detail_list {
		flex: 1;
		flex-direction: column;
		height: 140px;
		padding: 11px 14px 0 14px;
		box-sizing: border-box;
		margin-bottom: 10px;
	}
	
	.detail_list p {
		font-size: 16px;
		height: 22px;
		line-height: 22px;
		padding: 0;
		border: 0;
	}
	/*.detail_goods p:nth-child(1) {
		margin-bottom: 3px;
	}*/
	/*.detail_list p:nth-child(1) {
		margin-bottom: 3px;
	}*/
	/*.detail_goods p:nth-child(2) {
		height: 17px;
		color: rgb(153, 153, 153);
	}*/
	/*.detail_list p:nth-child(2) {
		height: 17px;
		color: rgb(153, 153, 153);
	}*/
	/*.detail_goods p:nth-child(3) {
		font-size: 24px;
		height: 30px;
		line-height: 30px;
		color: rgb(182, 9, 9);
	}*/
	/*.detail_list p:nth-child(3) {
		font-size: 24px;
		height: 30px;
		line-height: 30px;
		color: rgb(182, 9, 9);
	}*/
	
	.detail_list p:nth-child(2) {
		background-color: rgb(247, 240, 218);
		height: 30px;
		line-height: 30px;
		margin-bottom: 12px;
		font-size: 13px;
	}
	/*.detail_list p:nth-child(4) {
		background-color: rgb(247, 240, 218);
		height: 30px;
		line-height: 30px;
		margin-bottom: 12px;
		font-size: 13px;
	}*/
	
	.detail_list p:nth-child(2) img:nth-child(1) {
		width: 20px;
		height: 20px;
		margin-top: 5px;
	}
	/*.detail_list p:nth-child(4) img:nth-child(1) {
		width: 20px;
		height: 20px;
		margin-top: 5px;
	}*/
	
	.detail_list p:nth-child(2) img:nth-child(4) {
		width: 4px;
		height: 7px;
		float: right;
		position: relative;
		left: 37%;
		top: 10px;
	}
	/*.detail_list p:nth-child(4) img:nth-child(4) {
		width: 4px;
		height: 7px;
		float: right;
		position: relative;
		left: 37%;
		top: 10px;
	}*/
	
	.detail_list p:nth-child(2) span:nth-child(2) {
		margin-left: 5px;
	}
	/*.detail_list p:nth-child(4) span:nth-child(2) {
		margin-left: 5px;
	}*/
	
	.detail_list p:nth-child(2) span:nth-child(3) {
		margin-right: 10px;
		position: relative;
		left: 40%;
		top: 0;
	}
	/*.detail_list p:nth-child(4) span:nth-child(3) {
		margin-right: 10px;
		position: relative;
		left: 40%;
		top: 0;
	}*/
	
	.detail_1 {
		flex: 1;
		width: 100%;
		height: 37px;
		padding: 10px 14px;
		box-sizing: border-box;
		font-size: 12px;
		border: 0;
		background-color: #fff;
		margin-bottom: 10px;
	}
	
	.detail_1 img:nth-child(3) {
		width: 12px;
		height: 12px;
	}
	
	.detail_1 span {
		margin-top: -14px;
	}
	
	.detail_img {
		position: relative;
		left: 80%;
		top: 0px;
	}
	
	.detail_2 {
		flex: 1;
		height: 126px;
		padding: 8px 14px;
		box-sizing: border-box;
		display: flex;
		font-size: 13px;
		margin-bottom: 10px;
	}
	
	.detail_2 div:nth-child(1) {
		width: 13%;
	}
	
	.detail_2 div:nth-child(2) {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	
	.detail_2 div:nth-child(3) {
		width: 10%;
	}
	
	.detail_2 div:nth-child(2) img {
		width: 12px;
		height: 12px;
		display: inline-block;
	}
	
	.detail_2 div:nth-child(2) p {
		flex: 1;
		height: 18px;
		line-height: 18px;
		padding: 0;
		border: 0;
	}
	
	.detail_2 div:nth-child(2) p span {
		display: inline-block;
	}
	
	.detail_2 div:nth-child(3) img {
		width: 12px;
		height: 12px;
		position: relative;
		left: 13px;
		top: 55px;
	}
	
	.detail_3 {
		height: 190px;
		margin-bottom: 10px;
		flex: 1;
	}
	
	.detail_3 div:first-child {
		height: 50px;
		padding: 0 14px;
		font-size: 14px;
		display: flex;
		align-items: center;
	}
	
	.detail_3 div:first-child img {
		width: 12px;
		height: 12px;
		position: relative;
		left: 75%;
		top: 0;
	}
	
	.swiper-container2 {
		height: 90px;
	}
	
	.swiper-container2 .swiper-wrapper .swiper-slide {
		width: 80%;
		height: 90px;
		box-sizing: border-box;
		border: 1px solid #ccc;
		margin-left: 14px;
		background-color: rgb(248, 248, 248);
		display: flex;
		flex-direction: column;
	}
	
	.detail_4 {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	
	.detail_bottom {
		width: 100%;
		height: 52px;
		display: flex;
		border-top: 1px solid rgb(191, 191, 192);
		position: fixed;
		left: 0;
		bottom: 0;
	}
	
	.detail_bottom p {
		padding: 0;
		border: 0;
		height: 52px;
		line-height: 52px;
	}
	
	.detail_bottom img {
		width: 20px;
		height: 20px;
		line-height: 26px;
	}
	
	.detail_bottom span {
		height: 26px;
		line-height: 26px;
	}
	
	.detail_bottom p:nth-child(1),
	.detail_bottom p:nth-child(2) {
		flex: 2;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 32px;
		margin-top: 10px;
	}
	
	.detail_bottom p:nth-child(3),
	.detail_bottom p:nth-child(4) {
		flex: 3;
		justify-content: center;
	}
	
	.detail_bottom p:nth-child(3) span {
		background-color: rgb(182, 9, 9);
		border-radius: 16px;
		color: #fff;
		width: 100%;
		height: 32px;
		text-align: center;
		line-height: 32px;
		margin-top: 20px;
	}
	
	.detail_bottom p:nth-child(4) span {
		background-color: rgb(171, 138, 89);
		border-radius: 16px;
		color: #fff;
		width: 100%;
		height: 32px;
		text-align: center;
		line-height: 32px;
		margin-top: 20px;
	}
	
	.popup {
		height: 300px;
	}
	
	.detail_box1 {
		background-color: rgb(0, 0, 0);
		opacity: 0.5;
	}
	
	.detail_box2 {}
</style>