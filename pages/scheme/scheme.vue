<template>
	<view class="newfrom">
		<Topsearch @search='searchValue' placeholder="请输入用户名,手机号,商品名搜索" />
		<!--  -->
		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{active: index === activeIndex}" @click="clickTitle(index, item.value)">{{item.label}}</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-body">
			<view class="padding-bottom150">
				<fromDeatil :msg="activeIndex == 0 && '进行中' || activeIndex == 1 && '已完成' " :item="item" v-for="(item,index) in titleList[activeIndex].list"
				 :key="index" @getDetail="getDetail"></fromDeatil>
				<NoData :show="titleList[activeIndex].list.length === 0"></NoData>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import fromDeatil from "@/components/fromAll.vue"
	import Topsearch from "@/components/TopSearch.vue"
	import NoData from "@/components/NoData.vue"
	import {
		masterProgramme
	} from "@/components/api/api.js"
	import {
		workersPlant
	} from '@/variable/orderCenter.js'
	export default {
		data() {
			return {
				query: '',
				activeIndex: 0,
				titleList: [{
						value: workersPlant.ONGOING,
						label: '进行中',
						list: []
					},
					{
						value: workersPlant.COMPLETED,
						label: '已完成',
						list: []
					}
				],
			}
		},
		components: {
			fromDeatil,
			Topsearch,
			NoData
		},
		created() {
			this._masterProgramme(0)
		},
		methods: {
			searchValue(val) {
				this.query = val
				this._masterProgramme(this.activeIndex)
			},

			clickTitle(index, value) {
				this.activeIndex = index
				this._masterProgramme(index)
			},
			getDetail(info) {
				let status = this.activeIndex == 0 && '进行中' || this.activeIndex == 1 && '已完成'
				this.$aglinGlobalDetail(info.order_id, status)
			},
			_masterProgramme(stype) {
				// stype  0 进行中  1 已完成
				uni.showLoading({
					title: "加载中",
					mask:true
				});
				let obj = {
					query: this.query,
					worker_id: uni.getStorageSync("WORKERS_ID"), // worker_id 主管id
					stype
				}
				masterProgramme(obj).then(res => {
					this.titleList[this.activeIndex].list = res.varList
				}).finally(() => {
					uni.hideLoading();
				});
			},
			// 施工跳转
			sgDetail() {
				uni.navigateTo({
					url: "./sgDetail"
				})
			},

		},

	}
</script>

<style lang="scss" scoped>
	@import '@/common/style/tabList.scss';

	.scroll-view-body {
		height: calc(100vh - 130upx - 110upx);
	}
</style>
