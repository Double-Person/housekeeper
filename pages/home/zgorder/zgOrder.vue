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
      <zgOrderAll v-show="currentTabBar == statusObj.ALL" :list='topBarList[this.currentTabBar].list' />
      <!-- 施工 -->
      <zgOrderConstuction v-show="currentTabBar == statusObj.CONSTRUCTION" :list='topBarList[this.currentTabBar].list' />
      <!-- 审核 -->
      <zgOrderAudit v-show="currentTabBar == statusObj.AUDIT" :list='topBarList[this.currentTabBar].list' />
      <!-- 客户确认 -->
      <zgOrderConfirmation
        v-show="currentTabBar == statusObj.CUSTOMER_CONFIRMATION" :list='topBarList[this.currentTabBar].list' />
      <!-- 质保 -->
      <zgOrderQuality v-show="currentTabBar == statusObj.QUALITY_ASSURANCE" :list='topBarList[this.currentTabBar].list' />
      <!-- 完成 -->
      <zgOrderComplete v-show="currentTabBar == statusObj.COMPLETE" :list='topBarList[this.currentTabBar].list' />
      <!-- 取消 -->
      <zgOrderCancel v-show="currentTabBar == statusObj.CANCEL" :list='topBarList[this.currentTabBar].list' />
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

import {
  statusObj,
  directorOrderCenterAllStatus,
} from "@/variable/orderCenter.js";
import { ordertype } from "@/components/api/api.js";

export default {
  data() {
    return {
      currentTabBar: -1,
      statusObj: statusObj,
      TYPE: directorOrderCenterAllStatus,
      topBarList: [
        {
          value: statusObj.ALL,
          label: "全部",
          list: [],
        },
        {
          value: statusObj.CONSTRUCTION,
          label: "施工",
          list: [],
        },
        {
          value: statusObj.AUDIT,
          label: "审核",
          list: [],
        },
        {
          value: statusObj.CUSTOMER_CONFIRMATION,
          label: "客户确认",
          list: [],
        },
        {
          value: statusObj.QUALITY_ASSURANCE,
          label: "质保",
          list: [],
        },
        {
          value: statusObj.COMPLETE,
          label: "完成",
          list: [],
        },
        {
          value: statusObj.CANCEL,
          label: "取消",
          list: [],
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
    this._ordertype('')
  },

  methods: {

    topBarActive(index, value) {
      this.currentTabBar = value; //
      if(this.statusObj.CONSTRUCTION == this.currentTabBar) {  // 施工

      }
    },

    /* worker_id 主管id
*  mastertype  订单的状态   0待开工、1施工中、2审核中、3已通过、4未通过、
* 5质保中、6已完成、7取消、8售后待处理、9售后处理中、10售后已完成
* 11用户待通过、12用户不通过
*/

    _ordertype(mastertype) {
      let obj = {
        worker_id: uni.getStorageSync("WORKERS_ID"),
        mastertype: mastertype || '',
      };
      uni.showLoading({
        title: "加载中",
      });
  
      ordertype(obj)
        .then((res) => {
          this.topBarList[this.currentTabBar].list = res.varList;
        })
        .finally(() => {
          uni.hideLoading();
        });
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
