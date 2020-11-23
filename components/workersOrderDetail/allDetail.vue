<template>
	<view class="index">
		<!--  -->
		<view class="box_te">
			<view class="tit">
				<view class="imgtit">
					<image :src="imgBaseUrl + orderInfo.image" mode=""></image>
					<text v-if="orderInfo.goods">{{orderInfo.goods_type == 0 ? orderInfo.goods.name : orderInfo.goods.package_name}}</text>
				</view>

				<view class="com">{{ showMsg(orderInfo.mastertype) }}</view>
			</view>
			<view class="textBox">
				<view class="img">
					<image :src="imgBaseUrl + orderInfo.image" mode=""></image>
				</view>
				<view class="time">
					<text v-if="orderInfo.goods">{{orderInfo.goods_type == 0 ? orderInfo.goods.name : orderInfo.goods.package_name}}</text>
				</view>
			</view>
		</view>

		<view class="orderxx">
			<view class="titb fl-between">
				<view class="">订单信息</view>
				<view class="progress" @click="progress">查看施工进度</view>
			</view>
			<view class="textT">
				<text>订单编号：{{ orderInfo.order_number }}</text>
				<text>客户姓名：{{ orderInfo.contact }}</text>
				<text>客户电话：{{ orderInfo.phone }}</text>
				<text>客户地址：{{orderInfo.province + orderInfo.citys + orderInfo.district_county + orderInfo.address_details}}</text>
			</view>
		</view>
		<!-- 服务项目 -->
		<view class="serve" v-if="plantInfo.programme">
			<view class="titb">
				<text class="tit_a">方案详情</text>
				<text class="tit_b" @click="detailAll">全部详情></text>
			</view>
			<view class="box">
				<view class="text" v-for="(item, index) in plantInfo.programme" :key="index">
					<text>{{item.name}}</text>
					<text>{{item.price + item.company}}*{{item.numbers}}</text>
					<text>¥ {{ item.numbers * item.price }} </text>
				</view>
				
			</view>
			<view class="bottom">
				<view class="left">
					<text>开工时间：</text>
					<text>{{ plantInfo.starttime }}</text>
				</view>
				<view class="right">
					<text>完工时间：</text>
					<text>{{ plantInfo.endtime }}</text>
				</view>
				<view class="youhui">
					<text class="color">总金额：</text>
					<text class="color">{{ plantInfo.priceafter }}</text>
				</view>
			</view>
			<view style="color: red; font-size: 24rpx;padding-bottom: 20rpx;" v-if="plantInfo.orderdeposit.qualitydeposit_id">
				质保金：{{plantInfo.orderdeposit.warranty_money}}元{{plantInfo.orderdeposit.warranty_time}}月</view>
		</view>

		<!-- 照片 -->
		<view class="order_img">
			<view class="title">
				照片
			</view>
			<view class="img_data">
				<view class="oimg" v-for="(item, index) in plantInfo.urllist" :key="index">
					<image :src="imgBaseUrl + item.picture_url"></image>
				</view>
				
			</view>
		</view>
		<!-- 备注 -->
		<view class="order_txt">
			<view class="title"> 备注 </view>
			<view class="txt_data">
				{{ plantInfo.remarks }}
			</view>
		</view>
		
		<!-- 不通过原因 -->
		<view class="order_txt" v-if="plantInfo.butongguo">
			<view class="title"> 原因 </view>
			<view class="txt_data">
				{{ plantInfo.butongguo }}
			</view>
		</view>
		
	</view>
</template>

<script>
import { programmeApiList } from "@/components/api/api.js"
import {imgBaseUrl} from "@/components/api/request.js"
import { showMsg } from "@/utils/showMsg.js"
	export default {

		data() {
			return {
				showMsg: showMsg,
				imgBaseUrl: imgBaseUrl,
				orderInfo: {},
				plantInfo: {}
			}
		},
		onLoad(opt) {
			this.orderInfo = JSON.parse(opt.info)
			this._programmeApiList()
		},
		methods: {
			detailAll(){
				
			 	uni.navigateTo({
			 		 url: '/components/plant/ViewSettingPlant?order_id=' + this.orderInfo.order_id
			 	})
			},
			progress() {
				uni.navigateTo({
					url: './moreDetail?order_id=' + this.orderInfo.order_id,
				})
			},

			_programmeApiList() {
				uni.showLoading({ title: '加载中', mask: true });
				programmeApiList( {order_id: this.orderInfo.order_id} ).then(res => {
					this.plantInfo = res.varList
				}).finally(()=> uni.hideLoading())
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.fl-between {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.progress {
			color: #D4D4D4;
		}
	}
	.index {
		width: 750upx;
		background-color: #F2F2F2;
		font-family: SourceHanSansCN;
	}

	.box_te {
		border-top: 19upx solid #f2f2f2;
		padding: 40upx 0upx 0upx 20upx;
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
		padding-bottom: 20rpx;

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
				font-size: 28upx;
				font-weight: 400;
				color: rgba(153, 153, 153, 1);
				line-height: 50upx;
			}
		}
	}

	.serve {
		padding: 0upx 40upx;
		margin-top: 20upx;
		width: 670upx;
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
			padding: 20upx 0upx;
			font-size: 24upx;
			color: #191919;
			position: relative;

			.right {
				margin-top: 18upx;
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

		.title {
			width: 670upx;
			padding-bottom: 20upx;
			border-bottom: 2upx solid rgba(190, 190, 190, 1);
			font-size: 28upx;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		.img_data {
			width: 670upx;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			margin-top: 25upx;
			&::after{
				width: 210upx;
				content: '';
			}

			.oimg {
				width: 210upx;
				height: 210upx;
				overflow: hidden;
				margin-bottom: 20rpx;

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
			font-size: 28upx;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
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
