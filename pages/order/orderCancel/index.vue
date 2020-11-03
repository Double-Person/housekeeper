<template>
  <scroll-view
    :scroll-y="true"
    class="scroll-view-tab-list-body"
  >
    <view class="padding-bottom150">
      <!-- :flag="8" -->
      <fromDeatil
        msg="取消"
        :item="item"
        v-for="(item, index) in list"
        :key="index"
        @getDetail="getDetail"
      >
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
      uni.navigateTo({
         url: '../../components/workersOrderDetail/allDetail?info=' + JSON.stringify(item)
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/common/style/tabList.scss";
</style>