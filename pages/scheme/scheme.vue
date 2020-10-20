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
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import fromDeatil from "../../components/fromAll.vue"
	import Topsearch from "../../components/TopSearch.vue"
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
						list: ['全部 1', '全部 2', '全部 3', '全部 4', '全部 5']
					},
					{
						value: workersPlant.ONGOING,
						label: '进行中',
						list: ['进行中 1', '进行中 2', '进行中 3']
					},
					{
						value: workersPlant.COMPLETED,
						label: '已完成',
						list: ['已完成 1', '已完成 2', '已完成 3']
					}
				],
			}
		},
		components: {
			fromDeatil,
			Topsearch
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
