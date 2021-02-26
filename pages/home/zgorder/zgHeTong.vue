<template>

	<view class="newfrom">
		<TopSearch placeholder="合同搜索" @search="search"></TopSearch>

		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{active: index === activeIndex}" @click="clickTitle(index, item.value)">{{item.label}}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-body" :lower-threshold="100">
			<view class="padding-bottom150">

				<NoData :show="titleList[activeIndex].list.length == 0"></NoData>
				<view v-for="(item,index) in titleList[activeIndex].list" :key="index" @click="getDetail(item)" class="item">
					<view class="item-info tops">
						<view class="">{{ item.goodsname }}</view>
						<view class="colors">{{ item.process_name }} </view>
					</view>
					<view class="item-info bottoms">
						<view class="colors">{{ item.order_number }}</view>
						<view class="colors">{{ item.createtime }}</view>
					</view>
				</view>
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
	import { selectid } from "@/components/api/api.js";
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
						value: contract.HAVE_BEEN_THROUGH,
						label: '已通过',
						list: []
					},
					{
						value: contract.NOT_THROUGH,
						label: '未通过',
						list: []
					},
				],
			}
		},
		components: {
			fromDeatil,
			TopSearch,
			NoData
		},
		onLoad() {
			this._selectid()
		},
		methods: {
			// 搜索
			search(value) {
				this.query = value;
				this._selectid()
			},
			_selectid() {
				let parmas = {
					id: uni.getStorageSync("WORKERS_ID"), // worker_id 主管id
					 types : uni.getStorageSync("HOUSE_LEVELS") , // 0主管  1用户  HOUSE_LEVELS
					 query : this.query || '' , // 搜索
					 states: this.activeIndex , // 0待签、1已签、2取消
				}
				selectid(parmas).then(res => {
					console.log(res)
					this.titleList[this.activeIndex].list = res.varList
				})
			},
			clickTitle(index, value) {
				this.activeIndex = index
				this._selectid()
			},
			getDetail(item) {
				// 1 施工、2维修
				if(item.contract_type == 1) { // 施工合同
					uni.navigateTo({
						url: '../../constructionContracts/constructionContracts?order_id=' +item.order_id + '&disabel=disabel'
					})
				}else if(item.contract_type == 2) {  // 维修合同
					uni.navigateTo({
						url: '../../maintenanceContracts/maintenanceContracts?order_id='+ item.order_id + '&disabel=disabel'
					})
				}

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
	@import '@/common/style/tabList.scss';
	.item{
		background: rgb(255, 234, 176);
		width: 690rpx;
		margin: 15rpx auto;
		padding: 20rpx;
		.tops{
			margin-bottom: 15rpx;
			font-size: 30rpx;
			font-weight: 600;
		}
		.bottoms{
			font-size: 26rpx;
		}
		.colors {
			color: #666;
			font-weight: normal;
		}
		.item-info{
			display: flex;
			justify-content: space-between;
		}
	}
</style>
