<template>
  <view class="newfrom">
    <TopSearch @search="search"></TopSearch>

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
      class="scroll-view-tab-list-body"
      :lower-threshold="100"
      @scrolltolower="scrolltolower"
    >
      <view class="padding-bottom150">
        <fromDeatil
          :msg="
            (item.states == 1 && '已确认') ||
            (item.states == 4 && '待确认') ||
            (item.states == 3 && '未通过')
          "
          :item="item"
          v-for="(item, index) in titleList[activeIndex].list"
          :key="index"
          @getDetail="getDetail"
          @butongguo="butongguo"
          @tongyi="tongyi"
        ></fromDeatil>
		<NoData show></NoData>
      </view>
    </scroll-view>



  </view>
</template>

<script>
	import NoData from "@/components/NoData.vue"
import fromDeatil from "@/components/fromAll.vue";
import TopSearch from "@/components/TopSearch.vue";
export default {
  data() {
    return {
      currentTabBar: -1,
      activeIndex: 0,
      titleList: [
        {
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
  methods: {
    // 搜索
    search(value) {
      console.log(value);
    },
    clickTitle(index, value) {
      this.activeIndex = index;
      this.currentTabBar = value;
      this.getList();
    },
    // 获取列表
    getList() {},
    scrolltolower(e) {},
    getDetail(act) {
      uni.navigateTo({
        url: "fankui",
      });
    },

    // 施工跳转
    sgDetail() {
      uni.navigateTo({
        url: "./sgDetail",
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
