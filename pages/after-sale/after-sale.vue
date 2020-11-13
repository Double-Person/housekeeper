<template>

	<view class="newfrom">
		<Topsearch @search='searchValue' placeholder="搜索订单" />
		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{active: index === activeIndex}" @click="clickTitle(index, item.value)">{{item.label}}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-body">
			<view class="padding-bottom150">
				<fromDeatil 
				:msg="item.qualitystate == 0 && '待处理' || item.qualitystate == 1 && '处理中' || item.qualitystate == 2 && '已完成'  " 
				:item="item" v-for="(item,index) in titleList[activeIndex].list" :key="index" @getDetail="getDetail">
					<view class="slot-warp" v-if="item.qualitystate == 0">
						<view class="slot-active" @click="starts(0,item)">开工</view>
					</view>
					<view class="slot-warp" v-if="item.qualitystate == 1">
						<view class="slot-not-active" @click="starts(1,item)">上传进度</view>
						<view class="slot-active" @click="starts(2,item)">完成</view>
					</view>
				</fromDeatil>
				<NoData :show="titleList[activeIndex].list.length === 0"></NoData>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import NoData from "@/components/NoData.vue"
	import fromDeatil from "@/components/fromAll.vue"
	import Topsearch from "@/components/TopSearch.vue"
	import {
		qualityList
	} from "@/components/api/api.js";
	import {
		workersAfterSale,
		positionObj
	} from '@/variable/orderCenter.js'
	export default {
		components: {
			fromDeatil,
			Topsearch,
			NoData
		},
		data() {
			return {
				query: '',
				flag: 2,
				activeIndex: 0,
				titleList: [{
						value: workersAfterSale.PROCESSED,
						label: '待处理',
						list: []
					},
					{
						value: workersAfterSale.PROCESSING,
						label: '处理中',
						list: []
					},
					{
						value: workersAfterSale.COMPLETED,
						label: '已完成',
						list: []
					}
				],
			}
		},


		created() {
			this._qualityList(0)
		},
		methods: {
			searchValue(val) {
				this.query = val
				this._qualityList(this.activeIndex)
			},

			clickTitle(index, value) {
				this.activeIndex = index
				this._qualityList(index)
			},

			getDetail(info) {
				uni.navigateTo({
					url: '../home/zgorder/moreDetail?orderquality_id=' + info.orderquality_id
				})
			},

			_qualityList(qualitystate) {
				uni.showLoading({
					title: '加载中'
				})
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
					usertype, //  0用户、1工人、2主管
					qualitystate // 0待处理、1处理中、2已完成
				}
				qualityList(obj).then(res => {
					this.titleList[this.activeIndex].list = res.varList
				}).finally(() => {
					uni.hideLoading()
				})
			},
			// 开工
			starts(bz, info) {
				info.goods = this.$goods(info);
				uni.navigateTo({
					url: "./Start?bz=" + bz + '&info=' + JSON.stringify(info),
					fail(err) {
						console.log(err)
					}
				});
			},
	
			

		},

	}
</script>

<style lang="scss" scoped>
	@import "~@/common/style/tabList.scss";
	
	.order_txt text {
		display: block;
		float: left;
		font-size: 28upx;
		color: #B2B2B2;
		margin-left: 19upx;
		margin-top: 2upx;
	}

	.top {
		padding: 0 20upx;
		width: 710upx;
		height: 110upx;
		display: flex;
		flex-wrap: nowrap;
		overflow: hidden;
		// border: 1px solid red;
		display: flex;
		justify-content: space-between;
		background: rgba(255, 255, 255, 1);
	}

	.top view {
		height: 61upx;
		float: left;
		// border: 1px solid red;
		margin-left: 67upx;
		font-size: 32upx;
		margin-top: 21upx;
		line-height: 61upx;
	}

	.top view:nth-of-type(1) {
		margin-left: 9upx;
	}

	.active {
		border-bottom: 6upx solid #FFC823;
		font-weight: 700;
	}
</style>
