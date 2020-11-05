<template>
  <scroll-view
    :scroll-y="true"
    class="scroll-view-tab-list-body"
  >
    <view class="padding-bottom150">
      <!-- :flag="8" -->
      <fromDeatil
        :msg="DIRECTORSHOWMSG(item.mastertype)"
        :item="item"
        v-for="(item, index) in list"
        :key="index"
        @getDetail="getDetail"
      >
	  <!-- 审核中 -->
	  <view class="slot-warp" v-if="item.mastertype == TYPES.REVIEW">
	  	<view class="slot-not-active" @click="isThrough(item.order_id, 2)">不通过</view>
	  	<view class="slot-active" @click="isThrough(item.order_id, 1)">通过</view>
	  </view>
	  <view class="slot-warp" v-if="item.mastertype == TYPES.USER_NOT_APPROVED">
	  	<view class="slot-active" @click="isThrough(item.order_id, 3)">重新提交</view>
	  </view>
	  
      </fromDeatil>
	  <NoData :show="list.length === 0"></NoData>
    </view>
  </scroll-view>
</template>

<script>
import NoData from "@/components/NoData.vue"
import fromDeatil from "@/components/fromAll.vue";
import { directorShowMsg } from '@/utils/showMsg.js'
import {workerdopt } from "@/components/api/api.js"

import { directorOrderCenterAllStatus } from "@/variable/orderCenter.js";
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      TYPES: directorOrderCenterAllStatus,
	  DIRECTORSHOWMSG: directorShowMsg,
    };
  },
  components: {
    fromDeatil,
	NoData
  },
  methods: {
    getDetail(info) {
		console.log(info)
		uni.navigateTo({
			url: '/components/directorOrderDetail/allDetail?orderInfo=' + JSON.stringify(info),
			
		})
		  
	},
	// 不通过 通过
	isThrough(order_id, state) {
		let obj = {
			worker_id: uni.getStorageSync('WORKERS_ID'),
			order_id, state
		}
	
		workerdopt(obj).then(res => {
			uni.showToast({ title: res.mig, icon: 'none' });
			this.$toIndex()
		})
	},
  },
};
</script>

<style lang="scss" scoped>
@import "~@/common/style/tabList.scss";
</style>

