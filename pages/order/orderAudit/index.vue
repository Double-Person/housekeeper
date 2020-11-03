<template>
  <view>
    <view class="state">
      <text
        :class="audit === 'review' ? 'statAct' : ''"
        @click="subType('review')"
        >审核中</text
      >
      <text
        :class="audit === 'haveBeenThrough' ? 'statAct' : ''"
        @click="subType('haveBeenThrough')"
        >已通过</text
      >
      <text
        :class="audit === 'noThrough' ? 'statAct' : ''"
        @click="subType('noThrough')"
        >未通过</text
      >
    </view>

    <scroll-view
      :scroll-y="true"
      class="scroll-view-body"
      :lower-threshold="100"
      @scrolltolower="scrolltolower"
    >
      <view class="padding-bottom150">
        <!-- :flag="8" -->
        <fromDeatil
          :msg="showMsg(item.mastertype)"
          :item="item"
          v-for="(item, index) in list"
          :key="index"
          @getDetail="getDetail"
        >
          <view class="slot-warp" v-if="audit === 'noThrough'">
            <view
              class="slot-active"
              @click="_start(item.order_id, TYPES.REVIEW)"
            >
              完成
            </view>
          </view>
        </fromDeatil>
        <NoData :show="!list.length"></NoData>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import NoData from "@/components/NoData.vue";
import fromDeatil from "@/components/fromAll.vue";
import { showMsg } from "@/utils/showMsg.js";
import { start } from "@/components/api/api.js";
import { workersOrderCenterAllStatus } from "@/variable/orderCenter.js";
export default {
  data() {
    return {
      audit: "review",
      showMsg: showMsg,
      TYPES: workersOrderCenterAllStatus,
    };
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    fromDeatil,
    NoData,
  },

  methods: {
    subType(type) {
      this.audit = type;
      uni.$emit("orderAuditEmit", type);
    },
    _start(order_id, types) {
      uni.navigateTo({
        url: "Start?order_id=" + order_id + "&types=" + types,
      });
    },
    // complete(order_id) {
    // 	let obj = {
    // 		order_id,
    // 		worker_id: uni.getStorageSync('WORKERS_ID'),
    // 		construction_type: 0,  // 0新订单、1售后订单
    // 		// bz: 0, // 0开工 、 1施工进度 、 2完成
    // 		bz: 2,
    // 		note: '',
    // 		urllist: ''
    // 	}
    // 	start(obj).then(res => {
    // 		uni.showToast({
    // 			title: res.mig,
    // 			icon: 'none'
    // 		})
    // 		uni.navigateTo({
    // 			url: './orderAll'
    // 		})
    // 	})
    // },
    scrolltolower() {},
    getDetail(item) {
      uni.navigateTo({
        url:
          "../../components/workersOrderDetail/allDetail?info=" +
          JSON.stringify(item),
      });
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
  margin-top: 19upx;
  display: flex;
  justify-content: space-between;

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
