<template>
  <view class="newfrom">
    <Topsearch @searchValue="searchValue" placeholder="搜索订单" />
    <!--  -->
    <view class="top">
      <view
        v-for="(item, index) in titleList"
        :key="index"
        :class="{ active: index === activeIndex }"
        @click="clickTitle(index, item.value)"
        >{{ item.label }}</view
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
          v-for="(item, index) in titleList[activeIndex].list"
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
import fromDeatil from "@/components/fromAll.vue";
import Topsearch from "@/components/TopSearch.vue";
import { plantType } from "@/variable/plan.js";
export default {
  data() {
    return {
      activeIndex: 0,
      titleList: [
        {
          value: plantType.TO_PASS,
          label: "待通过",
         list: [],
        },
        {
          value: plantType.NOT_PASS,
          label: "未通过",
          list: [],
        },
        {
          value: plantType.PASSED,
          label: "已通过",
          list: [],
        },
      ],
      act: 1,
    };
  },
  components: {
    fromDeatil,
    Topsearch,NoData
  },
  methods: {
    // 搜索
    searchValue(val) {},
    // 滚动
    scrolltolower(eve) {
      console.log(eve);
    },
    clickTitle(index, value) {
      this.activeIndex = index;
    },
    getDetail(act) {
      console.log(1);
      uni.navigateTo({
        url: "zgfanganxiangqing",
      });
    },
    // 施工跳转
    sgDetail() {
      uni.navigateTo({
        url: "./sgDetail",
      });
	},
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
  height: calc(100vh - 130upx - 110upx);
}
</style>
