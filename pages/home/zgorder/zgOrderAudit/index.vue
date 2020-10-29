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
          msg="msg"
          :item="item"
          v-for="(item, index) in list"
          :key="index"
          @getDetail="getDetail(act)"
        >
          <view class="slot-warp">
            <view class="slot-not-active" @click="notThrough">不通过</view>
            <view class="slot-active" @click="through">通过</view>
          </view>
        </fromDeatil>
		<NoData show></NoData>
      </view>
    </scroll-view>
  </view>
</template>

<script>
	import NoData from "@/components/NoData.vue"
import fromDeatil from "@/components/fromAll.vue"
export default {
  data() {
    return {
      audit: "review",
      list: [],
    };
  },
  components: {
    fromDeatil,
	NoData
  },
  methods: {
    subType(type) {
      this.audit = type;
    },
    scrolltolower() {},
    getDetail() {},
    // 不通过
    notThrough() {
      uni.navigateTo({
        url: "zgfanganquxiao",
      });
    },
    // 通过
    through() {
      uni.navigateTo({
        url: "zgfanganNew",
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