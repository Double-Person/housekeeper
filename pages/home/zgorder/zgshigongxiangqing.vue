<template>
	<view class="index">
		<!--  -->
		
		<!-- 项目流程 -->
		<view class="bigBox">
			<view class="smallBox">
				<image src="/static/loginImg/yuana.png" mode="" class="oA"></image>
				<image src="/static/loginImg/yuana.png" mode="" class="oB"></image>
				<image src="/static/loginImg/yuana.png" mode="" class="oV"></image>
				<view class="test">检测</view>
				<view class="box">
					<view class="imgBox">
						<image src="/static/my_icon/logo.jpg" mode=""></image>
						<image src="/static/my_icon/logo.jpg" mode=""></image>
					</view>
					<view class="textC">师傅已到达施工地点，开始施工...</view>
					<view class="time">2019-12-09 18:19</view>
				</view>
				<view class="box">
					<view class="imgBox">
						<image src="/static/my_icon/logo.jpg" mode=""></image>
						<image src="/static/my_icon/logo.jpg" mode=""></image>
					</view>
					<view class="textC">师傅已到达施工地点，开始施工...</view>
					<view class="time">2019-12-09 18:19</view>
				</view>
				<!--  -->
				<view class="test top">进度1</view>
				<view class="box">
					<view class="imgBox">
						<image src="/static/my_icon/logo.jpg" mode=""></image>
						<image src="/static/my_icon/logo.jpg" mode=""></image>
					</view>
					<view class="textC">师傅已到达施工地点，开始施工...</view>
					<view class="time">2019-12-09 18:19</view>
				</view>
				<view class="box">
					<view class="imgBox">
						<image src="/static/my_icon/logo.jpg" mode=""></image>
						<image src="/static/my_icon/logo.jpg" mode=""></image>
					</view>
					<view class="textC">施工已结束...</view>
					<view class="time">2019-12-09 18:19</view>
				</view>
				<view class="test top">完工</view>
				<view class="box">
					<view class="imgBox">
						<image src="/static/my_icon/logo.jpg" mode=""></image>
						<image src="/static/my_icon/logo.jpg" mode=""></image>
					</view>
					<view class="textC">师傅正在施工中...</view>
					<view class="time">2019-12-09 18:19</view>
				</view>
				<view class="box">
					<view class="imgBox">
						<image src="/static/my_icon/logo.jpg" mode=""></image>
						<image src="/static/my_icon/logo.jpg" mode=""></image>
					</view>
					<view class="textC">师傅正在施工中...</view>
					<view class="time">2019-12-09 18:19</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
	
		data (){
			return{
				off:false,
			}
		},
		methods:{
			navigateBack(){
				uni.navigateBack({
					
				})
			},
			cc(){
				this.off=true
			},
			oss(){
				this.off=false
			},
			// 查看方案
			goScheme(){
				uni.navigateTo({
					url:'itemAddName'
				})
			},
			// 意见
			goIdea(){
				uni.navigateTo({
					url:'problemSolving'
				})
			},
			//评价
			goAppraise(){
				uni.navigateTo({
					url:'comment'
				})
			},
			pay(){
				uni.navigateTo({
					url:'orderDetails'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@font-face {
		 font-family:SourceHanSansCN;
		 src: url("~@/static/SourceHanSansCN-Normal.otf") format('truetype'),	
	}
	.index{
		width:750upx;
		height:100vh;
		background-color: white;
		font-family:SourceHanSansCN;
	}
	.textBox{
		width:750upx;
		height:100upx;
		background:linear-gradient(150deg,rgba(255,200,35,1),rgba(255,193,12,1));
		box-shadow:0upx 0upx 3upx 0upx rgba(208,139,20,0.25);
		padding-top: 18upx;
		text-align: center;
		.tit{
			font-size:36upx;
			font-weight:400;
			color:rgba(51,51,51,1);
			line-height:50upx;
		}
		.titText{
			font-size:26upx;
			font-weight:400;
			color:rgba(51,51,51,1);
			line-height:50upx;
		}
	}
	.sax{
		width:547upx;
		height:60upx;
		background:rgba(249,201,36,1);
		box-shadow:2upx 3upx 7upx 0upx rgba(0, 0, 0, 0.22);
		border-radius:0upx 29upx 29upx 0upx;
		display: flex;
		margin-top:40upx;
		padding-left: 60upx;
		.name{
			padding-right: 19upx;
			display: inline-block;
			font-size:32upx;
			font-weight:400;
			color:rgba(39,39,39,1);
			border-right:1upx solid rgba(51,51,51,1);
			line-height: 60upx;
		}
		.phone{
		
			image{
				width: 16upx;
				height: 16upx;
				margin-left: 20upx;
				margin-right: 6upx;
			}
			text{
				font-size:28upx;
				font-weight:400;
				color:rgba(51,51,51,1);
				line-height: 60upx;
			}
		}
	}

	.bigBox{
		margin-top:57upx;
		padding: 0upx 40upx 0upx 45upx;
		width: 665upx;
		.smallBox{
			height: 1910upx;
			padding-left:50upx;
			border-left:2upx solid rgba(26,26,26,1);
			position: relative;
			.oA{
				position: absolute;
				top:-12upx;
				left:-12upx;
				width: 24upx;
				height: 24upx;
			}
			.oB{
				position: absolute;
				top:950upx;
				left:-12upx;
				width: 24upx;
				height: 24upx;
			}
			.oV{
				position: absolute;
				bottom:-10upx;
				left:-20upx;
				width:40upx;
				height:40upx;
			}
			.test{
				width:129upx;
				height:55upx;
				background:rgba(26,26,26,1);
				border-radius:10upx;
				font-size:32upx;
				font-weight:400;
				color:rgba(249,201,36,1);
				line-height:55upx;
				text-align: center;
			}
			.top{
				margin-top: 60upx;
			}
			.box{
				padding: 39upx 0upx;
				border-bottom:1px solid rgba(191,191,191,1);
				.textC{
					margin-top: 30upx;
					font-size:28upx;
					font-weight:400;
					color:rgba(179,179,179,1);
					line-height:8upx;
				}
				.time{
					margin-top:32upx;
					font-size:24upx;
					font-weight:400;
					color:rgba(204,204,204,1);
					line-height:8upx;
					margin-left: 408upx;
				}
				.pay{
					margin:0 auto;
					margin-top:40upx;
					width:168upx;
					height:62upx;
					background:rgba(249,201,36,1);
					border-radius:31upx;
					font-size:32upx;
					font-weight:400;
					color:rgba(26,26,26,1);
					line-height:62upx;
					text-align: center;
				}
				.imgBox{
					width:600upx;
					height:257upx;
					image{
						display: inline-block;
						width: 277upx;
						height: 100%;
					}
					image:nth-child(1){
						margin-right: 39upx;
					}
				}
				.flag{
					width: 300upx;
					margin:0 auto; 
					display: flex;
					margin-top:41upx;
					.yes{
						width:148upx;
						height:62upx;
						background:rgba(249,201,36,1);
						border-radius:31upx;
						font-size:32upx;
						font-weight:400;
						color:rgba(26,26,26,1);
						line-height:62upx;
						text-align: center;
					}
					.no{
						margin-left:40upx;
						width:128upx;
						height:62upx;
						background:rgba(26,26,26,1);
						border-radius:31upx;
						font-size:32upx;
						font-weight:400;
						color:rgba(249,201,36,1);
						line-height:62upx;
						text-align: center;
					}
				}
			}
			.textN{
				margin-top:40upx;
				font-size:28upx;
				font-weight:400;
				color:rgba(179,179,179,1);
			}
		}
		.texta{
			margin-top:40upx;
			font-size:28upx;
			font-weight:400;
			margin-left: 57upx;
			color:rgba(179,179,179,1);
		}
		.pingj{
			margin:0 auto;
			margin-top:40upx;
			width:148upx;
			height:62upx;
			background:rgba(249,201,36,1);
			border-radius:31upx;
			font-size:32upx;
			font-weight:400;
			color:rgba(26,26,26,1);
			line-height:62upx;
			text-align: center;
		}
	}
	.botton{
		width:570upx;
		height:88upx;
		margin:0 auto;
		margin-top:60upx;
		display: flex;
		margin-bottom: 122upx;
		.leftbx{
			width:315+40+40upx;
			height:88upx;
			background:rgba(26,26,26,1);
			border-radius:50upx 0upx 0upx 50upx;
			font-size:24upx;
			font-family:SourceHanSansCN;
			font-weight:400;
			color:rgba(249,201,36,1);
			line-height:88upx;
			text-align: center;
		}
		.rightbx{
			width:142+60upx;
			height:88upx;
			background:rgba(249,201,36,1);
			border-radius:0px 31px 31px 0px;
			font-size:24upx;
			font-family:SourceHanSansCN;
			font-weight:400;
			color:rgba(26,26,26,1);
			line-height:88upx;
			text-align: center;
		}
	}
</style>
