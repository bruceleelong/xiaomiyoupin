<template>
	<div>

		<div class="login">
			<img @click="forback" src="https://m.youpin.mi.com/youpin/static/m/res/images/std_tittlebar_main_device_back_normal.png" />
			<em id="custom_display_1" class="milogo" style="width:48px;height:48px;padding:30px 0 10px 0;flex:1;margin-left:45%;">
            <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
            	<rect width="48" height="48" rx="3" ry="3" style="fill:#ff6700"></rect>
                <rect x="10" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect>
                <rect x="33.75" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect>
                <rect x="11.25" y="15" width="15" height="4.1" style="fill:#FFFFFF"></rect>
                <rect x="26.2" y="20.55" width="4.2" height="12.5" style="fill:#FFFFFF"></rect>
                <rect x="20.6" y="15" width="9.8" height="9.8" rx="4.4" ry="4.4" style="fill:#FFFFFF"></rect>
                <rect x="20.2" y="19" width="6" height="6" rx="2" ry="2" style="fill:#ff6700"></rect>
                <rect x="18" y="19.1" width="4" height="2.2" style="fill:#ff6700"></rect>
                <rect x="24.2" y="23" width="1.94" height="10" style="fill:#ff6700"></rect>
                <rect x="18.1" y="22.8" width="4.2" height="10.2" style="fill:#FFFFFF"></rect>
            </svg>
        </em>
			<div class="login_nav">
				<p><span @click="skip(index)" :class="{active:page===index}" v-for="(a,index) in arr" :key="index" v-text="a.title"></span></p>
			</div>
			<router-view></router-view>

		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				page: 0,
				arr: [{
					title: "小米注册"
				}, {
					title: "小米登录"
				}]
			}
		},
		methods: {
			forback() {
				history.back();
			},
			skip(index) {
				this.page = index;
				switch(index) {
					case 0:
						location.href = '#/login/registe';
						break;
					case 1:
						location.href = '#/login/entry'
				}
			}
		},
		mounted() {

		}
	}
</script>

<style>
	.login {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.login img{
		width: 40px;
		height: 45px;
	}
	.login_nav {
		flex: 1;
		display: flex;
		font-size: 18px;
		height: 24px;
		line-height: 24px;
		margin-bottom: 20px;
	}
	
	.login_nav p {
		flex: 1;
		padding: 0;
		border: 0;
		height: 24px;
		line-height: 24px;
		display: flex;
		justify-content: space-evenly;
	}
	
	.active {
		border-bottom: 2px solid #ff6700;
	}
</style>