<template>
	<div class="entry">
		<form action="#">
			<p class="form-group">
				<label for="username"></label>
				<input v-model="username" type="text" id="username2" placeholder="用户名" />
			</p>
			<p v-text="content" style="font-size:16px;margin-left:10%;color:#ff6700;"></p>
			<p class="form-group">
				<label for="password"></label>
				<input v-model="password" type="password" id="password2" placeholder="密码" />
			</p>
			<a @click="entry">
				<span>欢迎登录</span>
			</a>
		</form>
	</div>
</template>

<script>
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
			entry(){
				var self=this;
				$.ajax({
					type:"POST",
					url:"http://localhost:7000/entry",
					data:{
						username:this.username,
						password:this.password
					},
					success(data){
//						if(data==="登录成功"){
							location.href='#/shopingCart';
//						}
//						else{
//							self.content=data;
//						}
					}
				})
			}
		},
		mounted(){
			
		}
	}
</script>

<style scoped>
	.entry {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	
	.entry input {
		font-size:16px;
		padding: 16px 0;
		border: 0;
		width: 80%;
		display: block;
		margin-left: 10%;
		border-bottom: 1px solid #ccc;
	}
	
	.entry a {
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
	
	.entry a span {
		position: relative;
		left: 0;
		top: 10px;
	}
	.entry p{
		padding:0;border:0;height:48px;line-height:48px;
	}
</style>