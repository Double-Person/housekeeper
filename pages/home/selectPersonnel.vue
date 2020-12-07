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
	import {
		workerUserExecutive,
		technician,
		workerWorker
	} from '@/components/api/api.js'
	import {
		positionObj
	} from "@/variable/orderCenter.js"
	export default {
		data() {
			return {
				active: -1,
				userInfo: {},
				list: [],
				type: '',
				toPath: '' // 确定后跳转的地址
			}
		},
		onLoad(option) {
			console.log(option.type == 'technology')
			if (option.userInfo) {
				this.userInfo = JSON.parse(option.userInfo);
				
				
				// this.active = 0;
				// this.userInfo.checkId = this.userInfo.workers_id;
				// this.userInfo.checkName = this.userInfo.name;
				// this.userInfo.selectType = this.userInfo.type;
			}

			if (option.type == 'technology') { // 技术
				this.type = 'technology';
				this._technician()
			}
			if (option.type == 'master') { //工长
				this.type = 'master';
				this._workerWorker()
			}
			if (option.type == 'director') { // 主管
				this.type = 'director';
				this.getWorkerUserExecutive()
			}

			this.toPath = option.path
			console.log(this.toPath)




		},
		methods: {
			checkWorker(index, item) {
				this.active = index
				this.userInfo.checkId = item.workers_id;
				this.userInfo.checkName = item.name;
				this.userInfo.selectType = this.type;
			},
			checkSure() {
			
				if (this.toPath) {
					uni.navigateTo({
						url: `${this.toPath}?userInfo=${JSON.stringify(this.userInfo)}`
					})
				}
				// uni.navigateTo({
				// 	url:'./login-s?userInfo='+ JSON.stringify(this.userInfo)
				// })

			},
			// 查看用户资料
			handelInfo(item) {
				uni.navigateTo({
					url: '/pages/login/detailInfo?info=' + JSON.stringify(item)
				})
			},
			// 查询主管列表
			getWorkerUserExecutive() {
				workerUserExecutive().then(({
					varList
				}) => {
					this.list = varList;
					console.log(this.list)

					if (this.list.length) {
						let item = this.list[0]
						this.active = 0
						this.userInfo.checkId = item.workers_id;
						this.userInfo.checkName = item.name;
						this.userInfo.selectType = this.type;
					}


				})
			},
			// 查询主管下的工人
			_workerWorker() {
				uni.showLoading({
					title: '加载中',mask:true
				});
				let parent_id = uni.getStorageSync('WORKERS_ID')
				console.log(parent_id)
				workerWorker({
					parent_id
				}).then(res => {
					this.list = res.varList;
					
					if (this.list.length) {
						let item = this.list[0]
						this.active = 0
						this.userInfo.checkId = item.workers_id;
						this.userInfo.checkName = item.name;
						this.userInfo.selectType = this.type;
					}
				}).finally(() => {
					uni.hideLoading();
				})
			},
			// 查询主管下的技术员列表
			_technician() {
				uni.showLoading({
					title: '加载中',
					mask:true
				});
				let parent_id = uni.getStorageSync('WORKERS_ID')
				console.log(parent_id)
				technician({
					parent_id
				}).then(res => {
					this.list = res.varList;
					
					if (this.list.length) {
						let item = this.list[0]
						this.active = 0
						this.userInfo.checkId = item.workers_id;
						this.userInfo.checkName = item.name;
						this.userInfo.selectType = this.type;
					}
				}).finally(() => {
					uni.hideLoading();
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.active {
		background: #eee;
	}

	.director-list {
		.director-item {
			padding: 0 30rpx;
			width: 616rpx;
			height: 128rpx;
			border: 1rpx solid #FFD5A3;
			border-radius: 16rpx;
			margin: 0 auto 15rpx auto;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.left {
				display: flex;
				width: 75%;

				.header {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					margin-right: 22rpx;
				}

				.user-info {
					.name {
						font-size: 32rpx;
						color: #333333;
					}

					.position {
						margin-top: 20rpx;
						font-size: 24rpx;
						font-weight: 400;
						color: #999999;

					}
				}
			}

			.right {
				padding: 11rpx 13rpx;
				height: 46rpx;
				border: 1rpx solid #FFC10C;
				border-radius: 8rpx;
				font-size: 26rpx;
				font-weight: 500;
				color: #FFC10C;
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
