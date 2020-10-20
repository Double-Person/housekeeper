<template>

	<view class="newfrom">
		<TopSearch placeholder="搜索订单"></TopSearch>

		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{active: index === activeIndex}" @click="clickTitle(index, item.value)">{{item.label}}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-tab-list-body" :lower-threshold="100" @scrolltolower="scrolltolower">
			<view class="padding-bottom150">
				<fromDeatil msg="msg" :item="item" v-for="(item,index) in titleList[activeIndex].list" :key="index" @getDetail="getDetail"
				 @butongguo="butongguo" @tongyi="tongyi"></fromDeatil>
			</view>
		</scroll-view>

	</view>
</template>

<script>
	import fromDeatil from "../../../components/fromAll.vue"
	import TopSearch from "../../../components/TopSearch.vue"
	import {
		technicianPlant
	} from '../../../variable/orderCenter.js'
	export default {
		data() {
			return {
				currentTabBar: -1,
				activeIndex: 0,
				titleList: [{
						value: technicianPlant.BEEN_CONFIRMED,
						label: '已确认',
						list: ['已确认 1', '已确认 2', '已确认 3', '已确认 4', '已确认 5']
					},
					{
						value: technicianPlant.CONFIRMED,
						label: '待确认',
						list: ['待确认 1', '待确认 2', '待确认 3']
					},
					{
						value: technicianPlant.NOT_THROUGH,
						label: '未通过',
						list: ['未通过 1', '未通过 2', '未通过 3']
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

			getDetail(val) {
				let act = this.currentTabBar
				if (act == 1) {
					uni.navigateTo({
						url: 'daiquerenxiangqing'
					})
				} else if (act == 2) {
					uni.navigateTo({
						url: 'weitongguoxiangqing'
					})
				} else {
					uni.navigateTo({
						url: 'yiquerenxiangqing'
					})
				}

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
	@import '../../../common/style/tabList.scss';

	.top {
		padding: 0 20upx;
		width: 710upx;

	}
</style>
