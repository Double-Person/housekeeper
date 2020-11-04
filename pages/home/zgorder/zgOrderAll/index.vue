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
      </fromDeatil>
	  <NoData :show="list.length === 0"></NoData>
    </view>
  </scroll-view>
</template>

<script>
	import NoData from "@/components/NoData.vue"
import fromDeatil from "@/components/fromAll.vue";

import { directorOrderCenterAllStatus } from "@/variable/orderCenter.js";
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      TYPES: directorOrderCenterAllStatus,
    };
  },
  components: {
    fromDeatil,
	NoData
  },
  methods: {
    getDetail() {},
  

  },
};
</script>

<style lang="scss" scoped>
@import "~@/common/style/tabList.scss";
</style>

