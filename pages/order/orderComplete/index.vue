<template>
  <scroll-view :scroll-y="true" class="scroll-view-tab-list-body">
    <view class="padding-bottom150">
      <!-- :flag="8" -->
      <fromDeatil
        msg="完成"
        :item="item"
        v-for="(item, index) in list"
        :key="index"
        @getDetail="getDetail"
      >
        <view class="slot-warp">
          <view class="slot-active" @click="questionnaireSurvey(item.order_id)" v-if="!item.answer"
            >问卷调查</view
          >
          <view class="slot-active" @click="checkQuestionnaireSurvey(item.order_id)" v-if="item.answer">查看问卷</view>
        </view>
      </fromDeatil>
      <NoData :show="!list.length"></NoData>
    </view>
  </scroll-view>
</template>

<script>
import NoData from "@/components/NoData.vue";
import fromDeatil from "@/components/fromAll.vue";
export default {
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
    getDetail(item) {
		item.goods = this.$goods(item);
      uni.navigateTo({
         url: '../../components/workersOrderDetail/allDetail?info=' + JSON.stringify(item)
      });
    },
   // 问卷调查
    questionnaireSurvey(order_id) {
      uni.navigateTo({
        url: "../questionnaire/QuestionnaireSurvey?order_id=" + order_id,
      });
   	},
   	// 查看问卷
    checkQuestionnaireSurvey(order_id) {
      uni.navigateTo({
       url: "../questionnaire/CheckQuestionnaire?order_id=" + order_id,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/common/style/tabList.scss";
</style>