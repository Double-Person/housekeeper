<template>
	<view class="questionnaire-survey">
		<view class="problem-list" v-for="(item, index) in list">
			<view class="title">{{index + 1}} . {{item.title}}</view>
			<view class="fl question-list">
				<radio-group @change="radioChange" class="fl radio-group">
					<label class="uni-list-cell uni-list-cell-pd fl" v-for="(ele, indey) in item.questionList" :key="ele.value">
						<view>
							<radio :value="ele.value + ''" :checked="indey === current" />
						</view>
						<view class="question-label">{{ele.label}}</view>
					</label>
				</radio-group>
			</view>
		</view>
		<view class="btn">
			提交
		</view>
	</view>
</template>

<script>
	// 问卷调查
	export default {
		data() {
			return {
				current: -1,
				list: [{
						title: '问题xxxxxxx',
						questionList: [{
								value: 0,
								label: '答案一',
							},
							{
								value: 1,
								label: '答案二',
							},
							{
								value: 2,
								label: '答案三',
							}
						]
					},
					{
						title: '问题xxxxxxx',
						questionList: [{
								value: 0,
								label: '答案一',
							},
							{
								value: 1,
								label: '答案二',
							},
							{
								value: 2,
								label: '答案三',
							}
						]
					}, {
						title: '问题xxxxxxx',
						questionList: [{
								value: 0,
								label: '答案一',
							},
							{
								value: 1,
								label: '答案二',
							},
							{
								value: 2,
								label: '答案三',
							}
						]
					}, {
						title: '问题xxxxxxx',
						questionList: [{
								value: 0,
								label: '答案一',
							},
							{
								value: 1,
								label: '答案二',
							},
							{
								value: 2,
								label: '答案三',
							}
						]
					}
				]
			};
		},
		methods: {
			radioChange(val) {
				console.log(val)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.fl{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	/deep/ .uni-radio-input-checked{
		background: #ffc10d !important;
		border-color: #ffc10d !important;
		&::before{
			color: #191919 !important;
		}
	}
	/deep/ .uni-radio-input{
		width: 34rpx !important;
		height: 34rpx !important;
	}
	.questionnaire-survey {
		width: 670rpx;
		margin: 0 auto;
		.problem-list{
			padding-bottom: 25rpx;
			border-bottom: #BFBFBF 1rpx solid;
			margin-bottom: 80rpx;
			.title{
				font-size: 28rpx;
				font-weight: 500;
				color: #1A1A1A;
				line-height: 36prx;
				margin: 27rpx 0 43rpx 0;

			}
			.question-list{
				.radio-group{
					width: 100%;
					.question-label{
						font-size: 28rpx;
						color: #1A1A1A;
					}
				}
			}
		}
		.btn{
			background: #ffc10d;
			width: 100%;
			height: 91rpx;
			border-radius: 8rpx;
			

			font-size: 36rpx;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 91rpx;
			text-align: center;

		}
	}
</style>
