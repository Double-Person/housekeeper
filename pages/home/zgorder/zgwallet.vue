<template>
	<view class="wallet">
		<view class="balance"> 账户余额：{{ allCount }} </view>
		<view class="withdrawal">
			<view class="title">
				提现金额
			</view>
			<input v-model="money" type="number" placeholder="请输入提现金额" placeholder-class="placeholder-class"  class="withdrawal-input"/>
			<view class="line"></view>
		</view>
		<view class="btn" @click="Withdrawal">
			立即提现
		</view>
	</view>
</template>

<script>
	// onNavigationBarButtonTap
	import {goEdit, withdra } from "@/components/api/api.js"
	export default{
		data() {
			return {
				allCount: 0,
				money: null
			}
		},
		// 跳转提现记录
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: './zgwalletRecord'
			})
		},
		created() {
			this._goEdit()
		},
		methods:{
			_goEdit() {
				let worker_id = uni.getStorageSync('WORKERS_ID');
				goEdit({worker_id}).then(res => {
					this.allCount = res.pd.price
				})
			},
			Withdrawal() {			
				let money = Number(this.money)
				if(!money) {
					uni.showToast({
						title: '请输入正确的提现金额',
						icon: 'none'
					})
					return false;
				}
				if( money > this.allCount ) {
					uni.showToast({
						title: '提现金额不能大于账户余额',
						icon: 'none'
					})
					return false;
				}
				console.log(money);
				let obj = {
					 worker_id: uni.getStorageSync('WORKERS_ID'),
					 price: money.toFixed(2)
				}
				withdra(obj).then(res => {
					uni.showToast({
						title: res.mig || '提交失败',
						icon: 'none'
					})
					this.money = null;
					this._goEdit()
				})
				// money.toFixed(2)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.balance {
		width: 100%;
		height: 91rpx;
		line-height: 91rpx;
		background: #FFF1E6;
		padding-left: 21rpx;

		font-size: 28rpx;
		font-weight: 500;
		color: #E93323;
	}
	
	.withdrawal{
		padding: 54rpx 28rpx 117rpx 28rpx;	
		.title{
			height: 28rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #141414;
		}
		.withdrawal-input{
			margin-top: 78rpx;
			height: 2em;
			line-height: 2em;
		}
		.placeholder-class {
			width: 278rpx;
			height: 100%;
			font-size: 40rpx;
			font-weight: 500;
			color: #AEAEAE;
		}
		.line{
			border-bottom: #A8A8A8 1rpx solid;
			margin-top: 41rpx;
		}
	}

	
	.btn{
		width: 683rpx;
		margin: 0 auto;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		background: #FFC721;
		border-radius: 10px;
		
		font-size: 32rpx;
		font-weight: 500;
		color: #FFFFFF;


	}
	
</style>
