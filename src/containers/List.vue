<template>
	<div class="list">
		<lheader />
		<lmain />
		<router-view></router-view><!--路由嵌套,这句代码要放在父级路由里面,注意位置顺序-->
		<div class="dd">
			
		</div>
	</div>
</template>

<script>
	import lheader from '../components/list/Lheader.vue';
	import lmain from '../components/list/Lmain.vue';

	export default {
		data() {
			return {

			}
		},
		components: {
			lheader,
			lmain
		}
	}
</script>

<style>
	.list {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.dd{
		height:70px;
	}
</style>