<template>
	<view class="newfrom">
		<TopSearch @search="search" placeholder="请输入用户名,手机号,商品名搜索"></TopSearch>

		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{ active: index === activeIndex }" @click="clickTitle(index, item.value)">{{ item.label }}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-tab-list-body">
			<view class="padding-bottom150">
				<fromDeatil :msg="
            (item.opinion_state == 1 && '进行中') ||
            (item.opinion_state == 0 && '已完成')
          "
				 :item="item" v-for="(item, index) in titleList[activeIndex].list" :key="index" @getDetail="getDetail">
					<view class="slot-warp" v-if="item.opinion_state == 1">
						<view class="slot-active" @click="complete(item.orderopinion_id)">完成</view>
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
		listorder,
		opinionstate
	} from "@/components/api/api.js"
	export default {
		data() {
			return {
				query: '',
				currentTabBar: -1,
				activeIndex: 0,
				titleList: [{
						value: 0,
						label: "全部",
						list: [],
					},
					{
						value: 1,
						label: "进行中",
						list: [],
					},
					{
						value: 2,
						label: "已完成",
						list: [],
					},
				],
			};
		},
		components: {
			fromDeatil,
			TopSearch,
			NoData
		},
		created() {
			this.getList(0, '');
		},
		methods: {
			// 搜索
			search(value) {
				this.query = value
				if (this.currentTabBar == 0) { // 全部
					this.getList(0, '');
				} else if (this.currentTabBar == 1) { // 进行中
					this.getList(1, 1);
				} else if (this.currentTabBar == 2) { // 已完成
					this.getList(2, 0);
				}
			},
			clickTitle(index, value) {
				this.activeIndex = index;
				this.currentTabBar = value;

				if (this.currentTabBar == 0) { // 全部
					this.getList(0, '');
				} else if (this.currentTabBar == 1) { // 进行中
					this.getList(1, 1);
				} else if (this.currentTabBar == 2) { // 已完成
					this.getList(2, 0);
				}
			},
			// * 查询工人的订单的施工意见
			// * opinion_state 状态(0已解决、1未解决)
			getList(index, opinion_state) {
				let obj = {
					query: this.query,
					master_id: uni.getStorageSync('WORKERS_ID'),
					opinion_state
				}
				listorder(obj).then(res => {
					console.log(res)
					this.titleList[index].list = res.varList
				})
			},
			complete(orderopinion_id) {
				opinionstate({
					orderopinion_id
				}).then(res => {
					uni.showToast({
						title: res.mig,
						icon: 'none'
					})
					this.clickTitle(this.activeIndex, this.currentTabBar)
				})
			},
			getDetail(info) {
				uni.navigateTo({
					url: "fankui?info=" + JSON.stringify(info),
				});
			},


		},
	};
</script>

<style lang="scss" scoped>
	@import "~@/common/style/tabList.scss";

	.top {
		padding: 0 20upx;
		width: 710upx;
	}
</style>
