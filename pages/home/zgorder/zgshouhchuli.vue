<template>
	<view class="newfrom">
		<TopSearch placeholder="搜索"></TopSearch>

		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{ active: index === activeIndex }" @click="clickTitle(index, item.value)">{{ item.label }}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-tab-list-body" :lower-threshold="100" @scrolltolower="scrolltolower">
			<view class="padding-bottom150">
				<!-- :flag="8" -->
				<fromDeatil msg="msg" :item="item" v-for="(item, index) in titleList[activeIndex].list" :key="index" @getDetail="getDetail(act)">
					<view class="slot-warp">
						<view class="slot-not-active" @click="notThrough">不通过</view>
						<view class="slot-active" @click="through">通过</view>
					</view>
				</fromDeatil>
				 <NoData show></NoData>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import NoData from "@/components/NoData.vue"
	import fromDeatil from "@/components/fromAll.vue";
	import TopSearch from "@/components/TopSearch.vue";
	import {
		afterProcessing
	} from "@/variable/orderCenter.js";
	export default {
		components: {
			fromDeatil,
			TopSearch,NoData
		},
		data() {
			return {
				activeIndex: 0,
				titleList: [{
						value: afterProcessing.REFUND,
						label: "退款",
						list: [],
					},
					{
						value: afterProcessing.QUALITY_PROBLEM,
						label: "质量问题",
						list: [],
					},
				],
			};
		},

		methods: {
			// 标题点击
			clickTitle(index, value) {
				this.activeIndex = index;
			},
			// 列表滚动
			scrolltolower(event) {},
			getDetail(act) {
				uni.navigateTo({
					url: "./butongyi",
				});
			},
			// 不通过
			notThrough() {
				uni.navigateTo({
					url: "zgfanganquxiao",
				});
			},
			// 通过
			through() {
				uni.navigateTo({
					url: "zgfanganNew",
				});
			},
			gox() {
				uni.navigateTo({
					url: "./zgrenyuan",
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "~@/common/style/tabList.scss";
</style>
