<template>
	<view class="newfrom">
		<!-- 搜索 -->
		<TopSearch @search="search" placeholder="通过手机名,商品名,用户名搜索"></TopSearch>
		<view class="list-view">
			<!-- 横向滚动 -->
			<scroll-view :scroll-x="true" class="top-scroll-view">
				<view class="top">
					<view :class="{ active: currentTabBar === item.value }" v-for="(item, index) in topBarList" :key="item.value"
					 @click="topBarActive(index, item.value)">{{ item.label }}</view>
				</view>
			</scroll-view>
			
			

			<!-- 全部 -->
			<zgOrderAll v-show="currentTabBar == statusObj.ALL" :list='topBarList[this.currentTabBar].list' />
			<!-- 施工 -->
			<zgOrderConstuction v-show="currentTabBar == statusObj.CONSTRUCTION" :list='topBarList[this.currentTabBar].list' />
			<!-- 审核 -->
			<zgOrderAudit v-show="currentTabBar == statusObj.AUDIT" :list='topBarList[this.currentTabBar].list' />
			<!-- 客户确认 -->
			<zgOrderConfirmation v-show="currentTabBar == statusObj.CUSTOMER_CONFIRMATION" :list='topBarList[this.currentTabBar].list' />
			<!-- 质保 -->
			<zgOrderQuality v-show="currentTabBar == statusObj.QUALITY_ASSURANCE" :list='topBarList[this.currentTabBar].list' />
			<!-- 完成 -->
			<zgOrderComplete v-show="currentTabBar == statusObj.COMPLETE" :list='topBarList[this.currentTabBar].list' />
			<!-- 取消 -->
			<zgOrderCancel v-show="currentTabBar == statusObj.CANCEL" :list='topBarList[this.currentTabBar].list' />
		</view>
	</view>
</template>

