<template>
	<view class="newfrom">
		<TopSearch placeholder="搜索订单"></TopSearch>
		
		
		
		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{active: index === activeIndex}" @click="clickTitle(index, item.value)">{{item.label}}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-tab-list-body" :lower-threshold="100" @scrolltolower="scrolltolower">
			<view class="padding-bottom150">
				<fromDeatil msg="msg" :item="item" v-for="(item,index) in titleList[activeIndex].list" :key="index"
				 @getDetail="getDetail(act)" @butongguo="butongguo" @tongyi="tongyi"></fromDeatil>
				 <!-- 运行中 -->
				 <view v-if="technicianOrderStatus.ONGOING === currentTabBar">
				 	<fromDeatil msg="msg" :item="item" v-for="(item,index) in titleList[activeIndex].list" :key="index"
				 	 @shezhifa="Aszfa" :flag="6"></fromDeatil>
				 </view>
				 <!-- 已完成 -->
				 <view v-if="technicianOrderStatus.COMPLETED === currentTabBar">
				 	<fromDeatil msg="msg" :item="item" v-for="(item,index) in titleList[activeIndex].list" :key="index"
				 	 @getDetail="yiwancheng"></fromDeatil>
				 </view>
				 <!-- 已取消 -->
				 <view v-if="technicianOrderStatus.CANCELLED === currentTabBar">
				 	<fromDeatil msg="msg" :item="item" v-for="(item,index) in titleList[activeIndex].list" :key="index"
				 	 @getDetail="yiquxiao"></fromDeatil>
				 </view>
				 
			</view>
		</scroll-view>
		
		
		
		
	</view>
</template>

<script>
	import fromDeatil from "../../../components/fromAll.vue"
	import TopSearch from "../../../components/TopSearch.vue"
	import {technicianOrderStatus} from '../../../variable/orderCenter.js'
	
	export default {
		data() {
			return {
				currentTabBar: -1,
				activeIndex: 0,
				technicianOrderStatus: technicianOrderStatus,
				titleList: [{
						value: technicianOrderStatus.ALL,
						label: '全部',
						list: ['全部 1', '全部 2', '全部 3', '全部 4', '全部 5']
					},
					{
						value: technicianOrderStatus.ONGOING,
						label: '进行中',
						list: ['进行中 1', '进行中 2', '进行中 3']
					},
					{
						value: technicianOrderStatus.COMPLETED,
						label: '已完成',
						list: ['已完成 1', '已完成 2', '已完成 3']
					},
					{
						value: technicianOrderStatus.CANCELLED,
						label: '已取消',
						list: ['已取消 1', '已取消 2', '已取消 3']
					}
				],
			}
		},
		components: {
			fromDeatil,
			TopSearch
		},
		created() {
			this.currentTabBar = this.titleList && this.titleList[0].value;
		},
		methods: {
			clickTitle(index, value) {
				this.activeIndex = index;
				this.currentTabBar = value
			},
			scrolltolower(e) {
				
			},
			// 施工跳转
			getDetail(){
				uni.navigateTo({
					url:"./sgdetailAll"
				})
			},
			
			yiwancheng(){
				uni.navigateTo({
					url:'dyixiangqing'
				})
			},
			yiquxiao(){
				uni.navigateTo({
					url:'dmeixiangqing'
				})
			},
			Aszfa(){
				uni.navigateTo({
					url:'shezhifangan'
				})
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/style/tabList.scss';
	
	.top{
		padding: 0 30rpx;
		width: 100%;
	}

	
</style>
