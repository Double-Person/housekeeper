<template>
  <view class="newfrom">
    <!-- 搜索 -->
    <TopSearch @search="search"></TopSearch>

    <view class="list-view">
      <!-- 横向滚动 -->
      <scroll-view :scroll-x="true" class="top-scroll-view">
        <view class="top">
          <view
            :class="{ active: currentTabBar === item.value }"
            v-for="(item, index) in topBarList"
            :key="item.value"
            @click="topBarActive(index, item.value)"
            >{{ item.label }}</view
          >
        </view>
      </scroll-view>
	 
      <!-- 全部 -->
      <zgOrderAll v-show="currentTabBar == statusObj.ALL" />
      <!-- 施工 -->
      <zgOrderConstuction v-show="currentTabBar == statusObj.CONSTRUCTION" />
      <!-- 审核 -->
      <zgOrderAudit v-show="currentTabBar == statusObj.AUDIT" />
      <!-- 客户确认 -->
      <zgOrderConfirmation
        v-show="currentTabBar == statusObj.CUSTOMER_CONFIRMATION"
      />
      <!-- 质保 -->
      <zgOrderQuality v-show="currentTabBar == statusObj.QUALITY_ASSURANCE" />
      <!-- 完成 -->
      <zgOrderComplete v-show="currentTabBar == statusObj.COMPLETE" />
      <!-- 取消 -->
      <zgOrderCancel v-show="currentTabBar == statusObj.CANCEL" />
	  
	   
    </view>
	
  </view>
</template>

<script>
	
import TopSearch from "@/components/TopSearch.vue";

import zgOrderAll from "./zgOrderAll"; // 全部
import zgOrderConstuction from "./zgOrderConstuction"; // 施工
import zgOrderAudit from "./zgOrderAudit"; // 审核
import zgOrderConfirmation from "./zgOrderConfirmation"; // 客户确认
import zgOrderQuality from "./zgOrderQuality"; // 质保
import zgOrderComplete from "./zgOrderComplete"; // 完成
import zgOrderCancel from "./zgOrderCancel"; // 取消

import { statusObj } from "@/variable/orderCenter.js";

export default {
  data() {
    return {
      currentTabBar: -1,
      statusObj: statusObj,
      topBarList: [
        {
          value: statusObj.ALL,
          label: "全部",
        },
        {
          value: statusObj.CONSTRUCTION,
          label: "施工",
        },
        {
          value: statusObj.AUDIT,
          label: "审核",
        },
        {
          value: statusObj.CUSTOMER_CONFIRMATION,
          label: "客户确认",
        },
        {
          value: statusObj.QUALITY_ASSURANCE,
          label: "质保",
        },
        {
          value: statusObj.COMPLETE,
          label: "完成",
        },
        {
          value: statusObj.CANCEL,
          label: "取消",
        },
      ],
    };
  },
  components: {
    TopSearch,
    zgOrderAll,
    zgOrderConstuction,
    zgOrderAudit,
    zgOrderConfirmation,
    zgOrderQuality,
    zgOrderComplete,
    zgOrderCancel,

  },
  created() {
    this.currentTabBar = this.topBarList && this.topBarList[0].value;
  },

  methods: {
    scrolltolower(event) {
      console.log(event);
    },
    topBarActive(index, value) {
      this.currentTabBar = value; //
    },

    // 搜索
    search(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-view {
  height: calc(100vh - 110upx);
}

.top-scroll-view {
  width: 100%;
  height: 110upx;
  background: #fff;
  overflow: hidden;
}

.body-scroll-view {
  height: calc(100% - 110upx);

  .block {
    display: block;
    padding-bottom: 150upx;
  }
}

.top {
  width: 130%;
  height: 110upx;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
}

.top view {
  height: 61upx;
  float: left;
  margin-left: 67upx;
  font-size: 32upx;
  margin-top: 21upx;
  line-height: 61upx;
}

.top view:nth-of-type(1) {
  margin-left: 9upx;
}

.active {
  border-bottom: 6upx solid #ffc823;
  font-weight: 700;
}

.state {
  width: 710upx;
  margin-top: 19upx;
  // height:80upx;
  display: flex;
  justify-content: space-between;
  // padding: 0 20upx;
}

.states {
  width: 530upx;
  margin-top: 19upx;
  display: flex;
  justify-content: space-between;
  padding: 0 110upx;
}

.state text {
  display: block;
  font-size: 32upx;
  padding: 19upx 47upx;
  border: 1upx solid #191919;
  border-radius: 10upx;
}

.state .statAct {
  background: #ffc823;
  color: #fff;
  border: none;
}
</style>
