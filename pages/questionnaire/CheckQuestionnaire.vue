<template>
	<view class="check-questionnaire">
		<view class="answer-list" v-for="(item, index) in list" :key="index">
			<view class="title">{{index + 1}} . {{item.questionnaire_name}}</view>
			<view class="answer">答案: {{item.problem_answer == 1 && item.questionnaire_one || item.problem_answer == 2 && item.questionnaire_two || item.problem_answer == 3 && item.questionnaire_three}}</view>
		</view> 
	</view>
</template>

<script>
import { questionnaireApiAnswerlist } from "@/components/api/api.js";
	export default{
		data() {
			return {
				order_id: '',
				list: []
			}
		},
		onLoad(opt) {
			this.order_id = opt.order_id;
			this._questionnaireApiAnswerlist()
		},
		methods: {
			_questionnaireApiAnswerlist() {
				questionnaireApiAnswerlist({ order_id: this.order_id }).then(res => {
					this.list = res.varList
				})
			}
		},
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
