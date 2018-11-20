<template>
	<div class="mainbottom">
		<dl @click="skip(index)" v-for="(a,index) in list3" :key="index">
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
				list3: [{
					id:21,
					img800: "https://img.youpin.mi-img.com/800_pic/3ebd7b7e27eb55fc342d9e362ac74f89.png",
					custom_name: "90分旅行箱 1A",
					custom_summary: "德国拜耳PC材质，海关密码锁",
					custom_price: 299
				}, {
					id:22,
					img800: "http://img.youpin.mi-img.com/800_pic/306_f327ad1722fe11b68a564fd900a26de8.png",
					custom_name: "新10000mAh小米移动电源2",
					custom_summary: "双USB接口输出，双向快充",
					custom_price: 79
				}, {
					id:23,
					img800: "http://img.youpin.mi-img.com/800_pic/101433_6869fe311329bf9aa904f6e6def5374f.png",
					custom_name: "橙舍多层靠墙置物架",
					custom_summary: "多功能置物，斜靠造型，底部防滑，多场景适用",
					custom_price: 199
				}, {
					id:24,
					img800: "http://img.youpin.mi-img.com/800_pic/102160_b3f2ddee3419c00e96a0bb7e4759d707.png",
					custom_name: "LOGO运动拖鞋",
					custom_summary: "防滑沟槽设计，人体工学脚床",
					custom_price: 29
				}, {
					id:25,
					img800: "http://img.youpin.mi-img.com/800_pic/137_2jks0iviav3i4.png",
					custom_name: "8H天然乳胶床垫M1",
					custom_summary: "天然乳胶，0胶水环保材质",
					custom_price: 599
				}, {
					id:26,
					img800: "http://img.youpin.mi-img.com/800_pic/228_6ad168cdaa24d4191a84dd53bd7e69a8.png",
					custom_name: "8H护颈乳胶枕Z2",
					custom_summary: "天然乳胶，三曲线护颈",
					custom_price: 239
				}, {
					id:27,
					img800: "http://img.youpin.mi-img.com/800_pic/92fb71846bd86660223592d67a68715a.png",
					custom_name: "VH“悠”便携式手持风扇",
					custom_summary: "7羽叶设计/无刷马达/三档风力",
					custom_price: 45
				}, {
					id:28,
					img800: "https://img.youpin.mi-img.com/800_pic/025be8d696d5562bab5fae6e53f3af67.png",
					custom_name: "米家插线板",
					custom_summary: "六版本可选",
					custom_price: 24.9
				}, {
					id:29,
					img800: "http://img.youpin.mi-img.com/800_pic/a73143cd2ad81a8ea95a42f61d64076d.png",
					custom_name: "多功能抽屉式收纳盒",
					custom_summary: "双层置物,精简造型,多场景使用",
					custom_price: 99
				}, {
					id:30,
					img800: "http://img.youpin.mi-img.com/800_pic/100636_59f796dd0630a3aabde72d01de8c0b34.png",
					custom_name: "乐范按摩助眠颈枕",
					custom_summary: "按摩解压，放松入眠，专利锁扣，收纳自如",
					custom_price: 99
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