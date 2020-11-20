<template>
	<view>
		<!-- tab栏 -->
		<view class="new_demo">
			<!-- 循环订单位置 -->
			<view class="new_list" @click="getDetail">
				<!-- 名称+logo -->
				<view class="new_logo">
					<image :src="imgBaseUrl + item.image" mode=""></image>
					<text v-if="item.goods">{{item.goods_type == 0 ? item.goods.name : item.goods.package_name}}</text>
				</view>
				<view class="shen">
					{{msg}}
				</view>
				<!-- 订单详情 -->
				<view class="new_text">
					<view class="new_img">
						<image :src="imgBaseUrl + item.image" mode=""></image>
					</view>
					<view class="new_mid">
						<text>项目编号: {{item.order_number}}</text>
						<view>客户姓名: {{item.contact}}</view>
						<view>客户电话：{{item.phone}}</view>
						<view>客户地址：{{item.province + item.citys + item.district_county + item.address_details}}</view>
						<view v-if="item.statebz" class="statebz">{{item.statebz}}</view>
					</view>
				</view>
			</view>
			<slot>
				
				<!-- 每个组件下方的不能文字按钮（通过，不通过等） -->
			</slot>
			<view class="btn" v-show="flag==1">
				<view class="left">上传进度</view>
				<view class="right">完成</view>
			</view>
			<view class="btna" v-show="flag==2">
				<view class="right">开工</view>
			</view>
			<view class="btna" v-show="flag==3">
				<view class="right">处理反馈</view>
			</view>
			<view class="btna" v-show="flag==4">
				<view class="right">完成</view>
			</view>
			<view class="btna" v-show="flag==5">
				<view class="right" @click="questionnaireSurvey">问卷调查</view>
			</view>
			<view class="btna" v-show="flag==6" @click="shezhifa">
				<view class="right">设置方案</view>
			</view>
			<view class="btn" v-show="flag==7">
				<view class="left" @click="butongyi">不同意</view>
				<view class="right">同意</view>
			</view>
			<view class="btn" v-show="flag==8">
				<view class="left" @click="butongguo">不通过</view>
				<view class="right" @click="tongyi">通过</view>
			</view>
		</view>
	</view>
</template>

<script>
import {imgBaseUrl} from "@/components/api/request.js"
	export default {
		props: {
			msg: {
				type: String,
				default: ""
			},
			flag:{
				type:Number,
				default:null
			},
			item: {
				
			},
			hasChildItem: {}
			
		},
		data() {
			return {
				imgBaseUrl,
				info: {},
				hasChildInfo: {}
			};
		},
	
		mounted() {
			this.info = this.item
			this.hasChildInfo = this.hasChildItem
			console.log('this.info', this.info, this.hasChildItem)
		},
		methods:{
			getDetail(item){
				this.$emit('getDetail', this.hasChildInfo ? this.hasChildInfo : this.info)
			},
			shezhifa(){
				this.$emit('shezhifa', this.hasChildInfo ? this.hasChildInfo : this.info)
			},
			butongyi(){
				this.$emit('butongyi', this.hasChildInfo ? this.hasChildInfo : this.info)
			},
			butongguo(){
				this.$emit('butongguo', this.hasChildInfo ? this.hasChildInfo : this.info)
			},
			tongyi(){
				this.$emit('tongyi', this.hasChildInfo ? this.hasChildInfo : this.info)
			},
			// 問卷調查
			questionnaireSurvey() {
				uni.navigateTo({
					// url: '/pages/questionnaire/QuestionnaireSurvey?info=' + JSON.stringify(this.info)
					url: '/pages/questionnaire/CheckQuestionnaire'
				})
			}
		}
	}
</script>

<style lang="scss">
	
	.statebz{
		color: $uni-color-error;
	}
	.btn{
		padding: 20upx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background: white;
		.left{
			margin-left: auto;
			width:180upx;
			height:68upx;
			border:1upx solid rgba(191,191,191,1);
			border-radius:34upx;
			font-size:32upx;
			font-family:SourceHanSansCN;
			font-weight:400;
			color:rgba(153,153,153,1);
			line-height:68upx;
			text-align: center;
		}
		.right{
			margin-left: auto;
			margin-left:30upx;
			width:180upx;
			height:68upx;
			background:linear-gradient(150deg,rgba(255,200,35,1),rgba(255,193,12,1));
			border-radius:34upx;
			font-size:32upx;
			font-family:SourceHanSansCN;
			font-weight:400;
			color:rgba(26,26,26,1);
			line-height: 68upx;
			text-align: center;
		}
	}
	.btna{
		padding: 20upx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background: white;
		.right{
			margin-left: auto;
			margin-left:30upx;
			width:180upx;
			height:68upx;
			background:linear-gradient(150deg,rgba(255,200,35,1),rgba(255,193,12,1));
			border-radius:34upx;
			font-size:32upx;
			font-family:SourceHanSansCN;
			font-weight:400;
			color:rgba(26,26,26,1);
			line-height: 68upx;
			text-align: center;
		}
	}
</style>
