<template>
	<view class="newfrom">
		<!-- 搜索 -->
		<TopSearch @search="search"></TopSearch>

		<view class="list-view">
			<!-- 横向滚动 -->
			<scroll-view :scroll-x="true" class="top-scroll-view">
				<view class="top">
					<view :class="{ active: topActive === index }" v-for="(item, index) in topBarList" :key="item.value" @click="topBarActive(index, item.value)">{{ item.label }}</view>
				</view>
			</scroll-view>

			<scroll-view scroll-y="true" class="body-scroll-view" @scrolltolower="scrolltolower">
				<view class="block">
					<!-- 审核页面 -->
					<view class="state" v-if="statusObj.AUDIT == currentTabBar">
						<text :class="audit === 'review' ? 'statAct' : ''" @click="subType('review')">审核中</text>
						<text :class="audit === 'haveBeenThrough' ? 'statAct' : ''" @click="subType('haveBeenThrough')">已通过</text>
						<text :class="audit === 'noThrough' ? 'statAct' : ''" @click="subType('noThrough')">未通过</text>
					</view>
					<!-- 施工页面 -->
					<view class="state jc-around" v-if="statusObj.CONSTRUCTION == currentTabBar">
						<text :class="audit === 'review' ? 'statAct' : ''" @click="subType('review')">待开工</text>
						<text :class="audit === 'haveBeenThrough' ? 'statAct' : ''" @click="subType('haveBeenThrough')">施工中</text>
					</view>

					<!-- 无下级 topBarList hasNext list    topActive -->
					<view v-if="!topBarList[topActive].hasNext">
						<view v-if="statusObj.COMPLETE != currentTabBar">
							<fromDeatil msg="msg" :item="item" v-for="(item, index) in topBarList[topActive].list" :key="index"></fromDeatil>
						</view>
						<view v-if="statusObj.COMPLETE == currentTabBar">
							<!-- :flag="5" -->
							<fromDeatil msg="msg" :item="item" v-for="(item, index) in topBarList[topActive].list" :key="index">
								<view class="slot-warp">
									<view class="slot-active" @click="questionnaireSurvey">问卷调查</view>
								</view>
							</fromDeatil>
						</view>
						<NoData :show="true"></NoData>
					</view>
					<!-- 有下级 -->
					<view v-if="topBarList[topActive].hasNext">
						<!-- 审核页面 -->
						<view class="state" v-if="statusObj.AUDIT == currentTabBar">
							<fromDeatil msg="msg" :item="item" :hasChildItem="topBarList[topActive].list[currentType]" v-for="(item, index) in topBarList[topActive].list[currentType]
                  .list"
							 :key="index">
								<view class="slot-warp">
									<view class="slot-not-active" @click="notThrough">不通过</view>
									<view class="slot-active" @click="through">通过</view>
								</view>
							</fromDeatil>
							<NoData :show="true"></NoData>
						</view>
						<!-- 施工 -->

						<view class="state" v-if="statusObj.CONSTRUCTION == currentTabBar">
							<fromDeatil msg="msg" :item="item" :hasChildItem="topBarList[topActive].list[currentType]" v-for="(item, index) in topBarList[topActive].list[currentType]
                  .list"
							 :key="index">
								<view class="slot-warp">
									<view class="slot-not-active" @click="notThrough">不通过</view>
									<view class="slot-active" @click="through">通过</view>
								</view>
							</fromDeatil>
							<NoData :show="true"></NoData>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import fromDeatil from "@/components/fromAll.vue";
	import TopSearch from "@/components/TopSearch.vue";
	import {
		workersOrderStatus
	} from "@/variable/orderCenter.js";
	import NoData from "@/components/NoData.vue"
	export default {
		components: {
			fromDeatil,
			TopSearch,
			NoData
		},
		data() {
			return {
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
						list: {
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
						list: {
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
		},
		methods: {
			//  不通过
			notThrough(val) {
				console.log("不通过", val);
			},
			// 通过
			through(val) {
				console.log("通过", val);
			},
			scrolltolower(event) {
				console.log(event);
			},
			topBarActive(index, value) {
				this.topActive = index;
				this.currentTabBar = value; //
				// 审核页面   audit: 'review',  // 审核中三种状态  haveBeenThrough noThrough
				if (this.statusObj.AUDIT == this.currentTabBar) {
					this.currentType = "review";
					this.audit = "review";
				}
			},
			// 下级类型切换
			subType(type) {
				console.log("下级类型", type);
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
