<template>
	<div class="registe">
		<form action="#">
			<p class="form-group">
				<label for="username"></label>
				<input v-model="username" type="text" id="username1" placeholder="用户名" />
			</p>
			<p v-text="content" style="font-size:16px;margin-left:10%;color:#ff6700;"></p>
			<p class="form-group">
				<label for="password"></label>
				<input v-model="password" type="password" id="password1" placeholder="密码" />
			</p>
			<a @click="registe" ><!--a标签不能加#号,会默认跳转-->
				<span>立即注册</span>
			</a>
		</form>
	</div>
</template>

<script >
	import $ from 'jquery';
	window.$ = $;
	export default{
		data(){
			return{
				username:"",
				password:"",
				content:""
			}
		},
		methods:{
			registe(){
				var self=this;
				$.ajax({
					type:"POST",
					url:"http://localhost:7000/registe",
					data:{
						username:this.username,
						password:this.password
					},
					success(data){
						console.log(data);
						if(data==="注册成功"){
							location.href='#/login/entry';
						}else{
							self.content=data;
						}
					}
				})
			}
		},
		mounted(){
			
		}
	}
</script>

<style scoped>
	.registe {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	
	.registe input {
		font-size:16px;
		padding: 16px 0;
		border: 0;
		width: 80%;
		display: block;
		margin-left: 10%;
		border-bottom: 1px solid #ccc;
	}
	
	.registe a {
		display: block;
		margin-left: 10%;
		width: 80%;
		height: 44px;
		margin-top: 24px;
		font-size: 18px;
		text-decoration: none;
		background-color: #ff6700;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		cursor: pointer;
	}
	
	.registe a span {
		position: relative;
		left: 0;
		top: 10px;
	}
	.registe p{
		padding:0;border:0;height:48px;line-height:48px;
	}
	
</style>