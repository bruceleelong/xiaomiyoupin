<template>
	<!-- Swiper -->
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<img class="swiper-slide" src="https://shop.io.mi-img.com/app/shop/img?id=shop_7c622ae32414bda1bd17874e381c299d.jpeg&w=1080&h=540" />
			<img class="swiper-slide" src="https://shop.io.mi-img.com/app/shop/img?id=shop_b4592bf532ec04c97f465f23aef68e1b.jpeg&w=1080&h=540" />
			<img class="swiper-slide" src="https://shop.io.mi-img.com/app/shop/img?id=shop_1a68ff20e5e9cffe50659a145c7adbaa.jpeg&w=1080&h=540" />

		</div>
		<!-- Add Pagination -->
		<!--<div class="swiper-pagination"></div>-->
		<!--轮播图下面-->
		<div class="box">
			<dl>
				<a href="#">
					<dt><img src="https://shop.io.mi-img.com/app/shop/img?id=shop_d1c78296243a9966e939fb7072b66dfe.png&w=210&h=180&t=webp"/></dt>
					<dd>工厂档案室</dd>
				</a>
			</dl>
			<dl>
				<a href="#">
					<dt><img src="https://shop.io.mi-img.com/app/shop/img?id=shop_d8444e339ecdc1a4d17bbb455410a462.jpeg&w=210&h=180&t=webp"/></dt>
					<dd>发现好货</dd>
				</a>
			</dl>
			<dl>
				<a href="#">
					<dt><img src="https://shop.io.mi-img.com/app/shop/img?id=shop_8102f022d07f228465cc0a9148b8f47e.gif&w=210&h=180&t=raw&t=webp"/></dt>
					<dd>有品TOP榜</dd>
				</a>
			</dl>
			<dl>
				<a href="#">
					<dt><img src="https://shop.io.mi-img.com/app/shop/img?id=shop_f1493c0c1cb8aaa08ee4783da0b30947.png&w=210&h=180&t=webp"/></dt>
					<dd>好物研究所</dd>
				</a>
			</dl>
			<dl>
				<a href="#">
					<dt><img src="https://shop.io.mi-img.com/app/shop/img?id=shop_fc982d7a071701aad56d29e7bee1acdb.jpeg&w=210&h=180&t=webp"/></dt>
					<dd>品牌故事</dd>
				</a>
			</dl>
		</div>
	</div>
</template>
<script>
	import Swiper from 'swiper' //引入的是swiper.js
	import "../../../node_modules/swiper/dist/css/swiper.css"

	export default {
		mounted() {
			var swiper = new Swiper('.swiper-container', {
				spaceBetween: 30,
				centeredSlides: true,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
				//				pagination: {
				//					el: '.swiper-pagination',
				//					clickable: true,
				//				}
			});
		}
	}
</script>

<style>
	html,
	body {
		position: relative;
		height: 100%;
		background: #fff;
	}
	
	body {
		background: #eee;
		font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
		font-size: 14px;
		color: #000;
		margin: 0;
		padding: 0;
	}
	
	.swiper-container {
		width: 100%;
		height: 100%;
	}
	
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	
	img {
		display: flex;
		width: 100%;
		height: 136.533px;
		object-fit: contain;
	}
	.box{
		width:100%;height:100px;
		display:flex;
		flex-wrap:wrap;
	}
	.box dl a{
		text-decoration:none;color:#333;
	}
	.box dl{
		width:20%;height:100px;padding:0 5px;
		box-sizing:border-box;
		font-size:12px;margin:0 0;
	}
	.box dl dt>img{
		width:100%;height:60px;
	}
	.box dl dd{
		text-align:center;
		margin-inline-start: 0px;
		margin-top:5px;
	}
</style>