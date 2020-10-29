<template>
	
	<view class="newfrom">
		<Topsearch @searchValue='searchValue' placeholder="搜索订单" />
		<!--  -->
		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{active: index === activeIndex}" @click="clickTitle(index, item.value)">{{item.label}}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-body" :lower-threshold="100" @scrolltolower="scrolltolower">
			<view class="padding-bottom150">
				<fromDeatil msg="msg" :item="item" v-for="(item,index) in titleList[activeIndex].list" :key="index" @getDetail="getDetail($event)"></fromDeatil>
				<NoData show></NoData>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import NoData from "@/components/NoData.vue"
	import fromDeatil from "../../components/fromAll.vue"
	import Topsearch from "../../components/TopSearch.vue"
	import {
		workersAfterProcessing
	} from '../../variable/orderCenter.js'
	
	export default {
		components:{
			fromDeatil,
			Topsearch,
			NoData
		},
		data() {
			return {
				activeIndex: 0,
				titleList: [{
						value: workersAfterProcessing.ALL,
						label: '退款',
						list: []
					},
					{
						value: workersAfterProcessing.ONGOING,
						label: '质量问题',
						list: []
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
			},
			getDetail(event){
				
				uni.navigateTo({
					url:'chulifankui'
				})
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
		padding: 0 110upx;
		width: 530upx;
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
