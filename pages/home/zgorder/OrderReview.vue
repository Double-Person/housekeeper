<template>
	<view class="newfrom">
		<Topsearch @search="searchValue" placeholder="请输入用户名,手机号,商品名搜索" />
		<!--  -->
		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{ active: index === activeIndex }" @click="clickTitle(index, item.value)">{{ item.label }}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-body">
			<view class="padding-bottom150">
				<!-- :flag="8" -->
				<fromDeatil :msg="conversion(item.states)" v-for="(item, index) in titleList[activeIndex].list" :key="index" :item="item"
				 @getDetail="getDetail">
					<view class="slot-warp" v-if="item.states == 2">
						<view class="slot-active" @click="_againshenhe(item.afteragreement_id, item.orderquality_id)">重新审核</view>
					</view>
				</fromDeatil>
				<NoData :show="titleList[activeIndex].list.length === 0"></NoData>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import NoData from "@/components/NoData.vue";
	import fromDeatil from "@/components/fromAll.vue";
	import Topsearch from "@/components/TopSearch.vue";

	import {
		positionObj,
		orderReview
	} from "@/variable/orderCenter.js";

	import {
		shenhe, againshenhe
	} from "@/components/api/api.js";
	export default {
		data() {
			return {
				query: '',
				activeIndex: 0,
				titleList: [{
						value: orderReview.TO_PASS,
						label: "待审核",
						list: [],
					},
					{
						value: orderReview.PASSED,
						label: "合格",
						list: [],
					},
					// {
					// 	value: orderReview.NOT_PASS,
					// 	label: "不合格",
					// 	list: [],
					// },
				],
				act: 1,
			};
		},
		components: {
			fromDeatil,
			Topsearch,
			NoData,
		},
		
		async mounted() {
			await this.isNotPass();
			await this._shenhe(this.activeIndex)
		},
		methods: {
			isNotPass() {			
				try{
					let levels = uni.getStorageSync('HOUSE_LEVELS');
					if (levels == positionObj.DIRECTOR) {  // 主管
						this.titleList= [{
								value: orderReview.TO_PASS,
								label: "待审核",
								list: [],
							},
							{
								value: orderReview.PASSED,
								label: "合格",
								list: [],
							},
							// {
							// 	value: orderReview.NOT_PASS,
							// 	label: "不合格",
							// 	list: [],
							// },
						]
					}
					if (levels == positionObj.MASTER) {   // 工长
						this.titleList= [{
								value: orderReview.TO_PASS,
								label: "待审核",
								list: [],
							},
							{
								value: orderReview.PASSED,
								label: "合格",
								list: [],
							},
							{
								value: orderReview.NOT_PASS,
								label: "不合格",
								list: [],
							},
						]
					}
					
				}catch(e){
					//TODO handle the exception
				}
			},
			// 搜索
			searchValue(val) {
				this.query = val
				this._shenhe(this.activeIndex)
			},
			clickTitle(index, value) {
				this.activeIndex = index;
				this._shenhe(value)
			},
			_shenhe() {
				let type = '';
				let levels = uni.getStorageSync('HOUSE_LEVELS');
				if (levels == positionObj.DIRECTOR) {
					type = 1
				}
				if (levels == positionObj.MASTER) {
					type = 0
				}

				let obj = {
					query: this.query,
					type, // type  0工人 1主管
					userid: uni.getStorageSync("WORKERS_ID"), // worker_id 主管id
					states: this.activeIndex, // *  states 0待审核、 1合格、2不合格
				};
				uni.showLoading({
					title: "加载中"
				});
				shenhe(obj)
					.then((res) => {
						this.titleList[this.activeIndex].list = res.varList;
					})
					.finally(() => {
						uni.hideLoading();
					});
			},
			getDetail(info) {
				
				if(this.activeIndex == 2) {
					uni.navigateTo({
						url: 'OrderReviewDetail?afteragreement_id=' + info.afteragreement_id
					})
					return false
				}
				uni.navigateTo({
					url: './moreDetail?orderquality_id=' + info.orderquality_id
				})
				
			},
			
			_againshenhe(afteragreement_id, orderquality_id) {
				uni.navigateTo({
					url: './AgainshenheCommit?afteragreement_id=' + afteragreement_id + '&orderquality_id=' + orderquality_id
				})
				return false;
				againshenhe({afteragreement_id, }).then(res => {
					uni.showToast({
						title: res.mig,
						icon: 'none'
					})
					if(res.result == "success") {
						
						return false;
					}
					this._shenhe(this.activeIndex)
					
				})
			},

			conversion(state) {
				return (state == 0 && '待审核') || (state == 1 && '合格') || (state == 2 && '不合格')
			}


		},
	};
</script>

<style lang="scss" scoped>
	@import "~@/common/style/tabList.scss";

	.scroll-view-body {
		height: calc(100vh - 130upx - 110upx);
	}
</style>
