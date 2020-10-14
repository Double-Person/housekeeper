<template>
	<view class="index">
		<view class="headimg">
			欢迎使用
		</view>
		<view class="xxBox">
			<view class="sjBox">
				<view class="sjh">手机号</view>
				<view class="sjText">
					<input type="text" value="12345678911" />
					<image src="../../static/loginImg/shouji-copyx.png" mode="" class="shoujiimage"></image>
				</view>
			</view>
			<view class="sjBox">
				<view class="sjh">密码</view>
				<view class="sjText">
					<input type="text" value="12345678911" />
					<image src="../../static/loginImg/bukejianx.png" mode="" class="xsyc"></image>
				</view>
			</view>
			<view class="zjdl">
				<text @click="goPassword">忘记密码?</text>
				<text @click="goYz">注册</text>
			</view>
		</view>
		<!-- 登录 -->
		<view class="button" @click="goHome">登录</view>
		<view class="imgBox" @click="wxLogin">
			<image src="../../static/loginImg/wx.png" mode=""></image>
		</view>
		<view class="btnImg">
			<image src="../../static/loginImg/lonbg.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			goPassword(){
				uni.navigateTo({
					url:"login_forgetPassword"
				})
			},
			wxLogin() {
				console.log('微信登录')
			},
			goYz(){
				uni.navigateTo({
					url:"login_login"
				})
			},
			goCode(){
				uni.navigateTo({
					url:"login-s"
				})
			},
			goHome(){
				uni.navigateTo({
					url:"../home/home1"
				})
			}
			
		}
	}
</script>
	
<style scoped lang="scss">

	.index{
		width: 750upx;
		height: 100vh;
		overflow: hidden;
	}
	.headimg{
		width: 750upx;
		height:55upx;
		margin-top:301upx;
		font-size:58upx;
		font-family:SourceHanSansCN;
		font-weight:500;
		color:rgba(53,53,53,1);
		text-align: center;
	}
	.xxBox{
		padding: 0 125upx;
		margin-top:107upx;
		.sjBox{
			width: 469upx;
			padding: 16upx;
			border-bottom:1px solid rgba(255,213,163,1);
			margin-bottom: 35upx;
			.sjh{
				width:100upx;
				height:27upx;
				font-size:28upx;
				font-family:SourceHanSansCN;
				font-weight:bold;
				color:rgba(153,153,153,1);
			}
			.sjText{
				margin-top:35upx;
				display: flex;
				position: relative;
				input{
					width:300upx;
					height:34upx;
					font-size:42upx;
					font-family:SourceHanSansCN;
					font-weight:bold;
					color:rgba(77,77,77,1);
				}
				.shoujiimage{
					display: block;
					width:16upx;
					height:21upx;
					position: absolute;
					top:20upx;
					right:0upx;
				}
				.xsyc{
					display: block;
					width:22upx;
					height:16upx;
					position: absolute;
					top:20upx;
					right:0upx;
				}
				.yzm{
					padding: 15upx 0upx;
					width:163upx;
					height:35upx;
					border:1upx solid rgba(255,193,12,1);
					border-radius:4upx;
					font-size:24upx;
					font-family:SourceHanSansCN;
					font-weight:bold;
					color:rgba(255,193,12,1);
					text-align: center;
				}
			}
		}
		.zjdl{
			height:23upx;
			font-size:24upx;
			font-family:SourceHanSansCN;
			font-weight:400;
			color:rgba(190,190,190,1);
			display: flex;
			justify-content: space-between;
		}
	}
	.button{
		margin:0 auto;
		margin-top:70upx;
		width:417upx;
		height:83upx;
		background:linear-gradient(150deg,rgba(255,200,35,1),rgba(255,193,12,1));
		box-shadow:0upx 0upx 3upx 0upx rgba(208,139,20,0.25);
		border-radius:42upx;
		font-size:40upx;
		font-family:SourceHanSansCN;
		font-weight:400;
		color:rgba(53,53,53,1);
		text-align: center;
		line-height:83upx;
	}
	.imgBox{
		// margin-top: 150upx;
		margin-top: 70upx;
		width: 750upx;
		image{
			margin: 0 auto;
			display: block;
			width: 85upx;
			height: 85upx;
			position: relative;
			z-index: 2;
		}
	}
	.btnImg{
		width: 750upx;
		height: 163upx;
		overflow: hidden;
		background: url(../../static/loginImg/lonbg.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		position: fixed;
		bottom: 0upx;
		left: 0upx;
	}
</style>
