<template>
	<view class="newfrom">
		<Topsearch @searchValue='searchValue' placeholder="搜索订单" />
		<!--  -->
		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{active: index === activeIndex}" @click="clickTitle(index, item.value)">{{item.label}}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-body" :lower-threshold="100" @scrolltolower="scrolltolower">
			<view class="padding-bottom150">
				<fromDeatil msg="msg" :flag="8" :item="item" v-for="(item,index) in titleList[activeIndex].list" :key="index" @getDetail="getDetail(act)"
				 @butongguo="butongguo" @tongyi="tongyi"></fromDeatil>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import fromDeatil from "../../../components/fromAll.vue"
	import Topsearch from "../../../components/TopSearch.vue"
	import {
		plantType
	} from '../../../variable/plan.js'
	export default {
		data() {
			return {
				activeIndex: 0,
				titleList: [{
						value: plantType.TO_PASS,
						label: '待通过',
						list: ['待通过 1', '待通过 2', '待通过 3', '待通过 4', '待通过 5']
					},
					{
						value: plantType.NOT_PASS,
						label: '未通过',
						list: ['未通过 1', '未通过 2', '未通过 3']
					},
					{
						value: plantType.PASSED,
						label: '已通过',
						list: ['已通过 1', '已通过 2', '已通过 3']
					}
				],
				act: 1
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
			getDetail(act) {
				console.log(1)
				uni.navigateTo({
					url: 'zgfanganxiangqing'
				})
			},
			// 施工跳转
			sgDetail() {
				uni.navigateTo({
					url: "./sgDetail"
				})
			},
			butongguo() {
				uni.navigateTo({
					url: "zgfanganquxiao"
				})
			},
			tongyi() {
				uni.navigateTo({
					url: 'zgfanganNew'
				})
			}
		},

	}
</script>

<style lang="scss" scoped>
	@import '../../../common/style/tabList.scss';
	.scroll-view-body{
		height: calc( 100vh - 130upx - 110upx );
	}
		
</style>
