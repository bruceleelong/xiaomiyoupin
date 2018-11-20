<template>
	<div class="shopingCart">
		<div class="header">
			<img @click="forback" src="https://m.youpin.mi.com/youpin/static/m/res/images/std_tittlebar_main_device_back_normal.png" />
			<span>有品推荐</span>
			<span>编辑</span>
		</div>
		<div v-for="(a,index) in goodslist" :key="index" class="cart" @click="imgchick">
			<img class="img1" :src="imgurl[0].src1" />
			<img src="https://img.youpin.mi-img.com/800_pic/2fbaa40fb43150c858a0b309d04228f2.png" />
			<div class="cart_right">
				<p v-text="a.custom_name"></p>
				<p>&yen;<span v-text="a.custom_price"></span></p>
				<p class="con">
					<span @click="sub">
						<img  src="https://m.youpin.mi.com/youpin/static/m/res/images/cart_icon_minus_disable.png" >
					</span>
					<span v-text="count">
					</span>
					<span @click="add">
						<img  src="https://m.youpin.mi.com/youpin/static/m/res/images/cart_icon_plus_nor.png" >
					</span>
				</p>
			</div>
		</div>
		<!--<div class="cart" @click="imgchick">
			<img   class="img1" :src="imgurl[0].src1" />
			<img src="https://img.youpin.mi-img.com/800_pic/2fbaa40fb43150c858a0b309d04228f2.png" />
			<div class="cart_right">
				<div class="content">
					<p>90分针织抓绒卫裤男款黑色</p>
					<p>&yen;<span>129.00</span></p>
				</div>

				<p class="con">
					<span @click="sub">
						<img  src="https://m.youpin.mi.com/youpin/static/m/res/images/cart_icon_minus_disable.png" >
					</span>
					<span v-text="count">
						<input type="text" >
					</span>
					<span @click="add">
						<img  src="https://m.youpin.mi.com/youpin/static/m/res/images/cart_icon_plus_nor.png" >
					</span>
				</p>
			</div>
		</div>-->
		<div class="tuijian">
			<p>为您推荐</p>
			<div class="tuijian_con">
				<dl @click="skip(index)" v-for="(a,index) in list1" :key="index" :data-guid="a.id">
					<dt><img :src="a.img800"/></dt>
					<dd v-text="a.custom_summary"></dd>
					<dd v-text="a.custom_name"></dd>
					<dd>￥<span v-text="a.custom_price"></span></dd>
				</dl>
			</div>
		</div>
		<div class="footer">
			<img class="img2" src="https://m.youpin.mi.com/youpin/static/m/res/images/std_icon_checkbox_uncheck.png" />
			<span>全选</span>
			<span>合计:</span>
			<span class="totalprice"></span>
			<span><span>去结算</span></span>
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
				imgurl: [{
					src1: "https://m.youpin.mi.com/youpin/static/m/res/images/std_icon_checkbox_uncheck.png",
					src2: "https://m.youpin.mi.com/youpin/static/m/res/images/std_icon_checkbox_check.png"
				}],
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
				}],
				count: 1,
				checked: false,
				goodslist: [],
				total: 0
			}
		},
		methods: {
			render() {
				var goodslist = common.Cookie.get('goodslist');
				if(goodslist === '') {
					goodslist = [];
				} else {
					this.goodslist = JSON.parse(goodslist);
				}
								console.log(goodslist);
//				document.querySelector('.cartcontent').innerHTML = goodslist.map(function(goods) {
//					return '<div class="cart" @click="imgchick">' +
//						'<img   class="img1" src="https://m.youpin.mi.com/youpin/static/m/res/images/std_icon_checkbox_uncheck.png" />' +
//						'<img src="https://img.youpin.mi-img.com/800_pic/2fbaa40fb43150c858a0b309d04228f2.png" />' +
//						'<div class="cart_right">' +
//						'<p>' + goods.custom_name + '</p>' +
//						'<p>&yen;<span>' + goods.custom_price + '</span></p>' +
//						'<p class="con">' +
//						'<span @click="sub">' +
//						'<img  src="https://m.youpin.mi.com/youpin/static/m/res/images/cart_icon_minus_disable.png" >' +
//						'</span>' +
//						'<span v-text="count">' +
//						'</span>' +
//						'<span @click="add">' +
//						'<img  src="https://m.youpin.mi.com/youpin/static/m/res/images/cart_icon_plus_nor.png" >' +
//						'</span>' +
//						'</p>' +
//						'</div>' +
//						'</div>'
//
//				}).join("")
//				//				//				console.log(content);
//				//				document.querySelector('.content').innerHTML = content;
//				//				goodslist.map(function(goods) {
//				//					document.querySelector('.totalprice').innerHTML = goods.custom_price;
//				//				})

			},
			forback() {
				history.back();
			},
			skip(index) {

//				var goods = {
//					id: this.list1[index].id,
//					custom_summary: this.list1[index].custom_summary,
//					custom_name: this.list1[index].custom_name,
//					custom_price: this.list1[index].custom_price
//				}
//				var goodslist = common.Cookie.get('goodslist');
//				if(goodslist === '') {
//					goodslist = [];
//				} else {
//					goodslist = JSON.parse(goodslist);
//				}
//
//				goodslist.push(goods);
//				common.Cookie.set('goodslist', JSON.stringify(goodslist));
//
//				console.log(goodslist);
				location.href = "#/detail?id=" + goods.id;

			},
			sub() {

				if(this.count <= 1) {
					this.count === 1;
					//					$('.totalprice').text()=$('.goodprice').text()*this.count;
					//					document.querySelector('.totalprice').innerText = document.querySelector('.goodprice').innerText * this.count;
				} else {
					this.count--;
				}

			},
			add() {

				if(this.count >= 100) {
					this.count === 100;
				} else {
					this.count++;
				}
			},
			imgchick(e) {
				if(e = '.img1') {
					console.log(e);
					console.log(this.imgurl[0].src2);

					$('.img1').attr('src', this.imgurl[0].src2);
					$('.img2').attr('src', this.imgurl[0].src2);
				}

			},
			zongjia() {
				this.goodslist
			}
		},
		mounted() {
			this.render();
		}
	}
