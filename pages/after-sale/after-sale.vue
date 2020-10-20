<template>
	
	<view class="newfrom">
		<Topsearch @searchValue='searchValue' placeholder="搜索订单" />
		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{active: index === activeIndex}" @click="clickTitle(index, item.value)">{{item.label}}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-body" :lower-threshold="100" @scrolltolower="scrolltolower">
			<view class="padding-bottom150">
				<fromDeatil msg="msg" :item="item" v-for="(item,index) in titleList[activeIndex].list" :key="index" :flag="flag" 
				@getDetail="getDetail($event)"></fromDeatil>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import fromDeatil from "../../components/fromAll.vue"
	import Topsearch from "../../components/TopSearch.vue"
	import {
		workersAfterSale
	} from '../../variable/orderCenter.js'
	export default {
		components:{
			fromDeatil,
			Topsearch
		},
		data() {
			return {
				flag: 1,
				activeIndex: 0,
				titleList: [{
						value: workersAfterSale.PROCESSED,
						label: '待处理',
						list: ['待处理 1', '待处理 2', '待处理 3', '待处理 4', '待处理 5']
					},
					{
						value: workersAfterSale.PROCESSING,
						label: '处理中',
						list: ['处理中 1', '处理中 2', '处理中 3']
					},
					{
						value: workersAfterSale.COMPLETED,
						label: '已完成',
						list: ['已完成 1', '已完成 2', '已完成 3']
					}
				],
			}
		},

		methods: {
			searchValue(val) {
			
			},
			scrolltolower(eve) {
				console.log(eve);
			},
			clickTitle(index, value) {
				this.activeIndex = index
				if(value === this.titleList[0].value) {
					this.flag = 1
				}else if(value === this.titleList[1].value) {
					this.flag = 2
				}else {
					this.flag = -1
				}
			},
		
			getDetail(event){
				let act = 0
				if(act==0){
					uni.navigateTo({
						url:'kaigong'
					})
				}else if(act==1){
					uni.navigateTo({
						url:'shouhouxiangqing'
					})
				}else{
					uni.navigateTo({
						url:'shouhouchuli'
					})
				}
			},
			
			// 施工跳转
			sgDetail(){
			 uni.navigateTo({
			 	url:"./sgDetail"
			 })
			},
			
		},
		
	}
</script>

<style lang="scss" scoped>
	.sou {
		width: 100%;
		height: 130upx;
		background-image: url(../../static/order_icon/suo_big.png);
		overflow: hidden;
	}
	.sou_ipt {
		width: 671upx;
		height: 71upx;
		overflow: hidden;
		margin: 0 auto;
		margin-top: 28upx;
		border-radius: 50upx;
		position: relative;
	}

	input {
		width: 100%;
		height: 71upx;
		background-color: #fff;
		padding-left: 40upx;
		position: absolute;
	}

	.order_txt {
		position: absolute;
		z-index: 2;
		overflow: hidden;
		margin-left: 254upx;
		margin-top: 19upx;
	}

	.sou_icon {
		width: 34upx;
		height: 35upx;
		float: left;
	}

	.sou_icon image {
		width: 100%;
		height: 100%;
	}
	.order_txt text {
		display: block;
		float: left;
		font-size: 28upx;
		color: #B2B2B2;
		margin-left: 19upx;
		margin-top: 2upx;
	}
	.top {
		padding: 0 20upx;
		width: 710upx;
		height: 110upx;
		display: flex;
		flex-wrap: nowrap;
		overflow: hidden;
		// border: 1px solid red;
		display: flex;
		justify-content: space-between;
		background:rgba(255,255,255,1);
	}
	
	.top view {
		height: 61upx;
		float: left;
		// border: 1px solid red;
		margin-left: 67upx;
		font-size: 32upx;
		margin-top: 21upx;
		line-height: 61upx;
	}
	
	.top view:nth-of-type(1) {
		margin-left: 9upx;
	}
	.active {
		border-bottom: 6upx solid #FFC823;
		font-weight: 700;
	}
</style>
