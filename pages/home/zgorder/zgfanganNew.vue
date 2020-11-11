<template>
	<view class="index">
		<!--  -->
		<view class="box_te">
			<view class="tit">
				<view class="imgtit">
					<image :src="imgBaseUrl + info.image" mode=""></image>
					<text v-if="info.goods">{{info.goods_type == 0 ? info.goods.name : info.goods.package_name}}</text>
				</view>

				<!-- <view class="com">显示状态</view> -->
			</view>
			<view class="textBox">
				<view class="img">
					<image :src="imgBaseUrl + info.image" mode=""></image>
				</view>
				<view class="times">
					<text v-if="info.goods">{{info.goods_type == 0 ? info.goods.name : info.goods.package_name}}</text>
					<!-- <text>工人名称</text> -->
				</view>
			</view>
		</view>
		
		<view class="orderxx">
			<view class="titb">
				订单信息
			</view>
			<view class="textT">
				<text>订单编号：{{info.order_number}}</text>
				<text v-if="info.goods">下单日期：{{info.goods.createtime}}</text>
				<text>客户姓名：{{info.contact}}</text>
				<text>客户电话：{{info.phone}}</text>
				<text>客户地址：{{info.province + info.citys + info.district_county + info.address_details}}</text>
				
			
			</view>
		</view>
		<view class="serve" v-if="false">
			<view class="titb">
				<text class="tit_a">方案详情</text>
				<text class="tit_b" @click="detailAll">全部详情></text>
			</view>
			<view class="box">
				<view class="text">
					<text>水电安装</text>
					<text>1.0m²*40.00</text>
					<text>¥200.00</text>
				</view>
				<view class="text">
					<text>窗台防水</text>
					<text>1个*40.00</text>
					<text>¥1688.00</text>
				</view>
				<view class="text">
					<text>水电安装</text>
					<text>1.0m²*40.00</text>
					<text>¥100.00</text>
				</view>
			</view>
			<view class="bottom">
				<view class="left">
					<text>开工时间：</text>
					<text>2020-07-09</text>
				</view>
				<view class="right">
					<text>完工时间：</text>
					<text>2020-8-19</text>
				</view>
				<view class="youhui">
					<text class="color">总金额：</text>
					<text class="color">1256</text>
				</view>
			</view>
		</view>
		
		<view class="time" @click="selectPersonnel">
			<text> {{info.checkId ? info.checkName : (selectType== 'technology' && '选择技术人员' || selectType== 'master' && '选择工长')}} </text>
			<image src="/static/loginImg/hright.png" mode=""></image>
		</view>
		<view class="btn" @click="detailAll">
			确定
		</view>
	</view>
</template>

<script>
	import {imgBaseUrl } from "@/components/api/request.js"
	import {distribution, workerorderApiJudgeadopt } from "@/components/api/api.js"
	export default {

		data() {
			return {
				imgBaseUrl: imgBaseUrl,
				info: {},
				selectType: ''
			}
		},
		onLoad(option) {
			if(option.userInfo) {
				this.info = JSON.parse(option.userInfo);
				if(this.info.selectType) {
					this.selectType = this.info.selectType
				}
			}
			if(option.selectType) {
				this.selectType = option.selectType
				
			}
		},
		methods: {
			detailAll(){   // worker_id 工人的id（技术员或工人的id）   order_id   订单id  states    0已分配技术人员、3已分配工人
				
				if(!this.info.checkId) {
					return uni.showToast({title: '请选择派单人员', icon: 'none'})
				}
				let obj = {
					worker_id: this.info.checkId,
					order_id: this.info.order_id,
					states: this.info.selectType == 'technology' ? 0 : 3  // 
				}
				
			 	distribution(obj).then(res => {
					uni.showToast({
						title: res.mig,
						icon: 'none'
					});
					this.$toIndex()
				})
			},
			// 选择技术人员
			selectPersonnel() {
				if(this.selectType == 'technology') {
					uni.navigateTo({ // this.selectType
						url: '../selectPersonnel?type=technology&path=/pages/home/zgorder/zgfanganNew&userInfo=' + JSON.stringify(this.info)
					})
				}
				if(this.selectType == 'master') {
					uni.navigateTo({
						url: '../selectPersonnel?type=master&path=/pages/home/zgorder/zgfanganNew&userInfo=' + JSON.stringify(this.info)
					})
				}
				
	
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
		height: 100vh;
		background-color: #F2F2F2;
		font-family: SourceHanSansCN;
	}
	.time{
		margin-top:20upx;
		padding: 30upx 40upx;
		width:670upx;
		height:40upx;
		background:rgba(255,255,255,1);
		display: flex;
		justify-content: flex-end;
		text{
			font-size:28upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(170,170,170,1);
		}
		image{
			display: block;
			width:34upx;
			height: 34upx;
			margin-left: auto;
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
		border-radius: 8upx;
		margin-top: 50upx;
		margin-left: 15upx;
	}
	.box_te {
		border-top: 19upx solid #f2f2f2;
		padding: 40upx 20upx 0upx 20upx;
		height: 350upx;
		background: white;

		.tit {
			display: flex;
			// justify-content: flex-end;
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

			.times {
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

			// text:nth-child(3) {
			// 	margin-top: 60upx;
			// }
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
