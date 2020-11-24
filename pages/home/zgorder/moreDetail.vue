<template>
	<view class="warp">
		<view class="list">

			<view v-for="(item,index) in list" :key="index" class="list-item">



				<!-- 左侧圆圈和线条 -->
				<view class="left-line">
					<view class="circle"></view>
					<view class="line"></view>
				</view>
				<!-- 右侧信息 -->
				<view class="right-content">
					<!-- 顶部状态 -->
					<view class="status">
						<image src="/static/btn-bg.png" mode="" />
						<view class="text">{{ computedType(item.bz) }}</view>
					</view>
					<!-- 详细信息 -->
					<view class="content-detail">
						<!-- 施工说明信息 -->
						<view class="specifications" >
							<view class="img-list" >
								<view class="img-warp" v-for="(itemUrl, indey) in item.urls" :key="indey">
									<image :src="imgBaseUrl + itemUrl.picture_url" mode=""  />
								</view>
							</view>
							<view class="instructions"> 施工说明:{{ item.note }} </view>
							<view class="time"> {{ item.statetime }} </view>
						</view>
						<view class="line"></view>

						<!-- 客户意见 -->
						<view class="specifications">
							<view class="" v-for="(progress, indez) in item.pinion" :key="indez">
								<view class="img-list" >
									<view class="img-warp" v-for="(pro, indey) in progress.image" :key="indey">
										<image :src="imgBaseUrl + pro.picture_url" mode=""  />
									</view>
								</view>
								<view class="instructions"> 客户意见：{{ progress.opinion}}</view>
								<view class="time"> {{ progress.creatertime }} </view>
							</view>
						</view>
					</view>
				</view>

			</view>


		</view>
		
		<view class="btn-qualified" v-if="hege">
			<view class="" @click="isQualified(1)">合格 </view>
			<view class="" @click="isQualified(2)">不合格</view>
		</view>
	</view>
</template>

<script>
	import {
		aftersaleApiConstruction, zhuguanshenhe
	} from "@/components/api/api.js";
	import {
		imgBaseUrl
	} from "@/components/api/request.js";
	export default {
		data() {
			return {
				hege: false,
				commit: false,
				orderquality_id: '',
				imgBaseUrl: imgBaseUrl,
				list: [],
			};
		},
		onLoad(opt) {
			
			this.orderquality_id = opt.orderquality_id;
			this._aftersaleApiConstruction();
			this.commit = false;
		},
		methods: {
			// 合格   不合格
			isQualified(states) {
			// * orderquality_id
			// * states    1合格、2不合格
				if(this.commit) {
					return false
				}
				this.commit = true
				let obj = {
					orderquality_id: this.orderquality_id,
					states,
					worker_id: uni.getStorageSync('WORKERS_ID')
				}
				uni.showLoading({
					title: '加载中'
				})
				zhuguanshenhe(obj).then(res => {
					uni.showToast({ title: res.mig, icon: 'none' })
					this.$toIndex()
				})
			},
		
			async _aftersaleApiConstruction() {
				await uni.showLoading({
					title: '加载中'
				})
				let res = await aftersaleApiConstruction({
					orderquality_id:this.orderquality_id
				});
				await uni.hideLoading()

				this.list = res.varList
				this.hege = res.hege
				let HOUSE_LEVELS = uni.getStorageSync('HOUSE_LEVELS')
				if(HOUSE_LEVELS != 0) {
					this.hege = false
				}
			},
			computedType(type) {
				switch (type * 1) {
					case 0:
						return '开工';
					case 1:
						return '施工进度';
					case 2:
						return '完成';

				}
			}

		}
	};
</script>

<style lang="scss" scoped>
	.btn-qualified{
		display: flex;
		justify-content: space-around;
		margin-bottom: 30rpx;
		view{
			width: 30%;
			padding: 15rpx 0;
			border-radius: 10rpx;
			text-align: center;
			color: #fff;
			background: rgb(249, 201, 36);
		}
	}
	
	.warp {
		width: 100%;

		.list {
			width: 670rpx;
			margin: 0 auto;

			.list-item {
				display: flex;

				&:last-child .line {
					display: none;
				}
			}

			.left-line {
				width: 55rpx;


				.circle {
					width: 24rpx;
					height: 24rpx;
					border-radius: 50%;
					background: rgb(249, 201, 36);
				}

				.line {
					width: 1rpx;
					background-color: RGBA(26, 26, 26, 1);
					height: 100%;
					margin-left: 12rpx;

				}
			}

			.right-content {
				width: 100%;

				.status {
					position: relative;
					height: 55rpx;

					image,.text {
						width: 160rpx;
						overflow: hidden;
						
						height: 55rpx;
					}

					image {
						border: none;
					}

					.text {
						position: absolute;
						left: 0;
						top: 0;
						text-align: center;
						line-height: 55rpx;
						font-size: 32rpx;
						font-weight: 500;
						color: #f9c924;
					}
				}

				.content-detail {
					margin: 22rpx 0 40rpx 22rpx;
					width: 100%;

					.line {
						width: 100%;
						height: 1rpx;
						background: #ffffff;
						border-bottom: 1rpx dotted #bfbfbf;
					}

					.specifications {
						margin-top: 26rpx;

						.img-list {
							width: 100%;
							display: flex;
							justify-content: space-between;
							flex-wrap: wrap;
							.img-warp{
								width: 277rpx;
								height: 277rpx;
								margin-bottom: 36rpx;
							}

							image {
								width: 100%;
								height: 100%;
							}
						}

						.instructions {
							font-size: 28rpx;
							font-weight: 500;
							color: #b3b3b3;
						}

						.time {
							font-size: 24rpx;
							font-weight: 500;
							color: #cccccc;
							text-align: right;
							margin: 29rpx 0 35rpx 0;
						}
					}
				}
			}
		}
	}
</style>
