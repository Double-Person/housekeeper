<template>
  <scroll-view
    :scroll-y="true"
    class="scroll-view-tab-list-body"
    :lower-threshold="100"
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
        <!-- 待开工 -->
        <view class="slot-warp" v-if="item.mastertype == TYPES.START">
          <view class="slot-active" @click="start(item.order_id, TYPES.START)"
            >开工</view
          >
        </view>
        <!-- 施工中 -->
        <view class="slot-warp" v-if="item.mastertype == TYPES.CONSTRUCTION">
          <view
            class="slot-not-active"
            @click="start(item.order_id, TYPES.CONSTRUCTION)"
            >添加进度</view
          >
          <view class="slot-active" @click="start(item.order_id, TYPES.REVIEW)"
            >完成</view
          >
        </view>
        <!-- s审核中未通过 -->
        <view class="slot-warp" v-if="item.mastertype == TYPES.NOT_THROUGH">
          <view class="slot-active" @click="start(item.order_id, TYPES.REVIEW)"
            >完成</view
          >
        </view>

        <view class="slot-warp" v-if="item.mastertype == TYPES.COMPLETED">
          <view class="slot-active" @click="questionnaireSurvey(item.order_id)" v-if="!item.answer"
            >问卷调查</view
          >
          <view class="slot-active" @click="checkQuestionnaireSurvey(item.order_id)" v-if="item.answer">查看问卷</view>
        </view>
      </fromDeatil>
      <NoData :show="list.length === 0"></NoData>
    </view>
  </scroll-view>
</template>

<script>
import NoData from "@/components/NoData.vue";
import fromDeatil from "@/components/fromAll.vue";
import { showMsg } from "@/utils/showMsg.js";
import { start } from "@/components/api/api.js";
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
      showMsg: showMsg,
      TYPES: workersOrderCenterAllStatus,
    };
  },
  components: {
    fromDeatil,
    NoData,
  },

  methods: {

    getDetail(item) {
      uni.navigateTo({
         url: '../../components/workersOrderDetail/allDetail?info=' + JSON.stringify(item)
      });
    },
    start(order_id, types) {
      uni.navigateTo({
        url: "Start?order_id=" + order_id + "&types=" + types,
      });
    },
   // 问卷调查
    questionnaireSurvey(order_id) {
      uni.navigateTo({
        url: "../questionnaire/QuestionnaireSurvey?order_id=" + order_id
      });
	},
	// 查看问卷
    checkQuestionnaireSurvey(order_id) {
      uni.navigateTo({
       url: "../questionnaire/CheckQuestionnaire?order_id=" + order_id
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/common/style/tabList.scss";
</style>
