<template>

	<view class="newfrom">
		<TopSearch placeholder="搜索订单"></TopSearch>

		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{active: index === activeIndex}" @click="clickTitle(index, item.value)">{{item.label}}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-body" :lower-threshold="100" @scrolltolower="scrolltolower">
			<view class="padding-bottom150">
				<fromDeatil msg="msg" :item="item" v-for="(item,index) in titleList[activeIndex].list" :key="index"
				 @getDetail="getDetail(act)" @butongguo="butongguo" @tongyi="tongyi"></fromDeatil>
				 <NoData show></NoData>
			</view>
		</scroll-view>

	</view>
</template>

<script>
		import NoData from "@/components/NoData.vue"
	import fromDeatil from "@/components/fromAll.vue"
	import TopSearch from "@/components/TopSearch.vue"
	import {
		contract
	} from "@/variable/orderCenter.js"
	export default {
		data() {
			return {
				activeIndex: 0,
				titleList: [{
						value: contract.STAY_BY,
						label: '待通过',
						list: []
					},
					{
						value: contract.NOT_THROUGH,
						label: '未通过',
						list: []
					},
					{
						value: contract.HAVE_BEEN_THROUGH,
						label: '已通过',
						list: []
					}
				],
			}
		},
		components: {
			fromDeatil,
			TopSearch,NoData
		},
		methods: {
			clickTitle(index, value) {
				this.activeIndex = index
			},
			getDetail(act) {
				uni.navigateTo({
					url: 'zghetongs'
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
