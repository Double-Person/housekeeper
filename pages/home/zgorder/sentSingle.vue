<template>
	<view class="newfrom">
		<Topsearch @search="searchValue" placeholder="请输入用户名,手机号,商品名搜索" />
		<!--  -->
		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{ active: index === activeIndex }" @click="clickTitle(index, item.value)">{{ item.label }}</view>
		</view>


		<scroll-view :scroll-y="true" class="scroll-view-body">
			<view class="padding-bottom150">
				<fromDeatil showName msg="已派发" doortime :showAddress="false" :types="types" :item="item" v-for="(item, index) in titleList[activeIndex].list" :key="index" @getDetail="getDetail">
					
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
		workerOrderList
	} from "@/components/api/api.js";
	export default {
		components: {
			fromDeatil,
			Topsearch,
			NoData,
		},
		data() {
			return {
				query: '',
				types: '技术',
				activeIndex: 0,
				worker_id: uni.getStorageSync("WORKERS_ID"),
				titleList: [{
						value: 1,
						label: "技术员",
						list: [],
					},
					{
						value: 2,
						label: "工长",
						list: [],
					},
				],
			};
		},
		mounted() {
			this._workerOrderList(1);
		},

		methods: {
			// 搜索
			searchValue(val) {
				this.query = val
				// worker_id 主管id   levels 1技术人员 2工人
				if (this.activeIndex === 0) {
					this._workerOrderList(1);
				} else {
					this._workerOrderList(2);
				}
			},

			clickTitle(index, value) {
				this.activeIndex = index;
				if (index === 0) {
					this.types = '技术';
					this._workerOrderList(1);
				} else {
					this.types = '工长';
					this._workerOrderList(2);
				}


			},
			getDetail(info) {

			},
			// 
			_workerOrderList(levels) {
				// worker_id 主管id   levels 1技术人员 2工人
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				workerOrderList({
					worker_id: this.worker_id,
					query: this.query,
					levels
				}).then((res) => {
					this.titleList[0].list = res.varList;
					if (levels == 1) {
						this.titleList[0].list = res.varList;
					}
					if (levels == 2) {
						this.titleList[1].list = res.varList;
					}
				}).catch(() => {
					uni.showToast({
						title: '系统错误',
						icon: 'none'
					})
				}).finally(() => {
					uni.hideLoading()
				})
			},


			// 派单
			distribute(item) {
				item.goods = this.$goods(item);
				if (this.activeIndex == 0) {
					uni.navigateTo({
						url: "zgfanganNew?userInfo=" + JSON.stringify(item) + '&selectType=technology',
					});

				} else {
					uni.navigateTo({
						url: "zgfanganNew?userInfo=" + JSON.stringify(item) + '&selectType=master',
					});
				}

			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "~@/common/style/tabList.scss";

	.scroll-view-body {
		height: calc(100vh - 130upx - 110upx);
	}
</style>
