<template>
	<view>
		<view class="state">
			<text :class="audit === 'review' ? 'statAct' : ''" @click="subType('review')">审核中</text>
			<!-- <text :class="audit === 'noThrough' ? 'statAct' : ''" @click="subType('noThrough')">未通过</text> -->
			<text :class="audit === 'through' ? 'statAct' : ''" @click="subType('through')">已通过</text>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view-body">
			<view class="padding-bottom150">
				<!-- :flag="8" -->
				<fromDeatil :msg="DIRECTORSHOWMSG(item.mastertype)" :item="item" v-for="(item, index) in list" :key="index" @getDetail="getDetail">
					<view class="slot-warp" v-if="item.mastertype == TYPES.USER_NOT_APPROVED">
						<view class="slot-active" @click="aglinSubmit(item.order_id, 3)">重新提交</view>
					</view>
				</fromDeatil>
				<NoData :show="list.length === 0"></NoData>
			</view>
		</scroll-view>
	</view>
</template>


<script>
	import NoData from "@/components/NoData.vue"
	import fromDeatil from "@/components/fromAll.vue"
	import { directorShowMsg } from '@/utils/showMsg.js'
	import {workerdopt } from "@/components/api/api.js"
	import {
		directorOrderCenterAllStatus
	} from "@/variable/orderCenter.js";
	export default {
		props: {
			list: {
				type: Array,
				default: () => [],
			},
		},
		data() {
			return {
				audit: 'review',
				TYPES: directorOrderCenterAllStatus,
				DIRECTORSHOWMSG: directorShowMsg,
			};
		},
		components: {
			fromDeatil,
			NoData
		},
		methods: {
			subType(type) {
				this.audit = type;
				uni.$emit("directorOrderConfirmation", type);
			},
			getDetail(info) {
				let obj = {
					status: (info.states == 1 && '已确认') || (info.states == 4 && '待确认') || (info.states == 3 && '未通过'),
					order_id: info.order_id,
					image: info.image,
					order_number: info.order_number,
					contact: info.contact,
					phone: info.phone,
					province: info.province,
					citys: info.citys, 
					district_county: info.district_county, 
					address_details: info.address_details,
				}
				obj.goods = this.$goods(info);
				uni.navigateTo({// workersOrderDetail
					url: '/components/workersOrderDetail/allDetail?info=' + JSON.stringify(obj),
				})
				  
			},
			async aglinSubmit(info) {
				let obj = {
					worker_id: uni.getStorageSync('WORKERS_ID'),
					order_id, state
				}
					
				let res = await workerdopt(obj);
				await uni.showToast({ title: res.mig || '提交失败', icon: 'none' });
				await this.$toIndex()
			},
	
		},
	};
</script>

<style lang="scss" scoped>
	@import "~@/common/style/tabList.scss";

	.scroll-view-body {
		height: calc(100vh - 130upx - 180upx);
	}

	.state {
		width: 710upx;
		margin: 19upx auto 0 auto;
		display: flex;
		justify-content: space-around;

		// padding: 0 20upx;
		text {
			display: block;
			font-size: 32upx;
			padding: 19upx 47upx;
			border: 1upx solid #191919;
			border-radius: 10upx;
		}

		.statAct {
			background: #ffc823;
			color: #fff;
			border: none !important;
		}
	}
</style>
