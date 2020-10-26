<template>
  <view>
    <view class="top-info">
      <view class="info"> 姓名：{{info.name}}</view>
      <view class="info"> 电话：{{info.phone}}</view>
      <view class="info"> 职位：{{ (info.levels == 0 && '主管') || (info.levels == 1 && '技术员')|| (info.levels == 2 && '工长')}}</view>
      <view class="info"> 性别：{{(info.gender == 1 && '男') || (info.gender == 0 && '女')}}</view>
	  <view class="info"> 地址：{{info.address}}</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      info: {},
    };
  },
  onLoad(option) {
    this.info = JSON.parse(option.info);
    console.log(this.info);
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
</style>