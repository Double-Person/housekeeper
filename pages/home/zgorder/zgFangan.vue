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
    <scroll-view :scroll-y="true" class="scroll-view-body">
      <view class="padding-bottom150">
        <!-- :flag="8" -->
        <fromDeatil
          :msg="conversion(item.state)"
          v-for="(item, index) in titleList[activeIndex].list"
          :key="index"
          :item="item"
          @getDetail="getDetail"
        >
          <view class="slot-warp" v-if="item.state == 0">
            <view class="slot-not-active" @click="through(item, 2)"
              >不通过</view
            >
            <view class="slot-active" @click="through(item, 1)">通过</view>
          </view>
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
import { plantType } from "@/variable/plan.js";
import { workerorderApiProgramme } from "@/components/api/api.js";
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
          value: plantType.PASSED,
          label: "已通过",
          list: [],
        },
        {
          value: plantType.NOT_PASS,
          label: "未通过",
          list: [],
        },
      ],
      act: 1,
    };
  },
  components: {
    fromDeatil,
    Topsearch,
    NoData,
  },
  mounted() {
    this._workerorderApiProgramme();
  },
  methods: {
    // 搜索
    searchValue(val) {},
    clickTitle(index, value) {
      this.activeIndex = index;
      this._workerorderApiProgramme();
    },
    _workerorderApiProgramme() {
      let obj = {
        worker_id: uni.getStorageSync("WORKERS_ID"), // worker_id 主管id
        state: this.activeIndex, // *  state 0 待审核  1  通过   2  不通过
      };
      uni.showLoading({ title: "加载中" });
      workerorderApiProgramme(obj)
        .then((res) => {
          this.titleList[this.activeIndex].list = res.varList;
        })
        .finally(() => {
          uni.hideLoading();
        });
    },
    getDetail() {
      uni.navigateTo({
        url: "zgfanganxiangqing",
      });
    },

    // 不通过   通过
    through(info, status) {
      uni.navigateTo({
        url:
          "zgfanganNewIsThrou?userInfo=" +
          JSON.stringify(info) +
          "&status=" +
          status,
      });
    },
    conversion(state) {
      return (state == 0 && '待审核') || (state == 1 && '通过') || (state == 2 && '不通过')
    } 


  },
};
</script>

<style lang="scss" scoped>
@import "~@/common/style/tabList.scss";
.scroll-view-body {
  height: calc(100vh - 130upx - 110upx);
}
</style>
