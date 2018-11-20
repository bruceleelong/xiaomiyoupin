<template>
</template>

<script>
	export default {
		data() {
			return arr;
		},
		methods: {
			getNews: function() {
				var self = this;
				$.ajax({
					type: "POST",
					url: "http://localhost:9999/getnews",
//					async: true,
					success: function(data) {
						console.log(JSON.parse(data))
						var news = JSON.parse(data)
						self.arr = news.list
					}
				});
			}
		},
		mounted:{
			this.getNews()
		}
	}
</script>

<style>

</style>