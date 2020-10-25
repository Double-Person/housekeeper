<template>
  <view class="index">
    <!--  -->
    <view class="box_te">
      <view class="tit">
        <view class="imgtit">
          <image
            :src="
              orderInfo.image ? orderInfo.image : '/static/my_icon/logo.jpg'
            "
            mode=""
          ></image>
          <text>{{ orderInfo.project_name }}</text>
        </view>

        <!-- <view class="com">显示状态</view> -->
      </view>
      <view class="textBox">
        <view class="img">
          <image
            :src="
              orderInfo.image ? orderInfo.image : '/static/my_icon/logo.jpg'
            "
            mode=""
          ></image>
        </view>
        <view class="time">
          <text>{{ orderInfo.project_name }}</text>
          <!-- <text>工人名称</text> -->
        </view>
      </view>
    </view>

    <view class="orderxx">
      <view class="titb"> 订单信息 </view>
      <view class="textT">
        <text>订单编号：{{ orderInfo.order_number }}</text>
        <text>下单日期：{{ orderInfo.createtime }}</text>
        <text>客户姓名：{{ orderInfo.contact }}</text>
        <text>客户电话：{{ orderInfo.phone }}</text>
        <text>客户地址：{{ orderInfo.address }}</text>
      </view>
    </view>
    {{ isReceive }}
    <!-- 同意 -->
    <view class="time" @click="xuanze" v-if="isReceive">
		同意
      <!-- <text>选择技术人员</text>
			<image src="/static/loginImg/hright.png" mode=""></image> -->
    </view>
    <!-- 不同意 -->
    <view class="not-receive" >
		不同意
      <view class="not-receive-title">填写意见</view>
      <textarea auto-height />
    </view>
    <view class="btn" @click="detailAll"> 确定 </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      orderInfo: {},
      isReceive: false, // 是否接受
    };
  },
  onLoad(option) {
    console.log(JSON.parse(option.info || ""));
    this.orderInfo = JSON.parse(option.info || "");
    this.isReceive = option.type;
  },
  methods: {
    detailAll() {
      uni.navigateTo({
        url: "fangan",
      });
    },
    xuanze() {
      uni.navigateTo({
        url: "xuanzejishu",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: SourceHanSansCN;
  src: url("~@/static/SourceHanSansCN-Normal.otf") format("truetype");
}
.not-receive {
  height: 258rpx;
  .not-receive-title {
    height: 27rpx;
    font-size: 2r8px;
    font-weight: 500;
    color: #333333;
    line-height: 8rpx;
  }
}

.index {
  width: 750upx;
  height: 100vh;
  background-color: #f2f2f2;
  font-family: SourceHanSansCN;
}
.time {
  margin-top: 20upx;
  padding: 30upx 40upx;
  width: 670upx;
  height: 40upx;
  background: rgba(255, 255, 255, 1);
  display: flex;
  // justify-content: flex-end;
  text {
    font-size: 28upx;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(170, 170, 170, 1);
  }
  image {
    display: block;
    width: 34upx;
    height: 34upx;
    margin-left: auto;
  }
}
.btn {
  background: #ffc823;
  width: 715upx;
  height: 91upx;
  font-size: 36upx;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 91upx;
  text-align: center;
  position: fixed;
  left: 15upx;
  bottom: 32upx;
  border-radius: 8upx;
}
.box_te {
  border-top: 19upx solid #f2f2f2;
  padding: 40upx 20upx 0upx 20upx;
  height: 350upx;
  background: white;

  .tit {
    display: flex;
    // justify-content: flex-end;
    align-items: center;

    .imgtit {
      position: relative;

      image {
        width: 38upx;
        height: 38upx;
        border-radius: 4upx;
        position: absolute;
        top: 8upx;
        left: 0upx;
      }

      text {
        margin-left: 56upx;
        font-size: 36upx;
        font-family: SourceHanSansCN;
        font-weight: 600;
        color: rgba(26, 26, 26, 1);
        line-height: 36upx;
      }
    }

    .com {
      width: 130upx;
      height: 48upx;
      margin-left: auto;
      font-size: 32upx;
      font-weight: 500;
      color: #999;
      text-align: center;
      line-height: 48upx;
    }
  }

  .textBox {
    padding: 60upx 0upx 20upx 0upx;
    display: flex;
    position: relative;

    .img {
      width: 180upx;
      height: 180upx;
      background: rgba(146, 113, 113, 1);
      border-radius: 8upx;

      image {
        width: 100%;
        height: 100%;
      }
    }

    .time {
      margin-left: 18upx;
      margin-top: 21upx;
      text {
        font-size: 28upx;
        font-weight: 400;
        color: #191919;
      }

      image {
        margin-left: 20upx;
        width: 13upx;
        height: 24upx;
      }
    }
  }

  .btnBox {
    display: flex;
    float: right;

    .btns {
      width: 214upx;
      height: 68upx;
      background: linear-gradient(
        150deg,
        rgba(255, 200, 35, 1),
        rgba(255, 193, 12, 1)
      );
      border-radius: 8upx;
      font-size: 32upx;
      font-family: SourceHanSansCN;
      font-weight: 600;
      color: rgba(26, 26, 26, 1);
      line-height: 68upx;
      position: relative;

      text {
        margin-left: 60upx;
      }

      image {
        position: absolute;
        top: 18upx;
        left: 16upx;
        width: 39upx;
        height: 39upx;
      }
    }

    .btn {
      margin-left: 30upx;
      width: 214upx;
      height: 68upx;
      background: linear-gradient(
        150deg,
        rgba(255, 200, 35, 1),
        rgba(255, 193, 12, 1)
      );
      border-radius: 8upx;
      font-size: 32upx;
      font-family: SourceHanSansCN;
      font-weight: 600;
      color: rgba(26, 26, 26, 1);
      line-height: 68upx;
      position: relative;

      text {
        margin-left: 60upx;
      }

      image {
        position: absolute;
        top: 15upx;
        left: 16upx;
        width: 33upx;
        height: 39upx;
      }
    }
  }
}

.orderxx {
  margin-top: 20upx;
  padding: 0upx 40upx;
  width: 670upx;

  background: #fff;
  border-radius: 8upx;

  .titb {
    padding: 20upx 0upx;
    width: 670upx;
    font-size: 28upx;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    border-bottom: 1upx solid rgba(191, 191, 191, 1);
  }

  .textT {
    margin-top: 20upx;

    text {
      width: 670upx;
      display: block;
      font-size: 27upx;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 50upx;
    }

    text:nth-child(3) {
      margin-top: 60upx;
    }
  }
}

.serve {
  padding: 0upx 40upx;
  margin-top: 20upx;
  width: 670upx;
  height: 465upx;
  background: rgba(255, 255, 255, 1);
  border-radius: 8upx;

  .titb {
    padding: 30upx 0upx;
    width: 670upx;
    font-size: 28upx;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    border-bottom: 1upx solid rgba(191, 191, 191, 1);
    overflow: hidden;
    .tit_a {
      float: left;
    }
    .tit_b {
      float: right;
      color: #d4d4d4;
    }
  }

  .box {
    padding: 40upx 0upx 20upx 0upx;
    border-bottom: 1upx solid rgba(191, 191, 191, 1);

    .text {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20upx;

      text:nth-child(1) {
        font-size: 28upx;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }

      text:nth-child(2) {
        font-size: 28upx;
        font-weight: 600;
        color: rgba(26, 26, 26, 1);
      }

      text:nth-child(3) {
        font-size: 28upx;
        font-weight: 400;
        color: rgba(253, 44, 44, 1);
      }
    }
  }

  .bottom {
    padding: 20upx 0upx 40upx 0upx;
    font-size: 24upx;
    color: #191919;
    position: relative;

    .right {
      margin-top: 11upx;
    }

    .youhui {
      position: absolute;
      top: 20upx;
      right: 0upx;
    }

    .color {
      color: #fa4f4f;
    }
  }
}

.order_img {
  width: 750px;
  background-color: #fff;
  padding: 40upx;
  overflow: hidden;
  margin-top: 20upx;
  .name {
    width: 670upx;
    display: flex;
    justify-content: space-between;
    margin-top: 20upx;
    .tit {
      font-size: 28upx;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
    }
  }
  .phone {
    display: flex;
    align-items: center;
    text {
      font-size: 28upx;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(251, 80, 80, 1);
    }
    image {
      margin-left: 18upx;
      width: 38upx;
      height: 38upx;
    }
  }
  .title {
    font-size: 28upx;
    width: 670upx;
    padding-bottom: 20upx;
    border-bottom: 2upx solid rgba(190, 190, 190, 1);
  }

  .img_data {
    width: 670upx;
    display: flex;
    justify-content: space-between;
    margin-top: 25upx;

    .oimg {
      width: 210upx;
      height: 210upx;
      overflow: hidden;

      image {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.order_txt {
  width: 750px;
  background-color: #fff;
  padding: 40upx;
  overflow: hidden;
  margin-top: 20upx;

  .title {
    width: 670upx;
    padding-bottom: 20upx;
    border-bottom: 2upx solid rgba(190, 190, 190, 1);
  }

  .txt_data {
    width: 670upx;
    word-break: break-all;
    margin-top: 25upx;
  }
}

.zong {
  width: 750px;
  // height: 118upx;
  background-color: #fff;
  padding: 40upx;
  overflow: hidden;
  margin-top: 20upx;
  color: #333333;
  font-size: 32upx;
  .zprice {
    float: left;
    text {
      color: #fa4f4f;
    }
  }

  .fu {
    float: left;
    margin-left: 250upx;
  }
}
</style>
