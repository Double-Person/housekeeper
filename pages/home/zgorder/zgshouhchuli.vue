<template>

	<view class="newfrom">
		<TopSearch placeholder="搜索"></TopSearch>
		
		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{active: index === activeIndex}" @click="clickTitle(index, item.value)">{{item.label}}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-tab-list-body" :lower-threshold="100" @scrolltolower="scrolltolower">
			<view class="padding-bottom150">
				<fromDeatil msg="msg" :flag="8" :item="item" v-for="(item,index) in titleList[activeIndex].list" :key="index"
				 @getDetail="getDetail(act)" @butongguo="butongguo" @tongyi="tongyi"></fromDeatil>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import fromDeatil from "../../../components/fromAll.vue"
	import TopSearch from "../../../components/TopSearch.vue"
	import {
		afterProcessing
	} from "../../../variable/orderCenter.js"
	export default {
		components: {
			fromDeatil,
			TopSearch
		},
		data() {
			return {
				activeIndex: 0,
				titleList: [{
						value: afterProcessing.REFUND,
						label: '退款',
						list: ['退款 1', '退款 2', '退款 3', '退款 4', '退款 5']
					},
					{
						value: afterProcessing.QUALITY_PROBLEM,
						label: '质量问题',
						list: ['质量问题 1', '质量问题', '质量问题 3']
					}
				],
			}
		},

		methods: {
			// 标题点击
			clickTitle(index, value) {
				this.activeIndex = index
			},
			// 列表滚动
			scrolltolower(event) {
				
			},
			getDetail(act) {
				uni.navigateTo({
					url: './butongyi'
				})
			},
			gox() {
				uni.navigateTo({
					url: "./zgrenyuan"
				})
			},

		},

	}
</script>

<style lang="scss" scoped>
	@import '../../../common/style/tabList.scss';
</style>
