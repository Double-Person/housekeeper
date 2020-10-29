<template>
  <view class="newfrom">
    
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
	<Topsearch @searchValue="searchValue" placeholder="搜索订单" />
	
    <scroll-view
      :scroll-y="true"
      class="scroll-view-body"
      :lower-threshold="100"
      @scrolltolower="scrolltolower"
    >
      <view class="padding-bottom150">
        <!-- :flag="8" 技术员  待派发 -->
        <fromDeatil
          msg="待派发"
          :item="item"
          v-for="(item, index) in titleList[activeIndex].list"
          :key="index"
          @getDetail="getDetail()"
        >
          <view class="slot-warp">
            <view class="slot-active" @click="distribute(item)">派单</view>
          </view>
        </fromDeatil>
		<NoData show></NoData>
		
      </view>
    </scroll-view>
  </view>
</template>

<script>
	import NoData from "@/components/NoData.vue"
import fromDeatil from "@/components/fromAll.vue";
import Topsearch from "@/components/TopSearch.vue";
import {daitechnician, daiforeman} from "@/components/api/api.js"
export default {
	components: {
	  fromDeatil,
	  Topsearch,
	  NoData
	},
  data() {
    return {
      activeIndex: 0,
	  worker_id: uni.getStorageSync('WORKERS_ID'),
      titleList: [
        {
          value: 1,
          label: "技术员",
          list: [],
        },
        {
          value: 2,
          label: "工长",
          list: [],
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
			this.titleList[0].list = res.varList
		})
	},
	// 工长   数据未绑定
	_daiforeman() {
		daiforeman({worker_id: this.worker_id}).then(res => {
			console.log('工长', res)
			this.titleList[1].list = res.varList
		})
	},


	// 派单
    distribute(item) {
      uni.navigateTo({ 
        url: "zgfanganNew?userInfo=" + JSON.stringify(item)
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
