<template>
  <scroll-view
    :scroll-y="true"
    class="scroll-view-tab-list-body"
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
      </fromDeatil>
    </view>
  </scroll-view>
</template>

<script>
import fromDeatil from "@/components/fromAll.vue";
export default {
  data() {
    return {
      list: ["全部  1", "全部  2", "全部 3", "全部 3", "全部 3", "全部 3"],
    };
  },
  components: {
    fromDeatil,
  },
  methods: {
    scrolltolower() {},
    getDetail() {},
  },
};
</script>

<style lang="scss" scoped>
@import "~@/common/style/tabList.scss";
</style>

