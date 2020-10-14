<template>
	<view class="bigBox">
		<view class="tit">选择你的权限</view>
		<view class="box" @click="zhuguan">主管</view>
		<view class="box" @click="jishu">技术员</view>
		<view class="box" @click="gongren">工人</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			getDome(item) {
				console.log(item.url)
				uni.navigateTo({
					url: '../newfrom/newfrom'
				});
			},
			zhuguan(){
				uni.navigateTo({
					url:'./zhuguan'
				})
			},
			jishu(){
				uni.navigateTo({
					url:'homejishu'
				})
			},
			gongren(){
				uni.navigateTo({
					url:'home'
				})
			}
		}
	}
</script>

</script>

<style lang="scss">
	/* 头部个人信息 */
	.bigBox{
		text-align: center;
	}
	.tit{
		margin-bottom: 50upx;
	}
	.box{
		margin:0 auto;
		width: 500upx;
		height: 300upx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20upx;
		border:1px solid black;
	}
</style>
