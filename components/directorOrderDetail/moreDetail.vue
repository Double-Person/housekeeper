<template>
	<view class="warp">
		<view class="list">
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
					<view class="text">检----测</view>
				</view>
				<!-- 详细信息 -->
				<view class="content-detail">
					<!-- 施工说明信息 -->
					<view class="specifications">
						<view class="img-list">
							<image src="/static/noData.png" mode="" v-for="item in 4" :key="item" />
						</view>
						<view class="instructions"> 施工说明XXXXXXXXXXXXXXXXXX </view>
						<view class="time"> 2019-12-09 14:19 </view>
					</view>
					<view class="line"></view>

					<!-- 客户意见 -->
					<view class="specifications">
						<view class="img-list">
							<image src="/static/noData.png" mode="" v-for="item in 4" :key="item" />
						</view>
						<view class="instructions"> 客户意见XXXXXXXXXXXXXXXXXX </view>
						<view class="time"> 2019-12-09 14:19 </view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				list: [{
					static: ""
				}],
			};
		},
		
	};
</script>

<style lang="scss" scoped>
	.warp {
		width: 100%;

		.list {
			width: 670rpx;
			margin: 0 auto;
			display: flex;

			.left-line {
				width: 55rpx;

				.circle {
					width: 24rpx;
					height: 24rpx;
					border-radius: 50%;
					background: rgb(249, 201, 36);
				}
			}

			.right-content {
				width: 100%;

				.status {
					position: relative;
					height: 55rpx;

					image,
					.text {
						width: 129rpx;
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

							image {
								width: 277rpx;
								height: 277rpx;
								margin-bottom: 36rpx;
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
