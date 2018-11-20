<template>
	<div class="show">
		<div v-show="bool">
			<div class="show_box1"></div>
			<div class="show_box2">
				<div>
					<img style="width:68px;height:68px;display:inline-block;border:1px solid #ccc;" src="https://img.youpin.mi-img.com/800_pic/d12dd6a49e3b92b4745c3e3a50c67ae9.png" />
					<div class="detailgood" style="display:inline-block;position:relative;left:10px;top:-16px;">
						<!--<p style="font-size:15px;height:18px;line-height:18px;padding:0;border:0;">乐秀踢脚线式电暖器</p>
						<p style="border:0;padding:0;height:25px;line-height:25px;">￥<span style="font-size:19px;height:25px;line-height:25px;color:rgb(182,9,9);">749</span></p>-->
					</div>
					<img @click="isShow" style="width:11px;height:11px;float:right;" src="https://m.youpin.mi.com/youpin/static/m/res/images/detail_modal_icon_close.png" />
				</div>
				<div style="height:240px;padding:0 14px;">
					<p style="font-size:14px;height:20px;line-height:20px;color:rgb(136,136,136);padding:0;border:0;">数量</p>
					<div class="quantity">
						<span @click="sub">
							<img style="width:10px;height:10px;display:inline-block;" src="https://m.youpin.mi.com/youpin/static/m/res/images/cart_icon_minus_disable.png"/>
						</span>
						<span v-text="count" style="width:30px;height:20px;border:1px solid #ccc;display:inline-block;vertical-align:top;text-align:center;">
							<!--<input v-text="count" style="width:28px;height:16px;" type="text" />-->
						</span>
						<span @click="add" style="width:30px;height:20px;border:1px solid #ccc;display:inline-block;vertical-align:top;text-align:center;">
							<img style="width:10px;height:10px;display:inline-block;" src="https://m.youpin.mi.com/youpin/static/m/res/images/cart_icon_plus_nor.png"/>
						</span>
					</div>
				</div>

				<div>
					<span @click="jump_login">立即购买</span>
					<span @click="jump_login">加入购物车</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import common from '../../js/common.js'
	import $ from 'jquery';
	window.$ = $;
	export default {
		data() {
			return {
				bool:true,
				count:1
			}
		},
		methods: {
			render(){
				var goodslist = common.Cookie.get('goodslist');
				if(goodslist === '') {
					goodslist = [];
				} else {
					goodslist = JSON.parse(goodslist);
				}
//				console.log(goodslist);
				var content = goodslist.map(function(goods) {
					return '<p style="font-size:15px;height:18px;line-height:18px;padding:0;border:0;">'+goods.custom_name+'</p>'+
						'<p style="border:0;padding:0;height:25px;line-height:25px;">'+
						'<span style="font-size:19px;height:25px;line-height:25px;color:rgb(182,9,9);">'+goods.custom_price+'</span>'+
						'</p>'
					
				}).join("")
				console.log(content);
				document.querySelector('.detailgood').innerHTML = content;
				
			},
			isShow(){
				this.bool = !this.bool;
				history.back();
			},
			jump_login(){
				var goodslist = common.Cookie.get('goodslist');
				if(goodslist === '') {
					goodslist = [];
				} else {
					goodslist = JSON.parse(goodslist);
				}
				console.log(goodslist);
				
				location.href = '#/cart';//跳转到购物车界面,然后进行注册登录.登录成功后显示购物车界面
			},
			sub(){
				
				if(this.count<=1){
					this.count===1;
				}else{
					this.count--;
				}
				
			},
			add(){
				
				if(this.count>=100){
					this.count===100;
				}else{
					this.count++;
				}
			}
		},
		mounted() {
			this.render();
		}
	}
</script>

<style>
	.show {
		display: flex;
		height: 100%;
		flex-direction: column;
	}
	
	.show_box1 {
		flex: 1;
		height: 170px;
	}
	
	.show_box2 {
		flex: 2;
	}
	
	.show_box2 div:nth-child(1) {
		height: 98px;
		box-sizing: border-box;
		padding: 14px;
	}
	
	.show_box2 div:last-child {
		height: 52px;
		padding: 0 15px;
	}
	
	.show_box2 div:nth-child(3) span {
		display: inline-block;
		width: 45%;
		border-radius: 16px;
		color: #fff;
		height: 32px;
		text-align: center;
		line-height: 32px;
		margin-top: 20px;
	}
	
	.show_box2 div:nth-child(3) span:first-child {
		background-color: rgb(182, 9, 9);
		margin-right: 10px;
	}
	
	.show_box2 div:nth-child(3) span:last-child {
		background-color: rgb(171, 138, 89);
		margin-left: 10px;
	}
</style>