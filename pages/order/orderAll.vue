<template>
	<view class="newfrom">
		<!-- 搜索 -->
		<TopSearch @search="search"></TopSearch>

		<view class="list-view">
			<!-- 横向滚动 -->
			<scroll-view :scroll-x="true" class="top-scroll-view">
				<view class="top">
					<view class="top-view" :class="{ active: topActive === index }" v-for="(item, index) in topBarList" :key="item.value" @click="topBarActive(index, item.value)">{{ item.label }}</view>
				</view>
			</scroll-view>

			<!-- mastertype -->
			<scroll-view scroll-y="true" class="body-scroll-view">
				<!-- 全部 -->
				<orderAll v-show="currentTabBar == statusObj.ALL" :list='topBarList[this.topActive].list' />
				<!-- 施工 -->
				<orderConstuction v-show="currentTabBar == statusObj.CONSTRUCTION" @orderConstuction='orderConstuction' :list='topBarList[this.topActive].list' />
				<!-- 审核 -->
				<orderAudit v-show="currentTabBar == statusObj.AUDIT" @orderAuditEmit="orderAuditEmit" :list='topBarList[this.topActive].list' />
				<!-- 质保 -->
				<orderQuality v-show="currentTabBar == statusObj.QUALITY_ASSURANCE" :list='topBarList[this.topActive].list' />
				<!-- 完成 -->
				<orderComplete v-show="currentTabBar == statusObj.COMPLETE" :list='topBarList[this.topActive].list' />
				<!-- 完成 -->
				<orderCancel v-show="currentTabBar == statusObj.CANCEL" :list='topBarList[this.topActive].list' />
			</scroll-view>



		</view>
	</view>
</template>

