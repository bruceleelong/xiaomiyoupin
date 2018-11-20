<template>
	<div calss="box">
		<p class="p-0">品味周刊</p>
		<img style="width:100%;height:80px;" alt="" src="https://shop.io.mi-img.com/app/shop/img?id=shop_650edde5727997666306ff471226e903.jpeg&amp;w=1080&amp;h=300&amp;t=webp">
		<!-- Swiper -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<dl>
						<a href="#">
							<dt><img src="http://img.youpin.mi-img.com/800_pic/101612_g6nydn15nm5c.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp"/></dt>
							<dd>品牌故事</dd>
							<dd style="color:red;">¥ 4799</dd>
						</a>
					</dl>
				</div>
				<div class="swiper-slide">
					<dl>
						<a href="#">
							<dt><img src="http://img.youpin.mi-img.com/800_pic/7ceffc0c50c28bd5f9a9f8f651bae57f.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp"/></dt>
							<dd>品牌故事</dd>
							<dd style="color:red;">¥ 399</dd>
						</a>
					</dl>
				</div>
				<div class="swiper-slide">
					<dl>
						<a href="#">
							<dt><img src="https://img.youpin.mi-img.com/800_pic/7342030d0e8d61af3ffa760015e50976.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp"/></dt>
							<dd>品牌故事</dd>
							<dd style="color:red;">¥ 158</dd>
						</a>
					</dl>
				</div>
				<div class="swiper-slide">
					<dl>
						<a href="#">
							<dt><img src="http://img.youpin.mi-img.com/800_pic/102027_f7340c0a0267ea5a3604367b99adda67.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp"/></dt>
							<dd>品牌故事</dd>
							<dd style="color:red;">¥ 999</dd>
						</a>
					</dl>
				</div>
				<div class="swiper-slide">
					<dl>
						<a href="#">
							<dt><img src="https://img.youpin.mi-img.com/800_pic/f0e8202b192d68731248ff23f4294623.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp"/></dt>
							<dd>品牌故事</dd>
							<dd style="color:red;">¥ 249</dd>
						</a>
					</dl>
				</div>
				<div class="swiper-slide">
					<dl>
						<a href="#">
							<dt><img src="https://img.youpin.mi-img.com/800_pic/b3948e4a3f1a6bc38a5df9f84b0cb64a.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp"/></dt>
							<dd>品牌故事</dd>
							<dd style="color:red;">¥ 899</dd>
						</a>
					</dl>
				</div>
				<div class="swiper-slide">
					<dl>
						<a href="#">
							<dt><img src="https://img.youpin.mi-img.com/800_pic/573951d5b5dcb4773d34d6319a3665c9.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp"/></dt>
							<dd>品牌故事</dd>
							<dd style="color:red;">¥ 899</dd>
						</a>
					</dl>
				</div>
				<div class="swiper-slide">
					<dl>
						<a href="#">
							<dt><img src="http://img.youpin.mi-img.com/800_pic/101585_34bgob8taj4b2.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp"/></dt>
							<dd>品牌故事</dd>
							<dd style="color:red;">¥ 1999</dd>
						</a>
					</dl>
				</div>
			</div>
			<!-- Add Pagination -->
			<!--<div class="swiper-pagination"></div>-->
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper' //引入的是swiper.js
	import "../../../node_modules/swiper/dist/css/swiper.css"
	export default {
		mounted() {
			var swiper = new Swiper('.swiper-container', {
				slidesPerView: 3,
				spaceBetween: 30,
//				pagination: {
//					el: '.swiper-pagination',
//					clickable: true,
//				},
			});
		}
	}
</script>

<style scoped>
	.box {
		display: flex;
		flex-direction: column;
		margin-top: 10px;
	}
	
	.p-0 {
		height: 40px;
	}
	
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
	/*.box{
		width:100%;height:100px;
		display:flex;
		flex-wrap:wrap;
	}*/
	.swiper-slide dl a{
		text-decoration:none;color:#333;
	}
	.swiper-slide dl{
		width:100px;height:100px;padding:0 5px;
		box-sizing:border-box;
		font-size:12px;margin:0 0;
	}
	.swiper-slide dl dt>img{
		width:100%;height:60px;
	}
	.swiper-slide dl dd{
		text-align:center;
		margin-inline-start: 0px;
		margin-top:5px;
	}
	.box{
		margin-bottom:10px;
	}
</style>