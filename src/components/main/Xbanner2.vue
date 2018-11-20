<template>
	<div class="header">

		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="a in imgArr"><img :src="a" /></div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import "../../../node_modules/swiper/dist/css/swiper.css"

	export default {
		data() {
			return {
				imgArr: [
					require('../../assets/home-banner1.jpg'),
					require('../../assets/home-banner2.jpg'),
					require('../../assets/home-banner3.jpg'),
					require('../../assets/home-banner4.jpg'),
					require('../../assets/home-banner5.jpg')

				]
			}
		},
		mounted() {
			var swiper = new Swiper('.swiper-container', {
				spaceBetween: 30,
				centeredSlides: true,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				}
			})
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