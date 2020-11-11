<template>
  <!-- 施工 -->
  <scroll-view :scroll-y="true" class="scroll-view-tab-list-body">
    <view class="state jc-around">
      <text
        :class="audit === 'review' ? 'statAct' : ''"
        @click="subType('review')"
        >待开工</text
      >
      <text
        :class="audit === 'haveBeenThrough' ? 'statAct' : ''"
        @click="subType('haveBeenThrough')"
        >施工中</text
      >
    </view>
    <view class="padding-bottom150">
      <!-- :flag="8" -->
      <fromDeatil
        :msg="
          (audit == 'review' && '开工') ||
          (audit == 'haveBeenThrough' && '施工中')
        "
        :item="item"
        v-for="(item, index) in list"
        :key="index"
        @getDetail="getDetail"
      >
        <view class="slot-warp" v-if="audit == 'review'">
          <view class="slot-active" @click="starts(item.order_id, TYPES.START)"
            >开工</view
          >
        </view>

        <view class="slot-warp" v-if="audit == 'haveBeenThrough'">
          <view
            class="slot-not-active"
            @click="starts(item.order_id, TYPES.CONSTRUCTION)"
            >添加进度</view
          >
          <view class="slot-active" @click="starts(item.order_id, TYPES.REVIEW)"
            >完成</view
          >
        </view>
      </fromDeatil>
      <NoData :show="list.length === 0"></NoData>
    </view>
  </scroll-view>
</template>

<script>
import NoData from "@/components/NoData.vue";
import fromDeatil from "@/components/fromAll.vue";
import { workersOrderCenterAllStatus } from "@/variable/orderCenter.js";

export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      audit: "review",
      TYPES: workersOrderCenterAllStatus,
    };
  },

  components: {
    fromDeatil,
    NoData,
  },
  methods: {
    getDetail(item) {
		item.goods = this.$goods(item);
      uni.navigateTo({
        url:
          "../../components/workersOrderDetail/allDetail?info=" +
          JSON.stringify(item),
      });
    },
    starts(order_id, types) {
      uni.navigateTo({
        url: "Start?order_id=" + order_id + "&types=" + types,
      });
    },

    subType(type) {
      this.audit = type;
      this.$emit("orderConstuction", type);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/common/style/tabList.scss";

.state {
  width: 710upx;
  margin-top: 19upx;
  display: flex;
  justify-content: space-between;

  text {
    display: block;
    font-size: 32upx;
    padding: 19upx 47upx;
    border: 1upx solid #191919;
    border-radius: 10upx;
  }
}

.jc-around {
  justify-content: space-around;
}

.statAct {
  background: #ffc823;
  color: #fff;
  border: none !important;
}
</style>
