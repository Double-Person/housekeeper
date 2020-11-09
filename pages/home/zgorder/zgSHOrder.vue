<template>

	<view class="newfrom">
		<TopSearch @search="searchValue" placeholder="请输入用户名,手机号,商品名搜索" />

		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{active: index === activeIndex}" @click="clickTitle(index, item.value)">{{item.label}}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-tab-list-body">
			<view class="padding-bottom150">
				<fromDeatil 
				 :msg="item.qualitystate == 0 && '待处理' || item.qualitystate == 1 && '处理中' || item.qualitystate == 2 && '已完成'  " 
				:item="item" v-for="(item,index) in titleList[activeIndex].list" :key="index"
				 @getDetail="getDetail" @butongguo="butongguo" @tongyi="tongyi"></fromDeatil>
				 <NoData :show="titleList[activeIndex].list.length === 0"></NoData>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import NoData from "@/components/NoData.vue"
	import fromDeatil from "@/components/fromAll.vue"
	import TopSearch from '@/components/TopSearch.vue'
	import { salesOrder, positionObj } from "@/variable/orderCenter.js"
	import {qualityList} from "@/components/api/api.js"
	export default {
		data() {
			return {
				val: '1',
				query: '',
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
		created() {
			this._qualityList(1)
		},

		methods: {
			searchValue(val) {
				this.query = val
				this._qualityList(this.val)
			},
			// 标题点击
			clickTitle(index, value) {
				this.activeIndex = index
				this.val = value
				this._qualityList(value)
			},
			_qualityList(qualitystate) {
				uni.showLoading({
					title: '加载中'
				})
				//  worker_id  主管或工人
				// * qualitystate  0待开工、1开工中、2已完成
				let levels = uni.getStorageSync('HOUSE_LEVELS'),
					usertype = '';
				if (levels == positionObj.DIRECTOR) { // 主管
					usertype = 2
				} else if (levels == positionObj.MASTER) { // 工长
					usertype = 1
				} else if (levels == positionObj.TECHNICIAN) { // jishu
					usertype = 0
				}
				let obj = {
					query: this.query,
					worker_id: uni.getStorageSync('WORKERS_ID'),
					usertype,
					qualitystate
				}
				qualityList(obj).then(res => {
					this.titleList[this.activeIndex].list = res.varList
				}).finally(() => {
					uni.hideLoading()
				})
			},
		
			getDetail(info) {
				this.$detail(info, 'order')
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
