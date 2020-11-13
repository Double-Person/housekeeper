<template>
	<view class="newfrom">
		<TopSearch @search='searchValue' placeholder="请输入用户名,手机号,商品名搜索"></TopSearch>

		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{ active: index === activeIndex }" @click="clickTitle(index, item.value)">{{ item.label }}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-tab-list-body">
			<view class="padding-bottom150">
				<!-- :flag="8" -->
				<fromDeatil :msg="titleList[activeIndex].label" :item="item" v-for="(item, index) in titleList[activeIndex].list" :key="index" 
				@getDetail="getDetail">
					<view class="slot-warp" v-if="item.aftersale_state == 0">
						<view class="slot-not-active" @click="isThrough(2, item)">不同意</view>
						<view class="slot-active" @click="isThrough(1, item)">同意</view>
					</view>
				
				</fromDeatil>
				<NoData :show="titleList[activeIndex].list.length === 0"></NoData>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import NoData from "@/components/NoData.vue"
	import fromDeatil from "@/components/fromAll.vue";
	import TopSearch from "@/components/TopSearch.vue";

	import {
		userlist
	} from "@/components/api/api.js"
	import {
		afterProcessing,
		positionObj
	} from "@/variable/orderCenter.js";
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
						value: afterProcessing.REFUND,
						label: "退款",
						list: [],
					},
					{
						value: afterProcessing.QUALITY_PROBLEM,
						label: "质量问题",
						list: [],
					},
				],
			};
		},
		created() {
			this._userlist(0)
		},
		methods: {
			// 标题点击
			clickTitle(index, value) {
				this.activeIndex = index;
				this._userlist(index)
			},
			searchValue(val) {
				this.query = val
				this._userlist(this.activeIndex)
			},

			_userlist( aftersale_type) {
				uni.showLoading({
					title:'加载中'
				})
				let levels = uni.getStorageSync('HOUSE_LEVELS'),
					usertype = '';
				if (levels == positionObj.DIRECTOR) { // 主管
					usertype = 2
				} else if (levels == positionObj.MASTER) { // 工长
					usertype = 1
				}


				let obj = {
					query: this.query,
					worker_id: uni.getStorageSync('WORKERS_ID'),
					usertype, //  0用户、1工人、2主管
					aftersale_type  // 售后类型(0退款、1质量问题)
				}
				userlist(obj).then(res => {
					this.titleList[this.activeIndex].list = res.varList
				}).finally(() => {
					uni.hideLoading()
				})
			},
			getDetail(info) {
				info.goods = this.$goods(info)
				uni.navigateTo({
					url: './shouhouxiangqing?info=' + JSON.stringify(info)
				})
			},
		
			isThrough(isThrough, info) {
				info.goods = this.$goods(info);
				delete info.addresid;
				uni.navigateTo({
					url: "../home/zgorder/afterSaleCommit/IsThrough?isThrough=" + isThrough + '&info=' + JSON.stringify(info),
				});
			},
			
		
		},
	};
</script>

<style lang="scss" scoped>
	@import "~@/common/style/tabList.scss";
</style>
