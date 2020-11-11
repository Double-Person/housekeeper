<template>
  <scroll-view
    :scroll-y="true"
    class="scroll-view-tab-list-body"
  >
  <view class="state jc-around">
      <text
        :class="audit === 'review' ? 'statAct' : ''"
        @click="subType('review')"
        >待开工</text
      >
      <text
        :class="audit === 'haveBeenThrough' ? 'statAct' : ''"
        @click="subType('haveBeenThrough')"
        >施工中</text
      >
    </view>
    <view class="padding-bottom150">
      <fromDeatil
        msg="msg"
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
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      audit: "review",
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
    subType(type) {
      this.audit = type;
      uni.$emit("directorOrderConstuction", type);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/common/style/tabList.scss";
.state {
  width: 710upx;
  margin: 19upx auto 0 auto;
  display: flex;
  justify-content: space-between;

  text {
    display: block;
    font-size: 32upx;
    padding: 19upx 47upx;
    border: 1upx solid #191919;
    border-radius: 10upx;
  }
}

.jc-around {
  justify-content: space-around;
}

.statAct {
  background: #ffc823;
  color: #fff;
  border: none !important;
}
</style>