</script>

<style>
	.shopingCart {
		/*display: flex;*/
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	
	.header {
		flex: 1;
		display: flex;
		align-items: center;
		height: 45px;
		border-bottom: 1px solid rgb(191, 191, 192);
	}
	
	.header img {
		width: 40px;
		height: 45px;
	}
	
	.header span {
		margin-left: 25%;
		font-size: 16px;
	}
	
	.header span:nth-child(3) {
		font-size: 12px;
	}
	
	.cart {
		flex: 1;
		box-sizing: border-box;
		height: 118px;
		padding-top: 15px;
		margin-bottom: 20px;
		border-bottom: 2px solid rgb(214, 214, 214);
	}
	
	.cart img:nth-child(1) {
		width: 18px;
		height: 18px;
		display: inline-block;
		margin: 10px 10px 25px 10px;
	}
	
	.cart img:nth-child(2) {
		width: 74px;
		height: 74px;
		display: inline-block;
		background-color: rgba(0, 0, 0, 0.05);
	}
	
	.cart_right {
		display: inline-block;
		vertical-align: top;
		margin-left: 10%;
	}
	
	.cart_right p {
		font-size: 14px;
		height: 18px;
		line-height: 18px;
		padding: 0;
		border: 0;
	}
	/*.content p:nth-child(1) {
		margin-bottom: 20px;
	}*/
	
	.cart_right p:nth-child(1) {
		margin-bottom: 20px;
	}
	/*.content p:nth-child(2) {
		display: inline-block;
	}*/
	
	.cart_right .content p:nth-child(2) span {
		border: 0;
	}
	
	.cart_right p:nth-child(2) {
		display: inline-block;
	}
	
	.cart_right p:nth-child(2),
	.cart_right p:nth-child(3) {
		display: inline-block;
	}
	/*.content p:nth-child(2) {
		color: rgb(191, 17, 17);
	}*/
	
	.cart_right p:nth-child(2) {
		color: rgb(191, 17, 17);
	}
	/*.cart_right p:nth-child(2) span {
		width: 30px;
		height: 20px;
		border: 1px solid rgb(204, 204, 204);
		display: inline-block;
		vertical-align: top;
		text-align: center;
	}*/
	
	.cart_right p:nth-child(3) span {
		width: 30px;
		height: 20px;
		border: 1px solid rgb(204, 204, 204);
		display: inline-block;
		vertical-align: top;
		text-align: center;
	}
	/*.cart_right p:nth-child(2) span img {
		width: 10px;
		height: 10px;
		display: inline-block;
	}*/
	
	.cart_right p:nth-child(3) span img {
		width: 10px;
		height: 10px;
		display: inline-block;
	}
	/*.cart_right p:nth-child(2) span input {
		width: 28px;
		height: 16px;
	}*/
	
	.cart_right p:nth-child(3) span input {
		width: 28px;
		height: 16px;
	}
	/*.cart .con img {
		margin: 0;
	}*/
	
	.tuijian {
		display: flex;
		flex-direction: column;
	}
	
	.tuijian p {
		flex: 1;
		font-size: 16px;
		border: 0;
	}
	
	.tuijian_con {
		flex: 1;
		flex-wrap: wrap;
	}
	
	.tuijian_con dl {
		width: 50%;
		padding: 0 5px;
		box-sizing: border-box;
		margin: 0 0;
		float: left;
	}
	
	.tuijian_con dl>dd {
		margin: 0 0;
	}
	
	.tuijian_con dl>dd:nth-child(2) {
		height: 32px;
		font-size: 12px;
		color: rgb(159, 128, 82);
		line-height: 32px;
		overflow: hidden;
	}
	
	.tuijian_con dl>dd:nth-child(3) {
		height: 20px;
		line-height: 20px;
		font-size: 13px;
		overflow: hidden;
	}
	
	.tuijian_con dl>dd:nth-child(4) {
		font-size: 15px;
		color: rgb(182, 9, 9);
	}
	
	.footer {
		display: flex;
		align-items: center;
		height: 53px;
		border-top: 1px solid rgb(214, 214, 214);
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		font-size: 13px;
	}
	
	.footer img {
		width: 18px;
		height: 18px;
		display: inline-block;
		margin: 0 10px 0 10px;
	}
	
	.footer span:nth-child(2) {
		margin-right: 20%;
	}
	
	.footer span:nth-child(4) {
		color: rgb(191, 17, 17);
	}
	
	.footer span:nth-child(5) {
		width: 100px;
		background-color: rgb(191, 17, 17);
		color: #fff;
		display: inline-block;
		height: 54px;
		text-align: center;
		position: relative;
		right: -40px;
		top: 0;
	}
	
	.footer span:nth-child(5) span {
		position: relative;
		left: 0;
		top: 18px;
	}
</style>