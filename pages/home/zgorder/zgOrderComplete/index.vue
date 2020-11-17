<template>
  <scroll-view
    :scroll-y="true"
    class="scroll-view-tab-list-body"

  >
    <view class="padding-bottom150">
      <!-- :flag="8" -->
      <fromDeatil
        :msg="DIRECTORSHOWMSG(item.mastertype)"
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
import NoData from "@/components/NoData.vue";
import fromDeatil from "@/components/fromAll.vue";
import { directorOrderCenterAllStatus } from "@/variable/orderCenter.js";
import { directorShowMsg } from '@/utils/showMsg.js'
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
		DIRECTORSHOWMSG: directorShowMsg,
      TYPES: directorOrderCenterAllStatus,
    };
  },
  components: {
    fromDeatil,
    NoData,
  },
  methods: {
    getDetail(info) {
    	let obj = {
    		status: (info.states == 1 && '已确认') || (info.states == 4 && '待确认') || (info.states == 3 && '未通过'),
    		order_id: info.order_id,
    		image: info.image,
    		order_number: info.order_number,
    		contact: info.contact,
    		phone: info.phone,
    		province: info.province,
    		citys: info.citys, 
    		district_county: info.district_county, 
    		address_details: info.address_details,
    	}
    	obj.goods = this.$goods(info);
    	uni.navigateTo({// workersOrderDetail
    		url: '/components/workersOrderDetail/allDetail?info=' + JSON.stringify(obj),
    	})
    	  
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/common/style/tabList.scss";
</style>