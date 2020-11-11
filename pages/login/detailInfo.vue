<template>
  <view>
    <view class="top-info">
      <view class="info"> 姓名：{{info.name}}</view>
      <view class="info"> 电话：{{info.phone}}</view>
	  <!-- (info.levels == 0 && '主管') || (info.levels == 1 && '技术员')|| (info.levels == 2 && '工长') -->
      <view class="info"> 职位：{{  LEVELSCONVERSION(info.levels) }}</view>
	  <!-- (info.gender == 1 && '男') || (info.gender == 0 && '女') -->
      <view class="info"> 性别：{{SEXCONVERSION(info.gender)}}</view>
    </view>
	<image :src="imgBaseUrl + info.idcard_positive"></image>
	<image :src="imgBaseUrl + info.idcard_reverse"></image>
	<image :src="imgBaseUrl + info.employee_card"></image>
  </view>
</template>

<script>
import {imgBaseUrl } from "@/components/api/request.js";
import { sexConversion, levelsConversion } from "@/utils/showMsg.js"
export default {
  data() {
    return {
		imgBaseUrl: imgBaseUrl,
      info: {},
	  SEXCONVERSION: sexConversion,
	  LEVELSCONVERSION: levelsConversion,
    };
  },
  onLoad(option) {
    this.info = JSON.parse(option.info);
  },
};
</script>

<style lang="scss" scoped>
.top-info {
  margin-top: 20rpx;
  width: 100%;
  padding: 40rpx;
  .info {
    font-size: 28rpx;
    font-weight: 500;
    color: #999999;
  }
 
}

 image{
	  width: 90%;
	  margin: 15rpx 5% 30rpx 5%;
  }
</style>