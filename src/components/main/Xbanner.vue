<template>
	<!-- Swiper -->
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<img class="swiper-slide" src="../../assets/home-banner1.jpg" />
			<img class="swiper-slide" src="../../assets/home-banner2.jpg" />
			<img class="swiper-slide" src="../../assets/home-banner3.jpg" />
			<img class="swiper-slide" src="../../assets/home-banner4.jpg" />
			<img class="swiper-slide" src="../../assets/home-banner5.jpg" />

		</div>
		<!-- Add Pagination -->
		<div class="swiper-pagination"></div>

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
				loop:true,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				}
			});
		}
	}
</script>

<style>
	html,
	body {
		position: relative;
		height: 100%;
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
</style>