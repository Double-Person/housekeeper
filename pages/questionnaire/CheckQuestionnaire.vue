<template>
	<view class="check-questionnaire">
		<view class="answer-list" v-for="(item, index) in list" :key="index">
			<view class="title">{{index + 1}} . {{item.title}}</view>
			<view class="answer">答案 {{item.answer}}</view>
		</view> 
	</view>
</template>

<script>
	export default{
		data() {
			return {
				list: [
					{
						title:'这是问题',
						answer: '这是答案'
					},{
						title:'这是问题',
						answer: '这是答案'
					},{
						title:'这是问题',
						answer: '这是答案'
					},{
						title:'这是问题',
						answer: '这是答案'
					},{
						title:'这是问题',
						answer: '这是答案'
					},{
						title:'这是问题',
						answer: '这是答案'
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.check-questionnaire{
		width: 670rpx;
		margin: 0 auto;
		.answer-list{
			border-bottom: #BFBFBF 1rpx solid;
			margin-bottom: 80rpx;
			font-size: 28rpx;
			font-weight: 400;
			.title{
				font-weight: 500;
				color: #1A1A1A;
				margin: 27rpx 0 43rpx 0;
			}
			.answer{
				color: #FB4F4F;
				margin-bottom: 30rpx;

			}
		}
	}
</style>
