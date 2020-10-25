<template>
  <view class="newfrom">
    <Topsearch @searchValue="searchValue" placeholder="搜索订单" />
    <!--  -->
    <view class="top">
      <view
        v-for="(item, index) in titleList"
        :key="index"
        :class="{ active: index === activeIndex }"
        @click="clickTitle(index, item.value)"
        >{{ item.label }}</view
      >
    </view>
    <scroll-view
      :scroll-y="true"
      class="scroll-view-body"
      :lower-threshold="100"
      @scrolltolower="scrolltolower"
    >
      <view class="padding-bottom150">
        <!-- :flag="8" -->
        <fromDeatil
          msg="msg"
          :item="item"
          v-for="(item, index) in titleList[activeIndex].list"
          :key="index"
          @getDetail="getDetail()"
        >
          <view class="slot-warp">
            <view class="slot-active" @click="distribute">派单</view>
          </view>
        </fromDeatil>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import fromDeatil from "@/components/fromAll.vue";
import Topsearch from "@/components/TopSearch.vue";
import {daitechnician, daiforeman} from "@/components/api/api.js"
export default {
	components: {
	  fromDeatil,
	  Topsearch,
	},
  data() {
    return {
      activeIndex: 0,
	  worker_id: uni.getStorageSync('WORKERS_ID'),
      titleList: [
        {
          value: 1,
          label: "技术员",
          list: ["技术员 1", "技术员 2", "技术员 3", "技术员 4", "技术员 5"],
        },
        {
          value: 2,
          label: "工长",
          list: ["工长 1", "工长 2", "工长 3"],
        }
      ],
    };
  },
  mounted() {
  	this._daitechnician()
  },
 
  methods: {
    // 搜索
    searchValue(val) {},
    // 滚动
    scrolltolower(eve) {
      console.log(eve);
    },
    clickTitle(index, value) {
      this.activeIndex = index;
	  if(index === 0) {
		  this._daitechnician()
	  }else{
		   this._daiforeman()
	  }
    },
    getDetail(act) {
      console.log(1);
      uni.navigateTo({
        url: "zgfanganxiangqing",
      });
    },
	// 技术员
	_daitechnician() {
		daitechnician({worker_id: this.worker_id}).then(res => {
			console.log(res)
		})
	},
	// 工长
	_daiforeman() {
		daiforeman({worker_id: this.worker_id}).then(res => {
			console.log(res)
		})
	},


	// 派单
    distribute() {
      uni.navigateTo({
        url: "zgfanganNew",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/common/style/tabList.scss";
.scroll-view-body {
  height: calc(100vh - 130upx - 110upx);
}
</style>
