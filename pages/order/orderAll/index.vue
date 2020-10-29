<template>
	<scroll-view :scroll-y="true" class="scroll-view-tab-list-body" :lower-threshold="100" >
		<view class="padding-bottom150">
			<!-- :flag="8" -->
			<fromDeatil msg="" :item="item" v-for="(item, index) in list" :key="index">
				<!-- START: 0, // 待开工  CONSTRUCTION: 1, // 施工中 REVIEW: 2, // 审核中 THROUGH: 3, // 已通过 NOT_THROUGH: 4, // 未通过 QUALITY: 5, // 质保中-->
				
				  <!-- 待开工 -->
				<view class="slot-warp" v-if="item.mastertype == TYPES.START">
					<view class="slot-active" @click="start(item.order_id, TYPES.START)">开工</view>
				</view>
				<!-- 施工中 -->
				<view class="slot-warp" v-if="item.mastertype == TYPES.CONSTRUCTION">
					<view class="slot-not-active" @click="start(item.order_id, TYPES.START)">添加进度</view>
					<view class="slot-active">完成</view>
				</view>
			</fromDeatil>
			<NoData :show="list.length === 0"></NoData>
		</view>
	</scroll-view>
</template>

<script>
	import NoData from "@/components/NoData.vue"
	import fromDeatil from "@/components/fromAll.vue";
	import { workersOrderCenterAllStatus } from '@/variable/orderCenter.js'

	export default {
		props:{
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				TYPES: workersOrderCenterAllStatus
			}
		}, 
		components: {
			fromDeatil,
			NoData
		},
	
		methods: {
			
			getDetail() {},
			start(order_id, types) {
				uni.navigateTo({
					url: 'Start?order_id='+ order_id + '&types=' + types
				})
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "~@/common/style/tabList.scss";
</style>
