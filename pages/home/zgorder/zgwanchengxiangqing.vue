<template>
	<view class="index">
		<!--  -->
		<view class="box_te">
			<view class="tit">
				<view class="imgtit">
					<image src="../../../static/my_icon/logo.jpg" mode=""></image>
					<text>窗台防水</text>
				</view>

				<view class="com">显示状态</view>
			</view>
			<view class="textBox">
				<view class="img">
					<image src="../../../static/my_icon/logo.jpg" mode=""></image>
				</view>
				<view class="time">
					<text>项目名称</text>
					<text>工人名称</text>
				</view>
				<!-- <view class="btn" @click="fangan">
					查看方案
				</view> -->
			</view>
		</view>

		<view class="orderxx">
			<view class="titb">
				订单信息
			</view>
			<view class="textT">
				<text>订单编号：51341851215121515</text>
				<text>下单日期：2019年12月18日 13:20</text>
				<text>客户姓名：张三胖</text>
				<text>客户电话：18356987456</text>
				<text>客户地址：四川省绵阳市涪城区贾家店街89号A栋203室</text>
			</view>
		</view>
		<!-- 项目负责人 -->
		<view class="order_img">
			<view class="title">
				项目负责人
			</view>
			<view class="name">
				<view class="tit">王大伟</view>
				<view class="phone">
					<text>18919860222</text>
					<image src="../../../static/loginImg/dianhua.png" mode=""></image>
				</view>
			</view>
			<view class="name">
				<view class="tit">王大伟</view>
				<view class="phone">
					<text>18919860222</text>
					<image src="../../../static/loginImg/dianhua.png" mode=""></image>
				</view>
			</view>
		</view>

		<!-- 照片 -->
		<view class="order_img">
			<view class="title">
				照片
			</view>
			<view class="img_data">
				<view class="oimg">
					<image src="../../../static/my_icon/logo.jpg"></image>
				</view>
				<view class="oimg">
					<image src="../../../static/my_icon/logo.jpg"></image>
				</view>
				<view class="oimg">
					<image src="../../../static/my_icon/logo.jpg"></image>
				</view>
			</view>
		</view>
		<!-- 备注 -->
		<view class="order_txt">
			<view class="title">
				备注
			</view>
			<view class="txt_data">
				xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
			</view>
		</view>
		<!-- 总价计算 -->
		<!-- <view class="zong">
			<view class="zprice">
				总价：<text>￥300</text>
			</view>
			<view class="fu">
				支付比例：<text>100%</text>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {

		data() {
			return {}
		},
		methods: {
			detailAll(){
			 	
			},
			fangan(){
				uni.navigateTo({
					url:"zgfanganxiangqings"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@font-face {
		font-family: SourceHanSansCN;
		src: url("~@/static/SourceHanSansCN-Normal.otf") format('truetype'),
	}

	.index {
		width: 750upx;
		background-color: #F2F2F2;
		font-family: SourceHanSansCN;
	}

	.box_te {
		border-top: 19upx solid #f2f2f2;
		padding: 40upx 20upx 0upx 20upx;
		height: 350upx;
		background: white;

		.tit {
			display: flex;
			justify-content: flex-end;
			align-items: center;

			.imgtit {
				position: relative;

				image {
					width: 38upx;
					height: 38upx;
					border-radius: 4upx;
					position: absolute;
					top: 8upx;
					left: 0upx;
				}

				text {
					margin-left: 56upx;
					font-size: 36upx;
					font-family: SourceHanSansCN;
					font-weight: 600;
					color: rgba(26, 26, 26, 1);
					line-height: 36upx;
				}
			}

			.com {
				width: 130upx;
				height: 48upx;
				margin-left: auto;
				font-size: 32upx;
				font-weight: 500;
				color: #999;
				text-align: center;
				line-height: 48upx;
			}
		}

		.textBox {
			padding: 60upx 0upx 20upx 0upx;
			display: flex;
			position: relative;
			// justify-content: flex-end;
			// .btn{
			// 	margin-left: auto;
			// 	margin-top:110upx;
			// 	width: 190upx;
			// 	height: 69upx;
			// 	background: #FFC61D;
			// 	border-radius: 8upx;
			// 	font-size:32upx;
			// 	font-family:PingFang SC;
			// 	font-weight:500;
			// 	color:rgba(26,26,26,1);
			// 	line-height:69upx;
			// 	text-align: center;
			// }
			.img {
				width: 180upx;
				height: 180upx;
				background: rgba(146, 113, 113, 1);
				border-radius: 8upx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.time {
				margin-left: 18upx;
				margin-top: 21upx;

				text {
					display: block;
					font-size: 28upx;
					font-weight: 400;
					color: #191919;
				}

				image {
					margin-left: 20upx;
					width: 13upx;
					height: 24upx;
				}
			}
		}

		.btnBox {
			display: flex;
			float: right;

			.btns {
				width: 214upx;
				height: 68upx;
				background: linear-gradient(150deg, rgba(255, 200, 35, 1), rgba(255, 193, 12, 1));
				border-radius: 8upx;
				font-size: 32upx;
				font-family: SourceHanSansCN;
				font-weight: 600;
				color: rgba(26, 26, 26, 1);
				line-height: 68upx;
				position: relative;

				text {
					margin-left: 60upx;
				}

				image {
					position: absolute;
					top: 18upx;
					left: 16upx;
					width: 39upx;
					height: 39upx;
				}
			}

			.btn {
				margin-left: 30upx;
				width: 214upx;
				height: 68upx;
				background: linear-gradient(150deg, rgba(255, 200, 35, 1), rgba(255, 193, 12, 1));
				border-radius: 8upx;
				font-size: 32upx;
				font-family: SourceHanSansCN;
				font-weight: 600;
				color: rgba(26, 26, 26, 1);
				line-height: 68upx;
				position: relative;

				text {
					margin-left: 60upx;
				}

				image {
					position: absolute;
					top: 15upx;
					left: 16upx;
					width: 33upx;
					height: 39upx;
				}
			}
		}
	}

	.orderxx {
		margin-top: 20upx;
		padding: 0upx 40upx;
		width: 670upx;
		
		background: #fff;
		border-radius: 8upx;

		.titb {
			padding: 20upx 0upx;
			width: 670upx;
			font-size: 28upx;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			border-bottom: 1upx solid rgba(191, 191, 191, 1);
		}
		

		.textT {
			margin-top: 20upx;

			text {
				width: 670upx;
				display: block;
				font-size: 27upx;
				font-weight: 400;
				color: rgba(153, 153, 153, 1);
				line-height: 50upx;
			}

			text:nth-child(3) {
				margin-top: 60upx;
			}
		}
	}

	.serve {
		padding: 0upx 40upx;
		margin-top: 20upx;
		width: 670upx;
		height: 465upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 8upx;

		.titb {
			padding: 30upx 0upx;
			width: 670upx;
			font-size: 28upx;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			border-bottom: 1upx solid rgba(191, 191, 191, 1);
			overflow: hidden;
			.tit_a{
				float: left;
			}
			.tit_b{
				float:right;
				color: #D4D4D4;
			}
		}

		.box {
			padding: 40upx 0upx 20upx 0upx;
			border-bottom: 1upx solid rgba(191, 191, 191, 1);

			.text {
				display: flex;
				justify-content: space-between;
				margin-bottom: 20upx;

				text:nth-child(1) {
					font-size: 28upx;
					font-weight: 400;
					color: rgba(153, 153, 153, 1);
				}

				text:nth-child(2) {
					font-size: 28upx;
					font-weight: 600;
					color: rgba(26, 26, 26, 1);
				}

				text:nth-child(3) {
					font-size: 28upx;
					font-weight: 400;
					color: rgba(253, 44, 44, 1);
				}
			}
		}

		.bottom {
			padding: 20upx 0upx 40upx 0upx;
			font-size: 24upx;
			color: #191919;
			position: relative;

			.right {
				margin-top: 11upx;
			}

			.youhui {
				position: absolute;
				top: 20upx;
				right: 0upx;
			}

			.color {
				color: #FA4F4F;
			}
		}
	}

	.order_img {
		width: 750px;
		background-color: #fff;
		padding: 40upx;
		overflow: hidden;
		margin-top: 20upx;
		.name{
			width: 670upx;
			display: flex;
			justify-content: space-between;
			margin-top: 20upx;
			.tit{
				font-size:28upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(153,153,153,1);
			}
		}
		.phone{
			display: flex;
			align-items: center;
			text{
				font-size:28upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(251,80,80,1);
			}
			image{
				margin-left: 18upx;
				width:38upx;
				height:38upx;
			}
		}
		.title {
			font-size:28upx;
			width: 670upx;
			padding-bottom: 20upx;
			border-bottom: 2upx solid rgba(190, 190, 190, 1);
		}

		.img_data {
			width: 670upx;
			display: flex;
			justify-content: space-between;
			margin-top: 25upx;

			.oimg {
				width: 210upx;
				height: 210upx;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}

	.order_txt {
		width: 750px;
		background-color: #fff;
		padding: 40upx;
		overflow: hidden;
		margin-top: 20upx;

		.title {
			width: 670upx;
			padding-bottom: 20upx;
			border-bottom: 2upx solid rgba(190, 190, 190, 1);
		}

		.txt_data {
			width: 670upx;
			word-break: break-all;
			margin-top: 25upx;
		}
	}

	.zong {
		width: 750px;
		// height: 118upx;
		background-color: #fff;
		padding: 40upx;
		overflow: hidden;
		margin-top: 20upx;
		color: #333333;
		font-size: 32upx;
		.zprice {
			float: left;
			text{
				color: #FA4F4F;
			}
		}

		.fu {
			float: left;
			margin-left: 250upx;
		}
	}
</style>
