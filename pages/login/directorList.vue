<template>
	<view class="director-list">
		<view class="director-item" v-for="(i, index) in list" :key="i.workers_id" :class="{active: active == index}">
			<view class="left" @click="checkWorker(index, i)">
				<image class="header" src="/static/loginImg/qq.png" mode=""></image>
				<view class="user-info">
					<view class="name">{{i.name}}</view>
					<view class="position">{{(i.levels == 0 && '主管') || (i.levels == 1 && '技术员') || (i.levels == 2 && '工长')}}</view>
				</view>
			</view>
			<view class="right" @click="handelInfo(i)">
				查看资料
			</view>
		</view>
		<view class="btn" @click="checkSure">
			确定
		</view>
	</view>
</template>

<script>
		import { workerUserExecutive} from '@/components/api/api.js'
		import {positionObj} from "@/variable/orderCenter.js"
	export default{
		data() {
			return {
				active: -1,
				userInfo: {},
				list: []
			}
		},
		onLoad(option) {
			this.userInfo = JSON.parse(option.userInfo)
			this.getWorkerUserExecutive()
		},
		methods: {
			checkWorker(index, item) {
				this.active = index
				this.userInfo.workers_id = item.workers_id;
				this.userInfo.name = item.name;
			},
			checkSure() {
				uni.navigateTo({
					url:'./login-s?userInfo='+ JSON.stringify(this.userInfo)
				})
				
			},
			// 查看用户资料
			handelInfo(item) {
				uni.navigateTo({
					url:'./detailInfo?info='+ JSON.stringify(item)
				})
			},
			// 查询主管列表
			getWorkerUserExecutive() {
				workerUserExecutive().then(({varList}) => {
					console.log('查询主管列表', varList)
					this.list = varList
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.active{
		// background: #eee;
		background: rgb(255, 200, 35);
	}
	.director-list{
		.director-item{
			padding: 0 30rpx;
			width: 616rpx;
			height: 128rpx;
			border: 1rpx solid #FFD5A3;
			border-radius: 16rpx;
			margin: 0 auto 15rpx auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left{
				display: flex;
				width: 75%;
				.header{
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					margin-right: 22rpx;
				}
				.user-info{
					.name{
						font-size: 32rpx;
						color: #333333;
					}
					.position{
						margin-top: 20rpx;
						font-size: 24rpx;
						font-weight: 400;
						color: #999999;

					}
				}
			}
			.right{
				padding: 11rpx 13rpx;
				height: 46rpx;
				// border: 1rpx solid #FFC10C;
				border: 1rpx solid #191919;
				border-radius: 8rpx;
				font-size: 26rpx;
				font-weight: 500;
				// color: #FFC10C;
				color: #191919;
				line-height: 46rpx;

			}
		}
	
		.btn {
			background: rgb(255, 200, 35);
			width: 715rpx;
			height: 91rpx;
			line-height: 91rpx;
			text-align: center;
			margin: 50rpx auto;
			border-radius: 10rpx;
			
			font-size: 36rpx;
			font-weight: 500;
			color: #FFFFFF;

		}
	
	}
</style>
