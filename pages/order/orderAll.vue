<template>
	<view class="newfrom">
		<!-- 搜索 -->
		<TopSearch @search="search"></TopSearch>

		<view class="list-view">
			<!-- 横向滚动 -->
			<scroll-view :scroll-x="true" class="top-scroll-view">
				<view class="top">
					<view :class="{active: topActive === index}" v-for="(item, index) in topBarList" :key="item.value" @click="topBarActive(index, item.value)">{{item.label}}</view>
				</view>
			</scroll-view>

			<scroll-view scroll-y="true" class="body-scroll-view" @scrolltolower="scrolltolower">
				<view class="block">
					<!-- 审核页面 -->
					<view class="state" v-if="statusObj.AUDIT == currentTabBar">
						<text :class="audit === 'review' ? 'statAct' :'' " @click="subType('review')">审核中</text>
						<text :class="audit === 'haveBeenThrough' ? 'statAct' :'' " @click="subType('haveBeenThrough')">已通过</text>
						<text :class="audit === 'noThrough' ? 'statAct' :'' " @click="subType('noThrough')">未通过</text>
					</view>
					<!-- 施工页面 -->
					<view class="state jc-around" v-if="statusObj.CONSTRUCTION == currentTabBar">
						<text :class="audit === 'review' ? 'statAct' :'' " @click="subType('review')">待开工</text>
						<text :class="audit === 'haveBeenThrough' ? 'statAct' :'' " @click="subType('haveBeenThrough')">施工中</text>
					</view>

					<!-- 无下级 topBarList hasNext list    topActive -->
					<view v-if="!topBarList[topActive].hasNext">
						<view v-if="statusObj.COMPLETE != currentTabBar">
							<fromDeatil msg="msg" :item="item" v-for="(item,index) in topBarList[topActive].list" :key="index"></fromDeatil>
						</view>
						<view v-if="statusObj.COMPLETE == currentTabBar">
							<fromDeatil msg="msg" :flag="5" :item="item" v-for="(item,index) in topBarList[topActive].list" :key="index"></fromDeatil>
						</view>
						
						
					</view>
					<!-- 有下级 -->
					<view v-if="topBarList[topActive].hasNext">
						<!-- 审核页面 -->
						<view class="state" v-if="statusObj.AUDIT == currentTabBar">
							<fromDeatil :flag="8" msg="msg" :item="item" 
							:hasChildItem = "topBarList[topActive].list[currentType]" 
							v-for="(item,index) in topBarList[topActive].list[currentType].list"
							 :key="index" @butongguo="notThrough" @tongyi="through"></fromDeatil>
						</view>
						<!-- 施工 -->
						
						<view class="state" v-if="statusObj.CONSTRUCTION == currentTabBar">
							<fromDeatil :flag="8" msg="msg" :item="item" :hasChildItem = "topBarList[topActive].list[currentType]" v-for="(item,index) in topBarList[topActive].list[currentType].list"
							 :key="index" @butongguo="notThrough" @tongyi="through"></fromDeatil>
						</view>
					</view>

				</view>
			</scroll-view>


		</view>

	</view>
</template>

<script>
	import fromDeatil from "../../components/fromAll.vue"
	import TopSearch from "../../components/TopSearch.vue"
	import {
		workersOrderStatus
	} from "../../variable/orderCenter.js"
	export default {
		data() {
			return {
				currentTabBar: -1,
				topActive: 0, // 顶部导航激活
				statusObj: workersOrderStatus,
				audit: 'review', // 审核中三种状态  haveBeenThrough noThrough
				construction: 'review', // 施工中两种状态  haveBeenThrough 
				currentType: 'review', // 判断是 审核还是用户确认
				topBarList: [{
						hasNext: false,
						value: workersOrderStatus.ALL,
						label: '全部',
						list: ['全部 1', '全部 2', '全部 3']
					},
					{
						hasNext: true,
						value: workersOrderStatus.CONSTRUCTION,
						label: '施工',
						list: {
							review: {
								value: 0,
								label: '待开工',
								list: ['施工 待开工 1', '施工 待开工 2', '施工 待开工 3']
							},
							haveBeenThrough: {
								value: 1,
								label: '施工中',
								list: ['施工 施工中 1', '施工 施工中 2', '施工 施工中 3']
							},


						}
					},
					{
						hasNext: true,
						value: workersOrderStatus.AUDIT,
						label: '审核',
						list: {
							review: {
								value: 0,
								label: '审核中',
								list: ['审核 审核中 1', '审核 审核中 2', '审核 审核中 3']
							},
							haveBeenThrough: {
								value: 1,
								label: '已通过',
								list: ['审核 已通过 1', '审核 已通过 2', '审核 已通过 3']
							},
							noThrough: {
								value: 2,
								label: '未通过',
								list: ['审核 未通过 1', '审核 未通过 2', '审核 未通过 3']
							}

						}
					},

					{
						hasNext: false,
						value: workersOrderStatus.QUALITY_ASSURANCE,
						label: '质保',
						list: ['质保 1', '质保 2', '质保 3']
					},
					{
						hasNext: false,
						value: workersOrderStatus.COMPLETE,
						label: '完成',
						list: ['完成 1', '完成 2', '完成 3']
					},
					{
						hasNext: false,
						value: workersOrderStatus.CANCEL,
						label: '取消',
						list: ['取消 1', '取消 2', '取消 3']
					},
				],



			}
		},
		components: {
			fromDeatil,
			TopSearch
		},
		created() {
			this.currentTabBar = this.topBarList && this.topBarList[0].value;
		},
		methods: {
			//  不通过
			notThrough(val) {
				console.log('不通过', val)
			},
			// 通过
			through(val) {
				console.log('通过', val)
			},
			scrolltolower(event) {
				console.log(event)
			},
			topBarActive(index, value) {
				this.topActive = index
				this.currentTabBar = value; // 
				// 审核页面   audit: 'review',  // 审核中三种状态  haveBeenThrough noThrough
				if (this.statusObj.AUDIT == this.currentTabBar) {
					this.currentType = 'review'
					this.audit = 'review'
				}

			},
			// 下级类型切换
			subType(type) {
				console.log('下级类型', type)
				this.audit = type
				this.currentType = type
			},

			// 搜索
			search(value) {
				console.log(value)
			},
			

			// 施工跳转
			getDetail() {
				uni.navigateTo({
					url: "./sgdetailAll"
				})
			},
			yitongguo() {
				console.log(1)
				uni.navigateTo({
					url: 'shenhexiangqing'
				})
			},
			weitongguo() {
				uni.navigateTo({
					url: 'weitongguo'
				})
			},
			zhibaoxq() {
				uni.navigateTo({
					url: 'zhibaoxiangqing'
				})
			},
			yiwancheng() {
				uni.navigateTo({
					url: 'chakanwenjuan'
				})
			},
			yiquxiao() {
				uni.navigateTo({
					url: 'quxiao'
				})
			}
		},

	}
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
		border-bottom: 6upx solid #FFC823;
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
		background: #FFC823;
		color: #fff;
		border: none;
	}
</style>
