<template>
	<view class="new_demo">
		<!-- 循环订单位置 -->
		<view class="new_list" v-for="(item, index) in list" :key="index">
			<!-- 名称+logo -->
			<view class="new_logo">
				<image :src="
            item.image ? imgBaseUrl + item.image : '/static/my_icon/logo.jpg'
          " mode=""></image>
				<text v-if="item.goods">{{
          item.goods_type == 0 ? item.goods.name : item.goods.package_name
        }}</text>
			</view>

			<!-- 订单详情 -->
			<view class="new_text" @click="detailInfo(item)">
				<view class="new_img">
					<image :src="
              item.image ? imgBaseUrl + item.image : '/static/my_icon/logo.jpg'
            " mode=""></image>
				</view>
				<view class="new_mid">
					<text>订单编号：{{ item.order_number }}</text>
					<view>客户姓名: {{ item.contact }}</view>
					<view>客户电话：{{ item.phone }}</view>
					<view>客户地址：{{ item.province + item.citys + item.district_county + item.address_details }}</view>
				</view>
			</view>

			<!-- 按钮 -->
			<view class="new_btn">
				<text @click="butake(item)">不接受</text>
				<text @click="take(item)">接受</text>
			</view>
		</view>

		<NoData :show="!list.length" />

	</view>
</template>

<script>
	import {
		workerorderApiworkerList,
		technicianUpaateforeman,
	} from "@/components/api/api.js";
	import NoData from "@/components/NoData.vue"
	import {
		imgBaseUrl
	} from "@/components/api/request.js";
	export default {
		data() {
			return {
				list: [],
				imgBaseUrl,
			};
		},
		components: {
			NoData
		},
		mounted() {},
		onLoad() {
			this.getWorkerorderApiworkerList();
		},

		methods: {
			// 獲取新订单
			getWorkerorderApiworkerList() {
				uni.showLoading({
					title:'加载中',
					mask:true
				})
				let worker_id = uni.getStorageSync("WORKERS_ID");
				let token = uni.getStorageSync("HOUSE_TOKEN");
				workerorderApiworkerList({
					worker_id,
					token,
				}).then(({ varList }) => {
					this.list = varList;
				}).finally(() => {
					uni.hideLoading()
				})
			},
			// 接受
			take(item) {
				item.goods = this.$goods(item);
				uni.navigateTo({
					url: "./orderb?info=" + JSON.stringify(item),
				});
			},
			// 不接受
			butake(item) {
				let obj = {
					techniorder_id: item.worker_id,
					order_id: item.order_id,
					state_one: 2, //  1接受 2不接受
				};
				uni.navigateTo({
					url: 'newOrderNotRes?info=' + JSON.stringify(obj)
				})
				
				
				// uni.navigateTo({
				// 	url:"./ordera?info=" + JSON.stringify(item)
				// })
			},
			detailInfo(item) {
				// item.goods = this.$goods(item);
				// delete item.addresid;
				// delete item.goodsid;
				
				// delete item.orderprocess_id;
				// delete item.userid;
				// delete item.worker_id;
				// delete item.workerorder_id;
				
				
				// console.log((item));
				// uni.navigateTo({
				// 	url: "./ordera?info=" + JSON.stringify(item),
				// });
			},
		},
	};
</script>

<style lang="scss">
	.newfrom {
		height: 100%;
		background: $uni-color-hui;
		overflow: hidden;
	}

	.new_demo {
		width: 100%;
		height: 100%;
	}

	.new_list {
		width: 750upx;
		height: 450upx;
		background: $uni-text-color-inverse;
		padding-top: 48upx;
		// padding-bottom: 40upx;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 1);
		overflow: hidden;
		position: relative;
		margin-top: 20upx;
	}

	.new_logo {
		width: 750upx;
		overflow: hidden;

		image {
			width: 38upx;
			height: 38upx;
			// margin-top: 38upx;
			margin-left: 20rpx;
			float: left;
		}

		text {
			font-size: 36upx;
			// margin-top: 34upx;
			float: left;
			margin-left: 16upx;
		}
	}

	.new_text {
		width: 750upx;
		position: absolute;
		top: 134upx;
		left: 20upx;
		overflow: hidden;
	}

	.new_img {
		width: 180upx;
		height: 180upx;
		border-radius: 8px;
		overflow: hidden;
		float: left;
	}

	.new_img image {
		display: block;
		width: 180upx;
		height: 180upx;
	}

	.new_btn {
		position: absolute;
		top: 334upx;
		left: 339upx;
		overflow: hidden;
		margin-top: 30rpx;
	}

	.new_btn text {
		display: block;
		width: 180upx;
		height: 68upx;
		float: left;
		font-size: 32upx;
		font-weight: 500;
		text-align: center;
		line-height: 68upx;
		border-radius: 34upx;
	}

	.new_btn text:nth-of-type(1) {
		border: 1px solid #999999;
		color: rgba(153, 153, 153, 1);
	}

	.new_btn text:nth-of-type(2) {
		background: $uni-color-yellow;
		color: $uni--color-hei;
		margin-left: 30upx;
	}

	.new_mid text {
		display: block;
		font-size: 28upx;
		margin-top: 14upx;
		color: $uni--color-hei;
	}

	.new_mid {
		float: left;
		margin-left: 18upx;
	}

	.new_mid view {
		font-size: 26upx;
		color: #999999;
	}

	.new_mid view:nth-of-type(1) {
		margin-top: 5upx;
	}

	.new_mid view:nth-of-type(2),
	.new_mid view:nth-of-type(3) {
		margin-top: 14upx;
	}
</style>
