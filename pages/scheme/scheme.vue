<template>
	<view class="newfrom">
		<Topsearch @searchValue='searchValue' placeholder="搜索订单" />
		<!--  -->
		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{active: index === activeIndex}" @click="clickTitle(index, item.value)">{{item.label}}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-body" :lower-threshold="100" @scrolltolower="scrolltolower">
			<view class="padding-bottom150">
				<fromDeatil msg="msg" :item="item" v-for="(item,index) in titleList[activeIndex].list" :key="index" @getDetail="getDetail(act)"></fromDeatil>
				<NoData :show="true"></NoData>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import fromDeatil from "@/components/fromAll.vue"
	import Topsearch from "@/components/TopSearch.vue"
	import NoData from "@/components/NoData.vue"
	import {
		workersPlant
	} from '../../variable/orderCenter.js'
	export default {
		data() {
			return {
				activeIndex: 0,
				titleList: [{
						value: workersPlant.ALL,
						label: '全部',
						list: []
					},
					{
						value: workersPlant.ONGOING,
						label: '进行中',
						list: []
					},
					{
						value: workersPlant.COMPLETED,
						label: '已完成',
						list: []
					}
				],
			}
		},
		components: {
			fromDeatil,
			Topsearch,
			NoData
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
			getDetail() {
				uni.navigateTo({
					url: 'scheme_ation'
				})
			},
			// 施工跳转
			sgDetail() {
				uni.navigateTo({
					url: "./sgDetail"
				})
			},

		},
		
	}
</script>

<style lang="scss" scoped>
	@import '../../common/style/tabList.scss';
	.scroll-view-body{
		height: calc( 100vh - 130upx - 110upx );
	}
</style>
