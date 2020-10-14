<template>
	<view class="newfrom">
		<!-- 搜索 -->
		<view class="sou">
			<view class="sou_ipt">
				<input type="text" value="" />
				<view class="order_txt">
					<view class="sou_icon">
						<image src="../../../static/order_icon/sou.png"></image>
					</view>
					<text>搜索订单</text>
				</view>
			</view>
		</view>
		
		<view class="list-view">
			<!-- 横向滚动 -->
			<scroll-view scroll-x="true" class="top-scroll-view">
				<view class="top">
					<view :class="{active: topActive === index}" v-for="(item, index) in topBarList" :key="item.value" @click="topBarActive(index, item.value)">{{item.label}}</view>
				</view>
			</scroll-view>

			<scroll-view scroll-y="true" class="body-scroll-view">
				<view class="block">
					<!-- 审核页面 -->
	
					<view class="state" v-if="statusObj.AUDIT == currentTabBar">
						<text :class="audit === 'review' ? 'statAct' :'' " @click="subType('review')">审核中</text>
						<text :class="audit === 'haveBeenThrough' ? 'statAct' :'' " @click="subType('haveBeenThrough')">已通过</text>
						<text :class="audit === 'noThrough' ? 'statAct' :'' " @click="subType('noThrough')">未通过</text>
					</view>
					<!-- 客户确认 -->
					<view class="state states" v-if="statusObj.CUSTOMER_CONFIRMATION == currentTabBar">
						<text :class="audit === 'review' ? 'statAct' :'' " @click="subType('review')">审核中</text>
						<text :class="audit === 'noThrough' ? 'statAct' :'' " @click="subType('noThrough')">未通过</text>
					</view>
					<!-- 无下级 topBarList hasNext list    topActive -->
					<view v-if="!topBarList[topActive].hasNext">
						<fromDeatil msg="msg" :item="item" v-for="(item,index) in topBarList[topActive].list" :key="index"></fromDeatil>
					</view>
					<!-- 有下级 -->
					<view v-if="topBarList[topActive].hasNext">
						<fromDeatil msg="msg" :item="item" v-for="(item,index) in topBarList[topActive].list[currentType].list" :key="index"></fromDeatil>
					</view>
					
				</view>
			</scroll-view>


		</view>



		<view class="" v-if="false">
			<!-- 全部 -->
			<view class="form_deta" :class="{block:act==0}">
				<fromDeatil :msg="msg" v-for="(item,index) in 4" :key="index"></fromDeatil>
			</view>
			<!-- 施工 -->
			<!-- <view class="form_deta" :class="{block:act==1}" @click="sgDetail"> -->

			<!--  -->
			<!-- 审核页面 -->
			<view class="form_deta" :class="{block:act==2}">
				<view class="state">
					<text class="statAct">审核中</text>
					<text>已通过</text>
					<text>未通过</text>
				</view>
				<!-- 切换页面 -->
				<view class="form_deta">
					<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index"></fromDeatil>
				</view>
				<view class="form_deta" :class="{block:sAce==1}">
					<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index"></fromDeatil>
				</view>
				<view class="form_deta" :class="{block:sAce==2}">
					<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index"></fromDeatil>
				</view>
			</view>
			<!-- 客户确认 -->
			<view class="form_deta" :class="{block:act==3}">
				<view class="state states">
					<text class="review">审核中</text>
					<text>未通过</text>
				</view>
				<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index" @getDetail="kehuqueren"></fromDeatil>
			</view>


			<view class="form_deta" :class="{block:act==1}">
				<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index" @getDetail="getDetail"></fromDeatil>
			</view>
			<!-- <view class="form_deta" :class="{block:act==3}" >
				<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index" @getDetail="kehuqueren"></fromDeatil>
			</view> -->
			<view class="form_deta" :class="{block:act==4}">
				<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index" @getDetail="zhibaoxq"></fromDeatil>
			</view>
			<view class="form_deta" :class="{block:act==5}">
				<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index" @getDetail="wancheng"></fromDeatil>
			</view>
			<view class="form_deta" :class="{block:act==6}">
				<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index" @getDetail="yiquxiao"></fromDeatil>
			</view>
		</view>
	</view>
</template>

