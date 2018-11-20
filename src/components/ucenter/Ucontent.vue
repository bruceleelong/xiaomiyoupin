<template>
	<div class="container">
		<div style="height:40px;padding:0 10px 0 20px;border-bottom:1px solid #ccc;display: flex;justify-content: space-between;align-items:center;" class="con ">
			<span>我的订单</span>
			<img style="width:18px;height:18px;" src="https://m.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt="" />
		</div>
		<div style="display:flex;flex-direction:column;">
			<div style="flex:1;">
				<div style="flex:1;display: flex;flex-direction: column;align-items:center;">
					<img style="flex:1;width:23px;height:23px;display: block;" src="https://m.youpin.mi.com/youpin/static/m/res/images/personal_icon_paid.png" />
					<p style="flex:1;hieght:16px;line-height:16px;padding-left:0;border-bottom:0;">待付款</p>
				</div>
				<div style="flex:1;display: flex;flex-direction: column;align-items:center;">
					<img style="flex:1;width:23px;height:23px;display: block;" src="https://m.youpin.mi.com/youpin/static/m/res/images/personal_icon_paid.png" />
					<p style="flex:1;hieght:16px;line-height:16px;padding-left:0;border-bottom:0;">待收货</p>
				</div>
				<div style="flex:1;display: flex;flex-direction: column;align-items:center;">
					<img style="flex:1;width:23px;height:23px;display: block;" src="https://m.youpin.mi.com/youpin/static/m/res/images/personal_icon_paid.png" />
					<p style="flex:1;hieght:16px;line-height:16px;padding-left:0;border-bottom:0;">待评价</p>
				</div>
				<div style="flex:1;display: flex;flex-direction: column;align-items:center;">
					<img style="flex:1;width:23px;height:23px;display: block;" src="https://m.youpin.mi.com/youpin/static/m/res/images/personal_icon_paid.png" />
					<p style="flex:1;hieght:16px;line-height:16px;padding-left:0;border-bottom:0;">退款订单</p>
				</div>
			</div>
			<div style="flex:1;">
				<img style="height:70px;" src="https://m.youpin.mi.com/youpin/static/m/res/images/newUserBanner.png" />
			</div>
		</div>
		<div style="height:49px;padding:0 10px 0 15px;border-bottom:1px solid #ccc;display: flex;justify-content: space-between;align-items:center;" class="con cn">
			<img style="width:38px;height:38px;" src="https://m.youpin.mi.com/youpin/static/m/res/images/personal_icon_assets.png" />
			<span style="margin-left: -20%;">我的资产</span>
			<span style="color:#ccc;">优惠券/积分</span>
			<img style="width:18px;height:18px;" src="https://m.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt="" />
		</div>
		<div style="height:49px;padding:0 10px 0 15px;border-bottom:1px solid #ccc;display: flex;justify-content: space-between;align-items:center;" class="con cn">
			<img style="width:38px;height:38px;" src="https://m.youpin.mi.com/youpin/static/m/res/images/pin_logo.jpg" />
			<span style="margin-left: -62%;">拼团订单</span>
			<img style="width:18px;height:18px;" src="https://m.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" />
		</div>
		<div style="height:49px;padding:0 10px 0 15px;border-bottom:1px solid #ccc;display: flex;justify-content: space-between;align-items:center;" class="con cn">
			<img style="width:38px;height:38px;" src="https://m.youpin.mi.com/youpin/static/m/res/images/personal_icon_collection.png" />
			<span style="margin-left: -62%;">我的收藏</span>
			<img style="width:18px;height:18px;" src="https://m.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" />
		</div>
		<div style="height:49px;padding:0 10px 0 15px;border-bottom:1px solid #ccc;display: flex;justify-content: space-between;align-items:center;" class="con cn">
			<img style="width:38px;height:38px;" src="https://m.youpin.mi.com/youpin/static/m/res/images/personal_icon_address.png" />
			<span style="margin-left: -62%;">地址管理</span>
			<img style="width:18px;height:18px;" src="https://m.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" />
		</div>
		<div style="height:49px;padding:0 10px 0 15px;border-bottom:1px solid #ccc;display: flex;justify-content: space-between;align-items:center;" class="con cn">
			<img style="width:38px;height:38px;" src="https://m.youpin.mi.com/youpin/static/m/res/images/set_icon_message_new.png" />
			<span style="margin-left: -62%;">消息中心</span>
			<img style="width:18px;height:18px;" src="https://m.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" />
		</div>
		<div style="height:49px;padding:0 10px 0 15px;border-bottom:1px solid #ccc;display: flex;justify-content: space-between;align-items:center;margin-bottom: 50px;" class="con cn">
			<img style="width:38px;height:38px;" src="https://m.youpin.mi.com/youpin/static/m/res/images/personal_icon_feedback.png" />
			<span style="margin-left: -62%;">帮助与反馈</span>
			<img style="width:18px;height:18px;" src="https://m.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" />
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.container{
		display:flex;
		flex-direction:column;
	}
	.con{
		flex:1;height:40px;
		display: flex;
		justify-content: space-between;
	}
	
	.container div:nth-child(2){
		flex:4;
	}
	.container div:nth-child(1){
		display: flex;
		justify-content: space-between;
	}
	
</style>