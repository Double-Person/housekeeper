<template>
	<view class="index">
		<!-- 头部导航 -->
		<!--  -->
		<view class="bigbox">
			<textarea rows="3" cols="20" maxlength="20" class="textareas" v-model="note" placeholder="请输入不通过原因(最多20个字)"></textarea>
		</view>
		<!-- START: 0, // 待开工  CONSTRUCTION: 1, // 施工中 REVIEW: 2, // 审核中 THROUGH: 3, // 已通过 NOT_THROUGH: 4, // 未通过 QUALITY: 5, // 保修中-->
		<button type="default" class="button" @click="_updatestate">提交</button>
	</view>
</template>

<script>
		import {updatestate, upLoadFile} from "@/components/api/api.js"
		import {imgBaseUrl} from "@/components/api/request.js"
		import { workersOrderCenterAllStatus } from '@/variable/orderCenter.js'
	export default {
		data (){
			return{
				commit: false,
				imgBaseUrl: imgBaseUrl,
				TYPES: workersOrderCenterAllStatus,
				note: '',
				parmas: {},
				imgList: [
					// { url: '' },
					]
				
			}
		},
		onLoad(option) {
			this.parmas = JSON.parse(option.info)
			
		},
		methods:{	
			
			
			_updatestate(order_id) {
				
				
				if(this.commit) {
					return;
				}
				this.commit = true;
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				let obj = {
					...this.parmas,
					bzs: this.note,
				}
				
				
			
				updatestate(obj).then(res => {
					uni.showToast({
						title: res.mig || '提交失败',
						icon: 'none'
					})
					this.$toIndex()
				}).finally(() => uni.hideLoading())
			},
			
		
		}
	}
</script>

<style lang="scss" scoped>
	.pic-list{
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			.pic-item{
				width: 33%;
			}
		}
	
	.index{
		width:750rpx;
		height:100vh;
		background-color: #F2F2F2;
	}
	.bigbox{
		padding: 30upx;
		background: white;
	}	
	.textareas{
		margin-top: 20upx;
		text-indent:2em;
		background-color: #F2F2F2;
		width: 690upx;
		height: 360upx;
	}
	.button{
		width:715upx;
		height:91upx;
		background:linear-gradient(150deg,rgba(255,200,35,1),rgba(255,193,12,1));
		box-shadow:0upx 0upx 6upx 0upx rgba(208,139,20,0.25);
		border-radius:8upx;
		font-size:36upx;
		font-family:SourceHanSansCN;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:91upx;
		text-align: center;
		position: fixed;
		bottom:76upx;
		left:14upx;
	}
	
</style>
