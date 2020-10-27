<template>
  <view class="no-data" v-if="show">
    <image src="/static/noData.png" mode="" />
    <view class="msg">{{ msg }}</view>
  </view>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: "您还没有订单哦！",
    },
	show: {
		type: Boolean,
		required: true
	}
  },
};
</script>

<style lang="scss" scoped>
.no-data{
	margin: 98rpx auto 25rpx auto;
	text-align: center;
}
image {
  width: 223rpx;
  height: 223rpx;
  object-fit: cover;
  vertical-align: middle;
}
.msg {
  font-size: 32rpx;
  color: #666666;
}
</style>
