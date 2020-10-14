<template>
	<view class="index">
		<view class="bigBox">
			<text>姓名：张三胖</text>
			<text>电话：12366598964</text>
			<text>地址：XXXXXXXXXXXXXXXXXXXXXXXXX</text>
			<text>性别:</text>
			<text>年龄:</text>
		</view>
		<view class="box">
			<image src="../../../static/loginImg/xjz.png" mode=""></image>
			<image src="../../../static/loginImg/xjf.png" mode=""></image>
			<image src="../../../static/loginImg/xj.png" mode=""></image>
			<image src="../../../static/loginImg/xjgzz.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style scoped lang="scss">
	.index{
		width: 750upx;
		
		background: #f2f2f2;
		padding-top: 20upx;
	}
	.bigBox{
		padding: 40upx;
		width:670upx;
		background:rgba(255,255,255,1);
		text{
			display: block;
			font-size:28upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(153,153,153,1);
			line-height:23px;
		}
	}
	.box{
		padding: 50upx 85upx;
		width: 580upx;
		image{
			display: block;
			width: 578upx;
			height: 364upx;
			border:12upx;
			margin-bottom: 29upx;
		}
	}
</style>
