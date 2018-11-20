<template>
	<div class="mainbottom">
		<dl @click="skip(index)" v-for="(a,index) in list11" :key="index">
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
				list11: [{
					id:101,
					img800: "http://img.youpin.mi-img.com/800_pic/100622_7c82677aaaa8aaa0c2a42815cdf84192.png",
					custom_name: "鹿客智能指纹锁Classic",
					red_words: "【网红爆品，好评破万】",
					custom_price: 1699
				}, {
					id:102,
					img800: "http://img.youpin.mi-img.com/800_pic/102495_f26f63c454077cbf2a8723fa61898816.png",
					custom_name: "云米洗烘一体机 8kg",
					custom_summary: "衣服洗净即烘干，无需晾晒直接穿",
					custom_price: 2599
				}, {
					id:103,
					img800: "https://img.youpin.mi-img.com/800_pic/f7ab44b2ee63d5ccde9e3e8d0a5619c8.png",
					custom_name: "石头扫地机器人",
					custom_summary: "扫拖一体，清扫性能更强！",
					custom_price: 2499
				}, {
					id:104,
					img800: "http://img.youpin.mi-img.com/800_pic/ba3dde926973d829cb46fef1a4f57334.png",
					custom_name: "小米8",
					custom_summary: "骁龙845处理器，双频GPS",
					custom_price: 2499
				}, {
					id:105,
					img800: "https://img.youpin.mi-img.com/800_pic/be45b6138208fd1862a36a316e11f395.png",
					custom_name: "乳胶弹簧静音床垫",
					custom_summary: "20厘米厚度，独立袋装弹簧支撑",
					custom_price: 1599
				}, {
					id:106,
					img800: "http://img.youpin.mi-img.com/800_pic/a61016fbc9aae9a18ef0bde46c56f80d.png",
					custom_name: "小米AI音箱",
					custom_summary: "听音乐、语音遥控家电的人工智能音箱",
					custom_price: 299
				}, {
					id:107,
					img800: "http://img.youpin.mi-img.com/800_pic/100578_3fspe9cnnsk3.png",
					custom_name: "云米智能烟灶套装",
					custom_summary: "烟灶相互联动，自动排风",
					custom_price: 2699
				}, {
					id:108,
					img800: "http://img.youpin.mi-img.com/800_pic/101475_1btwx5ygi55sw.png",
					custom_name: "智米全直流变频空调",
					custom_summary: "一级能效，强劲冷暖",
					custom_price: 4399
				}, {
					id:109,
					img800: "http://img.youpin.mi-img.com/800_pic/101585_34bgob8taj4b2.png",
					custom_name: "WalkingPad走步机",
					custom_summary: "新型对折收纳，脚感控制速度",
					custom_price: 1999
				}, {
					id:110,
					img800: "https://img.youpin.mi-img.com/800_pic/f0e8202b192d68731248ff23f4294623.png",
					custom_name: "米物蓝牙双模键盘",
					custom_summary: "2种连接，1键切换，支持多系统",
					custom_price: 249
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