<template>

	<view class="newfrom">
		<TopSearch />

		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{active: index === activeIndex}" @click="clickTitle(index, item.value)">{{item.label}}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-tab-list-body">
			<view class="padding-bottom150">
				<fromDeatil msg="msg" :item="item" v-for="(item,index) in titleList[activeIndex].list" :key="index"
				 @getDetail="getDetail(act)" @butongguo="butongguo" @tongyi="tongyi"></fromDeatil>
				 <NoData :show="titleList[activeIndex].list.length === 0"></NoData>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import NoData from "@/components/NoData.vue"
	import fromDeatil from "@/components/fromAll.vue"
	import TopSearch from '@/components/TopSearch.vue'
	import { salesOrder } from "@/variable/orderCenter.js"
	import {qualityList} from "@/components/api/api.js"
	export default {
		data() {
			return {
				activeIndex: 0,
				titleList: [
				
					{
						value: salesOrder.PROCESSING,
						label: '处理中',
						list: []
					},
					{
						value: salesOrder.COMPLETED,
						label: '已完成',
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
			// 标题点击
			clickTitle(index, value) {
				this.activeIndex = index
				
			},
			_qualityList() {
				//  worker_id  主管或工人
				// * qualitystate  0待开工、1开工中、2已完成
				let obj = {
					worker_id: uni.getStorageSync('WORKERS_ID'),
					qualitystate: ''
				}
				qualityList(obj).then(res => {
					
				})
			},
		
			getDetail(act) {
				uni.navigateTo({
					url: './zgshouhouxiangqing'
				})

			},
			getState(item, shopName) {
				this.sAce = item,
					this.msg = shopName
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
