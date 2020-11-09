<template>

	<view class="newfrom">
		<TopSearch @search="searchValue" placeholder="请输入用户名,手机号,商品名搜索"></TopSearch>

		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{active: index === activeIndex}" @click="clickTitle(index, item.value)">{{item.label}}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-tab-list-body">
			<view class="padding-bottom150">
				<fromDeatil 
					:msg="(item.states == 1 && '已确认') || (item.states == 4 && '待确认') || (item.states == 3 && '未通过')" 
					:item="item" 
					v-for="(item,index) in titleList[activeIndex].list" 
					:key="index" @getDetail="getDetail(index, item)">
					<view class="slot-warp" v-if="activeIndex == 2">
						<view class="slot-active" @click="aglinSetting(item.order_id)">重新设置</view>
					</view>
				 </fromDeatil>
				 <NoData :show="!titleList[activeIndex].list.length"/>
			
			</view>
		</scroll-view>

	</view>
</template>

<script>
	import fromDeatil from "@/components/fromAll.vue"
	import TopSearch from "@/components/TopSearch.vue"
	import NoData from "@/components/NoData.vue" 
	import {
		technicianPlant
	} from '@/variable/orderCenter.js'
	import { technicianListAllById } from "@/components/api/api.js"
	export default {
		components: {
			fromDeatil,
			TopSearch,
			NoData
		},
		data() {
			return {
				query: '',
				currentTabBar: -1,
				activeIndex: 0,
				titleList: [{
						value: technicianPlant.BEEN_CONFIRMED,
						label: '已确认',
						list: []
					},
					{
						value: technicianPlant.CONFIRMED,
						label: '待确认',
						list: []
					},
					{
						value: technicianPlant.NOT_THROUGH,
						label: '未通过',
						list: []
					}
				],
			}
		},
		
		async created() {
			this.currentTabBar = await this.titleList && this.titleList[0].value;
			await this.getList()
		},
		methods: {
			searchValue(val) {
				this.query = val
				this.getList()
			},
			aglinSetting(order_id) {
				// /home/neworder/dingdanzhongxin
				uni.navigateTo({ // home neworder weitongguoxiangqing
					url: './shezhifangan?order_id=' + order_id
				})
			},
			clickTitle(index, value) {
				this.activeIndex = index;
				this.currentTabBar = value
				this.getList()
			},
			// 获取列表
			getList () {
				let obj = {query: this.query, technician_id: uni.getStorageSync('WORKERS_ID')}
				if(this.currentTabBar == 0) { // 0 进行中  1 已完成  2 已取消
					obj.states = 1
				}else if(this.currentTabBar == 1) {
					obj.states = 4
				}else if(this.currentTabBar == 2) {
					obj.states = 3
				}
				technicianListAllById(obj).then(res => {
					this.titleList[this.activeIndex].list = res.varList
				})
			},
			
			getDetail(val, info) {
				let act = this.currentTabBar
				if (act == 1) {
					uni.navigateTo({
						url: 'daiquerenxiangqing'
					})
				} else if (act == 2) {
					uni.navigateTo({
						url: 'weitongguoxiangqing?info=' + JSON.stringify(info)
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
@import "~@/common/style/tabList.scss";

	.top {
		padding: 0 20upx;
		width: 710upx;

	}
</style>
