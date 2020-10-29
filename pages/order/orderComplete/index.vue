<template>
  <scroll-view
    :scroll-y="true"
    class="scroll-view-tab-list-body"

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
	  	<view class="slot-active" @click="questionnaireSurvey(item)">问卷调查</view>
	  	<view class="slot-active">查看问卷</view>
	  </view>
      </fromDeatil>
	   <NoData show></NoData>
    </view>
  </scroll-view>
</template>

<script>
	import NoData from "@/components/NoData.vue"
import fromDeatil from "@/components/fromAll.vue";
export default {
  data() {
    return {
      list: [],
    };
  },
  components: {
    fromDeatil,
	NoData
  },
  methods: {
    getDetail() {},
	// 问卷调查
	questionnaireSurvey() {
		uni.navigateTo({
			url: 'wenjuandiaocha'
		})
	}
  },
};
</script>

<style lang="scss" scoped>
@import "~@/common/style/tabList.scss";
</style>