<script>
	import fromDeatil from "@/components/fromAll.vue";
	import TopSearch from "@/components/TopSearch.vue";
	import orderAll from "./orderAll/index.vue"; // 全部
	import orderConstuction from "./orderConstuction/index.vue"; // 施工
	import orderAudit from "./orderAudit/index.vue"; // 审核
	import orderQuality from "./orderQuality/index.vue"; // 质保
	import orderComplete from "./orderComplete/index.vue"; // 完成
	import orderCancel from "./orderCancel/index.vue"; // 完成
	import NoData from "@/components/NoData.vue"
	import {
		workersOrderStatus
	} from "@/variable/orderCenter.js";

	import {
		selectorder
	} from '@/components/api/api.js'
	export default {
		components: {
			fromDeatil,
			TopSearch,
			NoData,
			orderAll,
			orderConstuction,
			orderAudit,
			orderQuality,
			orderComplete,
			orderCancel
		},
		data() {
			return {
				orderAuditType: 'review', // 审核状态  
				orderConstuctionType: 'review', // 施工状态
				currentTabBar: -1,
				topActive: 0, // 顶部导航激活
				statusObj: workersOrderStatus,
				audit: "review", // 审核中三种状态  haveBeenThrough noThrough
				construction: "review", // 施工中两种状态  haveBeenThrough
				currentType: "review", // 判断是 审核还是用户确认
				topBarList: [{
						hasNext: false,
						value: workersOrderStatus.ALL,
						label: "全部",
						list: [],
					},
					{
						hasNext: true,
						value: workersOrderStatus.CONSTRUCTION,
						label: "施工",
						list: [],
						list1: {
							review: {
								value: 0,
								label: "待开工",
								list: [],
							},
							haveBeenThrough: {
								value: 1,
								label: "施工中",
								list: [],
							},
						},
					},
					{
						hasNext: true,
						value: workersOrderStatus.AUDIT,
						label: "审核",
						list: [],
						list1: {
							review: {
								value: 0,
								label: "审核中",
								list: [],
							},
							haveBeenThrough: {
								value: 1,
								label: "已通过",
								list: [],
							},
							noThrough: {
								value: 2,
								label: "未通过",
								list: [],
							},
						},
					},

					{
						hasNext: false,
						value: workersOrderStatus.QUALITY_ASSURANCE,
						label: "质保",
						list: [],
					},
					{
						hasNext: false,
						value: workersOrderStatus.COMPLETE,
						label: "完成",
						list: [],
					},
					{
						hasNext: false,
						value: workersOrderStatus.CANCEL,
						label: "取消",
						list: [],
					},
				],
			};
		},

		created() {
			this.currentTabBar = this.topBarList && this.topBarList[0].value;
			this._list()
		},
		onLoad() {
			// 审核状态切换事件监听
			uni.$on("orderAuditEmit", (type) => {
				this.orderAuditType = type
				this.watchAudit()
			})
		},
		methods: {

			topBarActive(index, value) {
				this.topActive = index;
				this.currentTabBar = value; //
				// 0待开工、1施工中、2审核中、3已通过、4未通过、
				//  5质保中、6已完成、7取消、8售后待处理、9售后处理中、10售后已完成
				if (index == 1) { // 施工
					this._list('0')
				}

				if (index == 2) { // 审核
					if (this.orderConstuctionType == 'review') { // 2审核中、3已通过、4未通过
						this._list(2)
					}
					if (this.orderConstuctionType == 'haveBeenThrough') { // 已通过
						this._list(3)
					}
					if (this.orderConstuctionType == 'noThrough') { // 未通过
						this._list(4)
					}
				}

				if (index == 3) { // 质保
					this._list(5)
				} else if (index == 4) { // 已完成
					this._list(6)
				} else if (index == 5) { // 取消
					this._list(7)
				} else if (index == 0) { // 全部
					this._list('')
				}


				// 审核页面   audit: 'review',  // 审核中三种状态  haveBeenThrough noThrough
				if (this.statusObj.AUDIT == this.currentTabBar) {
					this.currentType = "review";
					this.audit = "review";
				}
			},

			_list(mastertype) {
				uni.showLoading({
					title: '加载中'
				})
				let obj = {
					mastertype: mastertype || '',
					worker_id: uni.getStorageSync('WORKERS_ID')
				};
				console.log(mastertype, obj)
				selectorder(obj).then(res => {
					this.topBarList[this.topActive].list = res.varList
				}).finally(() => {
					uni.hideLoading()
				})
			},
			
			watchAudit() {
				if (this.orderAuditType == 'review') { // 2审核中、3已通过、4未通过
					this._list(2)
				}
				if (this.orderAuditType == 'haveBeenThrough') { // 已通过
					this._list(3)
				}
				if (this.orderAuditType == 'noThrough') { // 未通过
					this._list(4)
				}
			},
			
			// 施工  待开工，施工中状态切换 
			orderConstuction(type) {
				this.orderConstuctionType = type
				if (this.orderConstuctionType == 'review') { // 待开工
					this._list('0')
				}
				if (this.orderConstuctionType == 'haveBeenThrough') { // 施工中
					this._list(1)
				}
			},
			//  审核状态切换
			orderAuditEmit(type) {
				uni.$on('orderAuditEmit')
				this.orderAuditType = type
			},


			// 下级类型切换
			subType(type) {
				this.audit = type;
				this.currentType = type;
			},

			// 搜索
			search(value) {
				console.log(value);
			},

			// 施工跳转
			getDetail() {
				uni.navigateTo({
					url: "./sgdetailAll",
				});
			},
			// 問卷調查
			questionnaireSurvey() {
				uni.navigateTo({
					// url: '/pages/questionnaire/QuestionnaireSurvey?info=' + JSON.stringify(this.info)
					url: "/pages/questionnaire/CheckQuestionnaire",
				});
			},
			yitongguo() {
				console.log(1);
				uni.navigateTo({
					url: "shenhexiangqing",
				});
			},
			weitongguo() {
				uni.navigateTo({
					url: "weitongguo",
				});
			},
			zhibaoxq() {
				uni.navigateTo({
					url: "zhibaoxiangqing",
				});
			},
			yiwancheng() {
				uni.navigateTo({
					url: "chakanwenjuan",
				});
			},
			yiquxiao() {
				uni.navigateTo({
					url: "quxiao",
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "~@/common/style/tabList.scss";

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
		padding: 0 30upx 0 0;
		display: flex;
		flex-wrap: nowrap;
		overflow: hidden;
	}

	.state {
		width: 710upx;
		margin-top: 19upx;
		// height:80upx;
		display: flex;
		justify-content: space-between;
		// padding: 0 20upx;
	}

	.jc-around {
		justify-content: space-around;
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