<script>
	import TopSearch from "@/components/TopSearch.vue";

	import zgOrderAll from "./zgOrderAll"; // 全部
	import zgOrderConstuction from "./zgOrderConstuction"; // 施工
	import zgOrderAudit from "./zgOrderAudit"; // 审核
	import zgOrderConfirmation from "./zgOrderConfirmation"; // 客户确认
	import zgOrderQuality from "./zgOrderQuality"; // 质保
	import zgOrderComplete from "./zgOrderComplete"; // 完成
	import zgOrderCancel from "./zgOrderCancel"; // 取消

	import {
		statusObj,
		directorOrderCenterAllStatus,
	} from "@/variable/orderCenter.js";
	import {
		ordertype
	} from "@/components/api/api.js";

	export default {
		data() {
			return {
				query: '',
				currentTabBar: -1,
				statusObj: statusObj,
				TYPE: directorOrderCenterAllStatus,
				orderConstuctionType: 'review',  // 施工状态  待开工
				orderAuditType: 'review',  // 审核状态  审核中
				orderConfirmationType: 'review', // 用户确认  审核中
				topBarList: [{
						value: statusObj.ALL,
						label: "全部",
						list: [],
					},
					{
						value: statusObj.CONSTRUCTION,
						label: "施工",
						list: [],
					},
					{
						value: statusObj.AUDIT,
						label: "审核",
						list: [],
					},
					{
						value: statusObj.CUSTOMER_CONFIRMATION,
						label: "客户确认",
						list: [],
					},
					{
						value: statusObj.QUALITY_ASSURANCE,
						label: "质保",
						list: [],
					},
					{
						value: statusObj.COMPLETE,
						label: "完成",
						list: [],
					},
					{
						value: statusObj.CANCEL,
						label: "取消",
						list: [],
					},
				],
			};
		},
		components: {
			TopSearch,
			zgOrderAll,
			zgOrderConstuction,
			zgOrderAudit,
			zgOrderConfirmation,
			zgOrderQuality,
			zgOrderComplete,
			zgOrderCancel,
		},
		created() {
			this.currentTabBar = this.topBarList && this.topBarList[0].value;
			this._ordertype('')
		},
		
		onLoad() {
			// 施工状态切换事件监听
			uni.$on("directorOrderConstuction", (type) => {
				console.log('监听施工', type)
				this.orderConstuctionType = type
				this.watchConstuction()
			})
			// 审核状态切换事件监听
			uni.$on("directorOrderAudit", (type) => {
				this.orderAuditType = type
				this.watchAudit()
			})
			
			// 用户确认状态切换事件监听
			uni.$on("directorOrderConfirmation", (type) => {
				this.orderConfirmationType = type
				this.watchConfirmation()
			})
				
		},

		methods: {
			
			// 搜索
			search(value) {
				this.query = value;
				this.finallySearch()
			},
			topBarActive(index, value) {
				this.currentTabBar = value; //
				this.finallySearch()
			},
			
			finallySearch() {
				if (this.statusObj.ALL == this.currentTabBar) { // 所有
					this._ordertype('')
				}
				if (this.statusObj.CONSTRUCTION == this.currentTabBar) { // 施工
					this.watchConstuction()
				}
				if (this.statusObj.AUDIT == this.currentTabBar) { // 审核
					// this.watchAudit()
					this._ordertype(2)
				}
				if (this.statusObj.CUSTOMER_CONFIRMATION == this.currentTabBar) { // 客户确认
					this.watchConfirmation()
				}
				if (this.statusObj.QUALITY_ASSURANCE == this.currentTabBar) { // 质保
					this._ordertype(5)
				}
				if (this.statusObj.COMPLETE == this.currentTabBar) { // 完成
					this._ordertype(6)
				}
				if (this.statusObj.CANCEL == this.currentTabBar) { // 取消
					this._ordertype(7)
				}
			},

			

			/* worker_id 主管id
			 *  mastertype  订单的状态   0待开工、1施工中、2审核中、3已通过、4未通过、
			 * 5保修中、6已完成、7取消、8售后待处理、9售后处理中、10售后已完成
			 * 11用户待通过、12用户不通过
			 */
			// 施工
			watchConstuction() {
				if (this.orderConstuctionType == 'review') { //    待开工
					this._ordertype('0')
				}
				if (this.orderConstuctionType == 'haveBeenThrough') { //   施工中
					this._ordertype(1)
				}
			},
			
			// 审核
			watchAudit() {
				if (this.orderAuditType == 'review') { //    审核中
					this._ordertype(2)
				}
				if (this.orderAuditType == 'haveBeenThrough') { //   已通过
					this._ordertype(3)
				}
				if (this.orderAuditType == 'noThrough') { //   未通过
					this._ordertype(4)
				}
			},
			
			// 用户确认
			watchConfirmation() {
				if (this.orderConfirmationType == 'review') { //    审核中
					this._ordertype(11)
				}
				if (this.orderConfirmationType == 'noThrough') { //   未通过
					this._ordertype(12)
				}
				if (this.orderConfirmationType == 'through') { //   已经通过
					this._ordertype(13)
				}
			},

			_ordertype(mastertype) {
				let obj = {
					query: this.query,
					worker_id: uni.getStorageSync("WORKERS_ID"),
					mastertype: mastertype || '',
				};
				uni.showLoading({
					title: "加载中",
				});

				ordertype(obj)
					.then((res) => {
						this.topBarList[this.currentTabBar].list = res.data;
					})
					.finally(() => {
						uni.hideLoading();
					});
			},

			
		},
	};
</script>

<style lang="scss" scoped>
	.list-view {
		height: calc(100vh - 110upx);
	}

	.top-scroll-view {
		width: 100%;
		height: 110upx;
		background: #fff;
		overflow: hidden;
	}

	.body-scroll-view {
		height: calc(100% - 110upx);

		.block {
			display: block;
			padding-bottom: 150upx;
		}
	}

	.top {
		width: 130%;
		height: 110upx;
		display: flex;
		flex-wrap: nowrap;
		overflow: hidden;
	}

	.top view {
		height: 61upx;
		float: left;
		margin-left: 67upx;
		font-size: 32upx;
		margin-top: 21upx;
		line-height: 61upx;
	}

	.top view:nth-of-type(1) {
		margin-left: 9upx;
	}

	.active {
		border-bottom: 6upx solid #ffc823;
		font-weight: 700;
	}

	.state {
		width: 710upx;
		margin-top: 19upx;
		// height:80upx;
		display: flex;
		justify-content: space-between;
		// padding: 0 20upx;
	}

	.states {
		width: 530upx;
		margin-top: 19upx;
		display: flex;
		justify-content: space-between;
		padding: 0 110upx;
	}

	.state text {
		display: block;
		font-size: 32upx;
		padding: 19upx 47upx;
		border: 1upx solid #191919;
		border-radius: 10upx;
	}

	.state .statAct {
		background: #ffc823;
		color: #fff;
		border: none;
	}
</style>
