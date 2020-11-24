<template>
  <view class="title">
	  <view class="close-user" @click="closeExit">
	  	退出
	  </view>
    <view class="my_text">
      <view class="my_logo">
        <image src="/static/my_icon/my_logo.png" mode=""></image>
        <image
          :src="userInfo.head ? (IMGBASEURL + userInfo.head) : '/static/my_icon/logo.jpg'"
          mode=""
          class="logo"
          @click="changeHead"
        ></image>
      </view>
    </view>
    <view class="top_bac"> </view>
    <text class="my_name">{{ userInfo.name }}</text>
  </view>
</template>

<script>
import { workerIndex, upLoadFile } from "./api/api.js";
import { imgBaseUrl } from "./api/request.js"
export default {
  data() {
    return {
	  IMGBASEURL: imgBaseUrl,
      userInfo: {},
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
	  closeExit() {
		  uni.clearStorageSync()
		  uni.redirectTo({
		  	url: '/pages/login/logins'
		  })
	  },
    // 更改用户头像
    changeHead() {
     
    },
    // 获取用户信息
    getUserInfo() {
      let workers_id = uni.getStorageSync("WORKERS_ID");
      workerIndex({ workers_id }).then(({ returnMsg }) => {
        this.userInfo = returnMsg;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
/* 头部个人信息 */
.title {
  width: 750upx;
  height: 378upx;
  background-image: url("../static/my_icon/my_bac.png");
  position: relative;
  overflow: hidden;
}
.close-user{
	position: absolute;
	right: 55rpx;
	top: 55rpx;
	z-index: 3;
}

.my_logo {
  width: 140upx;
  height: 140upx;
  margin-top: 106upx;
  margin-left: 303upx;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
}

.my_logo image {
  width: 100%;
  height: 100%;
  position: absolute;
}

image {
  width: 100%;
  height: 100%;
}

.top_bac {
  width: 749upx;
  height: 175upx;
  position: absolute;
  z-index: 2;
  bottom: 0upx;
}

.my_name {
  // width: 142upx;
  display: block;
  font-size: 36upx;
  position: absolute;
  z-index: 3;
  bottom: 59upx;
  left: 50%;
  transform: translateX(-50%);
}
</style>
