<template>
	<view class="index">
		<view class="text">
			<view class="tit">1.问题XXXXXXXXXXXXXXXXX</view>
			<view class="box">
				<view class="aa">
					<image src="../../static/loginImg/aaxa.png" mode=""></image>
					<text>答案1</text>
				</view>
				<view class="aa">
					<image src="../../static/loginImg/kax.png" mode=""></image>
					<text>答案2</text>
				</view>
				<view class="aa">
					<image src="../../static/loginImg/kax.png" mode=""></image>
					<text>答案3</text>
				</view>
			</view>
		</view>
		<view class="text">
			<view class="tit">1.问题XXXXXXXXXXXXXXXXX</view>
			<view class="box">
				<view class="aa">
					<image src="../../static/loginImg/aaxa.png" mode=""></image>
					<text>答案1</text>
				</view>
				<view class="aa">
					<image src="../../static/loginImg/kax.png" mode=""></image>
					<text>答案2</text>
				</view>
				<view class="aa">
					<image src="../../static/loginImg/kax.png" mode=""></image>
					<text>答案3</text>
				</view>
			</view>
		</view>
		<view class="text">
			<view class="tit">1.问题XXXXXXXXXXXXXXXXX</view>
			<view class="box">
				<view class="aa">
					<image src="../../static/loginImg/aaxa.png" mode=""></image>
					<text>答案1</text>
				</view>
				<view class="aa">
					<image src="../../static/loginImg/kax.png" mode=""></image>
					<text>答案2</text>
				</view>
				<view class="aa">
					<image src="../../static/loginImg/kax.png" mode=""></image>
					<text>答案3</text>
				</view>
			</view>
		</view>
		<view class="btn" @click="asa">
				提交
			</view>
	</view>
</template>

<script>
	export default{
		methods:{
			asa(){
				uni.navigateTo({
					url:"orderAll"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.index{
		width: 750upx;
		height: 100vh;
		background: #f2f2f2;
	}
	.text{
		padding: 40upx;
		background: white;
		.tit{
			font-size:28upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(26,26,26,1);
		}
		.box{
			margin-top: 40upx;
			padding-bottom: 20upx;
			border-bottom:1upx solid rgba(191,191,191,1);
			display: flex;
			justify-content: space-between;
			.aa{
				display: flex;
				align-items: center;
				image{
					width: 34upx;
					height: 34upx;
					margin-right: 18upx;
				}
				text{
					font-size:28upx;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(26,26,26,1);
				}
			}
		}
	}
	.btn{
		background: #FFC823;
		width:715upx;
		height: 91upx;
		font-size:36upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
		line-height:91upx;
		text-align: center;
		position: fixed;
		left:15upx;
		bottom: 32upx;
	}
</style>