<script>
	import fromDeatil from "../../../components/fromAll.vue"
	import {
		statusObj
	} from "../../../variable/orderCenter.js"

	export default {
		data() {
			return {
				topActive: 0, // 顶部导航激活
				statusObj: statusObj,
				audit: 'review',  // 审核中三种状态  haveBeenThrough noThrough
				customerConfirmation: 'review',  // 客户确认中两种状态  noThrough 
				currentType: 'review', // 判断是 审核还是用户确认
				topBarList: [
					{
						hasNext: false,
						value: statusObj.ALL,
						label: '全部',
						list: ['全部 1','全部 2','全部 3']
					},
					{
						hasNext: false,
						value: statusObj.CONSTRUCTION,
						label: '施工',
						list: ['施工 1','施工 2','施工 3']
					},
					{
						hasNext: true,
						value: statusObj.AUDIT,
						label: '审核',
						list: {
							review: {
								value: 1,
								label: '审核中',
								list: ['审核 审核中 1','审核 审核中 2','审核 审核中 3']
							},
							haveBeenThrough: {
								value: 1,
								label: '已通过',
								list: ['审核 已通过 1','审核 已通过 2','审核 已通过 3']
							},
							noThrough: {
								value: 1,
								label: '未通过',
								list: ['审核 未通过 1','审核 未通过 2','审核 未通过 3']
							}
							
						}
					},
					{
						hasNext: true,
						value: statusObj.CUSTOMER_CONFIRMATION,
						label: '客户确认',
						list: {
							review: {
								value: 1,
								label: '审核中',
								list: ['客户确认 审核中 1','客户确认 审核中 2','客户确认 审核中 3']
							},
							
							noThrough: {
								value: 1,
								label: '未通过',
								list: ['客户确认 未通过 1','客户确认 未通过 2','客户确认 未通过 3']
							}
							
						}
					},
					{
						hasNext: false,
						value: statusObj.QUALITY_ASSURANCE,
						label: '质保',
						list: ['质保 1','质保 2','质保 3']
					},
					{
						hasNext: false,
						value: statusObj.COMPLETE,
						label: '完成',
						list: ['完成 1','完成 2','完成 3']
					},
					{
						hasNext: false,
						value: statusObj.CANCEL,
						label: '取消',
						list: ['取消 1','取消 2','取消 3']
					},
				],

				currentTabBar: -1,
				dataList: [1, 2, 3, 4, 5, 6],
				act: 2,
				sAce: 1,
				msg: '',
			}
		},
		components: {
			fromDeatil
		},
		created() {
			this.currentTabBar = this.topBarList && this.topBarList[0].value;
		},
		methods: {
			topBarActive(index, value) {
				this.topActive = index
				this.currentTabBar = value; // 
				// 审核页面   audit: 'review',  // 审核中三种状态  haveBeenThrough noThrough
				if(this.statusObj.AUDIT == this.currentTabBar) {
					this.currentType = 'review'
					this.audit = 'review'
				}
				// 客户确认  customerConfirmation: 'review',  // 审核中两种状态  noThrough 
				if(this.statusObj.CUSTOMER_CONFIRMATION == this.currentTabBar) {
					this.currentType = 'review'
					this.audit = 'review'
				}
			},
			// 下级类型切换
			subType(type) {
				this.audit = type
				this.currentType = type
			},
			clickTopBar(act) {
				this.act = act
			},


			// 施工跳转
			getDetail() {
				uni.navigateTo({
					url: "./zgshigong"
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
					url: 'zgzhibaoxiangqing'
				})
			},
			wancheng() {
				uni.navigateTo({
					url: 'zgwanchengxiangqing'
				})
			},
			yiquxiao() {
				uni.navigateTo({
					url: 'zgquxiao'
				})
			},
			butongguo() {
				uni.navigateTo({
					url: 'butongyi'
				})
			},
			kehuqueren() {
				uni.navigateTo({
					url: 'zgkehuquerenxiangqing'
				})
			},
			shenhexx(sAce) {
				if (sAce == 2) {
					uni.navigateTo({
						url: 'zgweitongguo'
					})
				} else {
					uni.navigateTo({
						url: 'zgshenhexiangqing',
					})
				}

			}
		}
	}
</script>

<style lang="scss" scoped>
	.sou {
		width: 100%;
		height: 130upx;
		background-image: url(../../../static/order_icon/suo_big.png);
		overflow: hidden;

		input {
			width: 100%;
			height: 71upx;
			background-color: #fff;
			padding-left: 40upx;
			position: absolute;
		}

		.sou_ipt {
			width: 671upx;
			height: 71upx;
			overflow: hidden;
			margin: 0 auto;
			margin-top: 28upx;
			border-radius: 50upx;
			position: relative;
		}



		.order_txt {
			position: absolute;
			z-index: 2;
			overflow: hidden;
			margin-left: 254upx;
			margin-top: 19upx;
		}

		.sou_icon {
			width: 34upx;
			height: 35upx;
			float: left;
		}

		.sou_icon image {
			width: 100%;
			height: 100%;

		}

		.order_txt text {
			display: block;
			float: left;
			font-size: 28upx;
			color: #B2B2B2;
			margin-left: 19upx;
			margin-top: 2upx;
		}
	}



	.list-view{
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

		// padding-bottom: 100upx;
		.form_deta {
			display: none;
		}

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
		// border: 1px solid red;
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



	.state {
		width: 710upx;
		margin-top: 19upx;
		// height:80upx;
		display: flex;
		justify-content: space-between;
		padding: 0 20upx;

	}

	.states {
		width: 530upx;
		margin-top: 19upx;
		// height:80upx;
		display: flex;
		justify-content: space-between;
		padding: 0 110upx;
	}

	.state text {
		display: block;
		font-size: 32upx;
		padding: 19upx 47upx;
		border: 1upx solid #191919;
		// margin-top: 20upx;
		// margin-left: 60upx;
		border-radius: 10upx;
	}

	.state text:nth-of-type(1) {
		// margin-left: 30upx;
	}

	.state .statAct {
		background: #FFC823;
		color: #fff;
		border: none;
	}
</style>
