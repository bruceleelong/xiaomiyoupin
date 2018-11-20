<template>
	<div class="mainbottom">
		<dl @click="skip(index)" v-for="(a,index) in list8" :key="index">
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
				list8: [{
					id:71,
					img800: "https://img.youpin.mi-img.com/800_pic/de8a43a088a352efcbf39f168448c934.png",
					custom_name: "声波洁面仪",
					custom_summary: "深层清洁,细腻洁面,舒缓肌肤",
					custom_price: 109
				}, {
					id:72,
					img800: "http://img.youpin.mi-img.com/800_pic/102366_94910d8287c7594447087a5522071b21.png",
					custom_name: "轻盈无瑕气垫BB霜",
					custom_summary: "轻盈无暇 养肤提亮",
					custom_price: 79
				}, {
					id:73,
					img800: "https://img.youpin.mi-img.com/800_pic/180c16d38d9c0bb1ef401bae0f4221f2.png",
					custom_name: "水晶石英腕表",
					custom_summary: "轻奢水晶元素，瑞士进口机芯",
					custom_price: 369
				}, {
					id:74,
					img800: "https://img.youpin.mi-img.com/800_pic/3aec92223d6b8e5bd3927738a4889054.png",
					custom_name: "小米8 青春版",
					custom_summary: "镜面渐变色，2400万自拍旗舰",
					custom_price: 1399
				}, {
					id:75,
					img800: "http://img.youpin.mi-img.com/800_pic/840_3m8foovc4dbj6.png",
					custom_name: "云麦好轻mini2智能体脂秤",
					custom_summary: "17项数据 精准交流测脂 高清LED显示屏 已接入米家APP",
					custom_price: 99
				}, {
					id:76,
					img800: "https://img.youpin.mi-img.com/800_pic/e5393589651b2baee0559333b4d120bb.png",
					custom_name: "“圆满”足金手镯",
					custom_summary: "仿古法手工，复古时尚，经典传承",
					custom_price: 4999
				}, {
					id:77,
					img800: "http://img.youpin.mi-img.com/800_pic/274513ef40578133f45b9ab4a4854274.png",
					custom_name: "PMA石墨烯发热真丝暖宫宝",
					custom_summary: "暖腹宝，痛经不再是多喝热水",
					custom_price: 169
				}, {
					id:78,
					img800: "http://img.youpin.mi-img.com/800_pic/101949_feb14119a3eb03087163e9c78ddb983c.png",
					custom_name: "钻石珐琅心形18K金项链",
					custom_summary: "满钻效果，双面可戴",
					custom_price: 1159
				}, {
					id:79,
					img800: "http://img.youpin.mi-img.com/800_pic/845_2i4u83rcvnd4w.png",
					custom_name: "云麦好轻mini2体脂秤 云麦2代瑜伽垫 套装",
					custom_summary: "十项数据，精准交流测脂，高清LED显示屏，已接入米家APP",
					custom_price: 179
				}, {
					id:80,
					img800: "http://img.youpin.mi-img.com/800_pic/101900_3su9rodgvilrb.png",
					custom_name: "经典闪耀钻戒",
					custom_summary: "比利时亮式切割，显钻设计",
					custom_price: 4349
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