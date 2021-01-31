<template>
	<view class="index">
		<!--  -->
		<view class="box_te">
			<view class="tit">
				<view class="imgtit">
					<image :src="imgBaseUrl + passInfo.image" mode=""></image>
					<text v-if="passInfo.goods">{{passInfo.goods_type == 0 ? passInfo.goods.name : passInfo.goods.package_name}}</text>
				</view>

				<view class="com">未通过</view>
			</view>
			<view class="textBox">
				<view class="img">
					<image :src="imgBaseUrl + passInfo.image" mode=""></image>
				</view>
				<view class="time">
					<text v-if="passInfo.goods">{{passInfo.goods_type == 0 ? passInfo.goods.name : passInfo.goods.package_name}}</text>
				</view>
			</view>
		</view>

		<view class="orderxx">
			<view class="titb">
				订单信息
			</view>
			<view class="textT">
				<text>订单编号：{{passInfo.order_number}}</text>
				<text>下单日期：{{passInfo.createtime}}</text>
				<text>客户姓名：{{passInfo.contact}}</text>
				<text>客户电话：{{passInfo.phone}}</text>
				<text>客户地址：{{passInfo.province + passInfo.citys + passInfo.district_county + passInfo.address_details}}</text>
				

			</view>
		</view>
		<!-- 服务项目 -->
		<view class="serve">
			<view class="titb">
				<text class="tit_a">方案详情</text>
				<text class="tit_b" @click="_contractType({contract_type:plantInfo.contract.contract_type, order_id :plantInfo.order_id})">查看合同</text>
			</view>
			<view class="box" v-if="info.programme">
				<view class="text" v-for="(ele, ind) in info.programme" :key="ind">
					<text>{{ele.name}}</text>
					<text>{{ele.numbers + ele.company}}*{{ele.price}}</text>
					<text>¥ {{ ele.numbers * ele.price }}</text>
				</view>
			
			</view>
			
			<view class="bottom">
				<view class="left">
					<text>开工时间：</text>
					<text>{{info.starttime}}</text>
				</view>
				<view class="right">
					<text>完工时间：</text>
					<text>{{info.endtime}}</text>
				</view>
				<view class="youhui">
					<text class="color">总金额：</text>
					<text class="color">{{info.priceafter}}</text>
				</view>
			</view>
			<!--  -->
			<view style="color: red; font-size: 24rpx;padding-bottom: 20rpx;" v-if="info.orderdeposit">
				本合同保修期:{{info.orderdeposit.warranty_time}}月</view>
		</view>

		<!-- 照片 -->
		<view class="order_img">
			<view class="title">
				照片
			</view>
			<view class="img_data">
				<view class="oimg" v-for="(item, index) in info.urllist" :key="index">
					<image :src="imgBaseUrl + item.picture_url"></image>
				</view>
				
			</view>
		</view>
		<view class="order_txt">
			<view class="title">
				未通过的原因
			</view>
			<view class="txt_data">
				{{info.reason}}
			</view>
		</view>
		<!-- 备注 -->
		<view class="order_txt">
			<view class="title">
				整改说明
			</view>
			<view class="txt_data">
				{{info.explaina}}
			</view>
		</view>
		
	</view>
</template>

<script>
	import {imgBaseUrl} from "@/components/api/request.js"
	import { programmeApiList } from "@/components/api/api.js"
	export default {

		data() {
			return {
				imgBaseUrl: imgBaseUrl,
				info: {},
				passInfo: {},
			}
		},
		onLoad(option) {
			this.passInfo = JSON.parse(option.info)
			programmeApiList({order_id : this.passInfo.order_id}).then(res => {
				this.info = res.varList
				console.log(this.info)
			})
		},
		methods: {
			_contractType({contract_type, order_id}) {
				if(contract_type == 1) { // 施工合同
					uni.navigateTo({
						url: '../../constructionContracts/constructionContracts?order_id='+ order_id + '&disabel=disabel'
					})
				}else if(contract_type == 2) {  // 维修合同
					uni.navigateTo({
						url: '../../maintenanceContracts/maintenanceContracts?order_id=' +order_id + '&disabel=disabel'
					})
				}else {
					uni.showToast({
						title: '系统错误',
						icon: 'none'
					})
				}
				
			},
		}
	}
</script>

<style lang="scss" scoped>
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

			text:nth-child(5) {
				padding-bottom: 30upx;
			}
		}
	}

	.serve {
		padding: 0upx 40upx;
		margin-top: 20upx;
		width: 670upx;
		// height: 465upx;
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
				// color: #D4D4D4;
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
			padding: 20upx 0upx 20upx 0upx;
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
			margin-top: 25upx;
			&::after{
				width: 210upx;
				content: '';
			}

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
