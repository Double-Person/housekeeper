<template>
	<view class="wallet-record">
		<view v-for="(item,index) in list" :key="index" class="list-item">
			<view class="time">{{item.time}}</view>
			<view class="money">{{item.money}}</view>
		</view>
	</view>
</template>

<script>
	export default{ 
		data() {
			return {
				list: [
					{time:'2020-10-10 15:15:15', money: -20},
					{time:'2020-10-10 15:15:15', money: -20},
					{time:'2020-10-10 15:15:15', money: -20},
				
				]
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
			padding: 0 21rpx;
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
