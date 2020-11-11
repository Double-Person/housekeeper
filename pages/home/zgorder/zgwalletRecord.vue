<template>
	<view class="wallet-record">
		<view v-for="(item,index) in list" :key="index" class="list-item">
			<view class="time">{{item.time}}</view>
			<view class="money"> - {{item.withdrawal_amount}}</view>
		</view>
	</view>
</template>

<script>
	import {withdraList} from "@/components/api/api.js"
	export default{ 
		data() {
			return {
				list: []
			}
		},
		created() {
			this._withdraList()
		},
		methods:{ 
			_withdraList() {
				let personnel = uni.getStorageSync('WORKERS_ID');
				withdraList({personnel}).then(res => {
					this.list = res.pd
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wallet-record{
		background: #F1F1F1;
		height: 100vh;
		.list-item{
			background-color: #fff;
			height: 135rpx;
			margin-bottom: 1rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 29rpx 0 21rpx;
			.time{
				font-size: 28rpx;
				font-weight: 500;
				color: #404040;

			}
			.money{
				font-size: 30rpx;
				font-weight: 800;
				color: #000000;

			}
		}
	}
	
	
</style>
