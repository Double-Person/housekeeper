<template>
	<view class="index">
		<view class="bigBox">
			<view class="box" v-for="(item,index) in 5" :key="index" @click="gox">
				<view class="tit">
					<image src="../../../static/loginImg/qq.png" mode=""></image>
					<view class="text">
						<view class="name">王大伟</view>
						<view class="zw">职位</view>
					</view>
				</view>
				<view class="bgtext">查看资料</view>
			</view>
		</view>
		<view class="btn" @click="detailAll">
			确定
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			gox(){
				uni.navigateTo({
					url:'xuanzejishus'
				})
			},
			detailAll(){
				uni.navigateTo({
					url:'../zhuguan'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.bigBox{
		padding: 40upx;
		.box{
			margin-top: 15upx;
			padding: 0 30upx;
			width: 610upx;
			height: 128upx;
			border:1upx solid #FFEFC0;
			border-radius: 8upx;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.tit{
				display: flex;
				
				image{
					display: block;
					width:80upx;
					height:80upx;
					border-radius: 100%;
				}
				.text{
					margin-left: 22upx;
					.name{
						font-size:32upx;
						font-family:PingFang SC;
						font-weight:400;
						color:rgba(51,51,51,1);
					}
					.zw{
						font-size:24upx;
						font-family:PingFang SC;
						font-weight:400;
						color:rgba(154,154,154,1);
					}
				}
			}
			.bgtext{
				margin-left: auto;
				padding-top: 6upx;
				width: 130upx;
				height: 40upx;
				font-size:26upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(255,193,13,1);
				text-align: center;
				border:1upx solid #FFEFC0;
				border-radius: 8upx;
				
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
		border-radius: 8upx;
	}
</style>
