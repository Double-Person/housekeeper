<template>
  <scroll-view
    :scroll-y="true"
    class="scroll-view-tab-list-body"
  >
    <view class="padding-bottom150">
      <fromDeatil
        :msg="showMsg(item.mastertype)"
        :item="item"
        v-for="(item, index) in list"
        :key="index"
        @getDetail="getDetail"
      >
      </fromDeatil>
	  <NoData :show="list.length === 0"></NoData>
    </view>
  </scroll-view>
</template>

<script>
	import NoData from "@/components/NoData.vue"
import fromDeatil from "@/components/fromAll.vue";
import { showMsg } from "@/utils/showMsg.js";
export default {
  props:{
  	list: {
  		type: Array,
  		default: () => []
  	}
  },
  data() {
    return {
      showMsg: showMsg
    }
  },
  components: {
    fromDeatil,NoData
  }, 
  methods: {
    getDetail(item) {
		item.goods = this.$goods(item);
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