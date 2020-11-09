<template>

	<view class="newfrom">
		
		<TopSearch placeholder="请输入用户名,手机号搜索" @search="searchValue"></TopSearch>
		<!--  -->
		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{active: index === activeIndex}" @click="clickTitle(index, item.value)">{{item.label}}</view>
		</view>
		
		<!--  -->
		<view class="person-num">
			<view class="num">总人数: {{ titleList[activeIndex].list.length }}</view>
			<!-- <view class="num">技术人员:0</view>
			<view class="num">工长:0</view> -->
		</view>
		<!-- 信息 -->
		<scroll-view :scroll-y="true" class="scroll-view-body" :lower-threshold="100" @scrolltolower="scrolltolower">
			<view class="numBox">
				<view class="bigBox" v-for="(item,index) in titleList[activeIndex].list" :key="index" @click="gox(item)">
					<view class="box">
						<view class="tit">
							<image src="/static/loginImg/qq.png" mode=""></image>
							<view class="text">
								<view class="name">{{item.name}}</view>
								<view class="zw">职位：{{ titleList[activeIndex].label }}</view>
							</view>
						</view>
						<view class="bgtext">查看资料</view>
					</view>
					<view class="bigBoxs">
						<!-- <text>姓名：{{item.name}}</text> -->
						<text>电话：{{item.phone}}</text>
						<!-- <text class="over-ellipsis">地址：{{item.address}}</text> -->
					</view>
				</view>
				
				<NoData :show="titleList[activeIndex].list.length === 0" msg="暂无相关人员"></NoData>
			</view>

		</scroll-view>



	</view>
</template>

<script>
	import NoData from "@/components/NoData.vue"
	import fromDeatil from "@/components/fromAll.vue"
	import TopSearch from "@/components/TopSearch.vue"
	import { employees } from "@/variable/orderCenter.js"
	import { technician, workerWorker } from '@/components/api/api.js'
	export default {
		components: {
			fromDeatil,
			TopSearch,
			NoData
		},
		data() {
			return {
				query: '',
				activeIndex: 0,
				titleList: [{
						value: employees.TECHNICAL_PERSONNEL,
						label: '技术人员',
						list: []
					},
					{
						value: employees.MASTER,
						label: '工长',
						list: []
					}
				],
				act: 0,
				msg: '已完成',
				sAce: 0
			}
		},
		created() {
			this._technician()
		},
		methods: {
				searchValue(val) {
					this.query = val
					console.log(val)
					if(this.activeIndex == 0) {  // 技术
						this._technician()
					}else {
						this._workerWorker()
					}
				},
			// 标题点击
			clickTitle(index, value) {
				this.activeIndex = index
				if(index == 0) {  // 技术
					this._technician()
				}else {
					this._workerWorker()
				}
			},
			// 查询主管下的工人
			_workerWorker() {
				uni.showLoading({
					title: '加载中'
				});
				let parent_id = uni.getStorageSync('WORKERS_ID');
				workerWorker({
					parent_id,
					query: this.query
				}).then(res => {
					this.titleList[this.activeIndex].list = res.varList
				}).finally(() => {
					uni.hideLoading();
				})
			},
			// 查询主管下的技术员列表
			_technician() {
				uni.showLoading({
					title: '加载中'
				});
				let parent_id = uni.getStorageSync('WORKERS_ID')
				technician({
					parent_id,
					query: this.query
				}).then(res => {
					this.titleList[this.activeIndex].list = res.varList
				}).finally(() => {
					uni.hideLoading();
				})
			},
			getDetail(act) {
				if (act == 1) {
					uni.navigateTo({
						url: 'daiquerenxiangqing'
					})
				} else if (act == 2) {
					uni.navigateTo({
						url: 'weitongguoxiangqing'
					})
				} else {
					uni.navigateTo({
						url: 'yiquerenxiangqing'
					})
				}

			},


			gox(item) {
				uni.navigateTo({
					url: "./zgrenyuan?info=" + JSON.stringify(item) 
				})
			},

		},

	}
</script>

<style lang="scss" scoped>
	/* 人数 start */
	.person-num {
		padding: 0 30upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 55upx;

		.num {
			font-size: 26upx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #1A1A1A;
		}
	}

	/* 人数 end */

	.scroll-view-body {
		height: calc(100vh - 130upx - 55upx);
	}

	.numBox {
		padding: 40upx 40upx 260upx 40upx;
		background: white;

		.bigBox {
			border-radius: 8upx;
			border: 1upx solid #FFEFC0;
			margin-bottom: 15upx;

			.box {
				margin-top: 15upx;
				padding: 0 30upx;
				width: 610upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;

				.tit {
					display: flex;

					image {
						display: block;
						width: 80upx;
						height: 80upx;
						border-radius: 100%;
					}

					.text {
						margin-left: 22upx;

						.name {
							font-size: 32upx;
							font-family: PingFang SC;
							font-weight: 400;
							color: rgba(51, 51, 51, 1);
						}

						.zw {
							font-size: 24upx;
							font-family: PingFang SC;
							font-weight: 400;
							color: rgba(154, 154, 154, 1);
						}
					}
				}

				.bgtext {
					margin-left: auto;
					padding-top: 6upx;
					width: 130upx;
					height: 40upx;
					font-size: 26upx;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(255, 193, 13, 1);
					text-align: center;
					border: 1upx solid #FFEFC0;
					border-radius: 8upx;

				}
			}

			.bigBoxs {
				padding: 40upx;
				// height: 118upx;
				background: rgba(255, 255, 255, 1);

				text {
					display: block;
					font-size: 28upx;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
					line-height: 23px;
				}
			}
		}
	}


	.top {
		padding: 0 110upx;
		width: 530upx;
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
