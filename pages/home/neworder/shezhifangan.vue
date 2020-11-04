<template>
  <view class="index">
    <view class="box">
      <view class="tit" @click="szfan">
        <text>选择方案</text>
        <image src="/static/loginImg/hright.png" mode=""></image>
      </view>

      <view class="bigBox" v-if="isShowPlant && selectPlant.list != 0">
        <view
          class="text"
          v-for="item in selectPlant.list"
          :key="item.programme_id"
        >
          <view class="text_a">{{ item.name }}</view>
          <view class="text_b">{{ item.company }}/㎡</view>
          <view class="text_c">
            <input v-model="item.num" type="number" />
            <text>㎡</text>
          </view>
        </view>
      </view>
      <view class="time" v-if="isShowPlant">
        <text>开工时间: {{ selectPlant.starttime }}</text>
        <text>完成时间: {{ selectPlant.endtime }}</text>
      </view>
    </view>
    <!-- 优惠价格 -->
    <view class="yhjg"
      >优惠价格
      <input type="number" v-model="concessional" />
    </view>
    <!-- 上传照片 -->
    <view class="sczz">
      <view class="tit">上传照片</view>
      <image
        src="/static/loginImg/axx.png"
        mode=""
        @click="chooseImgUpload('all')"
        v-if="imgList != 6"
      ></image>
      <view class="pic-list">
        <view class="pic-item" v-for="(item, index) in imgList" :key="index">
          <image
            v-if="!item"
            src="/static/loginImg/axx.png"
            mode=""
            @click="chooseImgUpload(index)"
          ></image>
          <image
            v-if="item"
            :src="imgBaseUrl + item"
            mode=""
            @click="chooseImgUpload(index)"
          ></image>
        </view>
      </view>
    </view>
    <!-- 备注 -->
    <view class="bz">
      <view class="tit">备注</view>
      <textarea
        v-model="remarks"
        placeholder="请输入备注"
        :maxlength="-1"
        class="inp"
      />
    </view>
    <!-- 支付比例 -->
    <view class="warp-option">
      <view class="pay">
        <view class="tit">选择支付比例</view>
        <input
          type="number"
          @input="inputPayPro"
		  placeholder-class="placeholder-class"
          :max="100"
          :maxlength="5"
          v-model="checkPayPro"
          placeholder="请输入1-100的支付比例"
        />
      </view>
    </view>
    <!-- 提交审核 -->
    <view class="tijsh">
      <view class="text">
        <text>总价:</text>
        <text>{{ comptedMoney() }}</text>
        <text>￥{{	 ( ( comptedMoney() - concessional ) * checkPayPro / 100 ) < 0 ? 0 : ( (comptedMoney() - concessional)  ) }}
		</text>
      </view>
      <view class="btn" @click="submitAudit">提交审核</view>
    </view>
  </view>
</template>

<script>
import {
  upLoadFile,
  addprogrammeinfo,
  programmeApiList,
} from "@/components/api/api.js";
import { imgBaseUrl } from "@/components/api/request.js";
export default {
  data() {
    return {
      imgBaseUrl: imgBaseUrl,
      info: {}, // 上页信息
      selectPlant: {}, // 选择方案页信息
      img: "", //  图片
      imgList: [],
      remarks: "", // 备注
      concessional: "", // 优惠价格
      isShowPlant: false,
      isShowPaymentProportion: false, // 是否显示支付比例
      checkPayPro: null,
      order_id: "",
      isAdd:''
    };
  },
  onLoad(option) {
    console.log(option);
    if (option.info) {
      this.info = JSON.parse(option.info);
    }

    if (option.order_id) {
      this.order_id = option.order_id;
      programmeApiList({ order_id: option.order_id }).then((res) => {
        let aginInfo = res.varList;
        // img: '', //  图片
        // imgList: [],
        (this.remarks = aginInfo.remarks), // 备注
          (this.concessional = aginInfo.concessional); // 优惠价格
        this.imgList = aginInfo.urllist.map((ele) => ele.picture_url);
        this.checkPayPro = aginInfo.proportion * 100;
        if(aginInfo.proportion) {
          this.isAdd = 'edit'
        }

        // checkPayPro: null,
      });
    }

    if (option.selectPlant) {
      this.selectPlant = JSON.parse(option.selectPlant);

      this.selectPlant.list = this.selectPlant.list.filter((ele) => ele);
      this.isShowPlant = true;
    } else {
      this.isShowPlant = false;
    }
  },
  methods: {
    // 提交审核 按钮
    submitAudit() {
      if (!this.selectPlant || !this.selectPlant.list) {
        uni.showToast({
          title: "请先选择方案",
          icon: "none",
        });
        return false;
      }
      // type（0 是新增  1  是修改）   order_id 订单id  list（这个是穿个方案的数组传id就行） starttime开始时间  endtime结束时间  img 图片
      // concessional 优惠价   remarks 备注  proportion 支付比例  price 原价  priceafter 优惠后价格  reason  不通过原因
      let {
        imgList,
        remarks,
        concessional,
        checkPayPro,
        selectPlant: { starttime, endtime },
      } = this;
      //  if(this.selectPlant.list == '') {
      // 	return uni.showToast({ title: '请输入优惠价', icon: 'none' })
      // }
      for (let i = 0; i < this.selectPlant.list.length; i++) {
        if (this.selectPlant.list[i].num == "") {
          uni.showToast({ title: "请输入方案平方数量", icon: "none" });
          return false;
        }
      }
      if (concessional == "") {
        return uni.showToast({ title: "请输入优惠价", icon: "none" });
      }
      if (remarks == "") {
        return uni.showToast({ title: "请输入备注", icon: "none" });
      }
      if (imgList.length === 0) {
        return uni.showToast({ title: "请至少上传一张图片", icon: "none" });
      }
      if (checkPayPro < 1 || checkPayPro > 100) {
        return uni.showToast({ title: "请输入正确支付比例", icon: "none" });
      }
    if (this.order_id) {
        this.info.order_id = this.order_id;
      }
      let obj = {
        type: this.isAdd == 'edit' ? 1 : 0, 
        starttime,
        endtime,
        remarks,
        img: imgList.filter((ele) => ele).join(","),
        list: this.selectPlant.list
          .map((item) => item.programme_id + ";" + item.num)
          .join(","), //  JSON.stringify(this.selectPlant.list),
        order_id: this.info.order_id,
        concessional, // 优惠价
        proportion: checkPayPro / 100, //支付比例
        price: this.comptedMoney(),
        priceafter: this.comptedMoney() - concessional, // 优惠后价格
        reason: "", // 不通过原因
        explaina: ''
      };
      

      addprogrammeinfo(obj).then((res) => {
        console.log("提交审核", res);
        if (res.msgType == 0) {
          uni.showToast({
            title: "提交成功",
            icon: "none",
          });
          setTimeout(() => {
            uni.navigateTo({
              url: "dingdanzhongxin",
            });
          }, 1000);
        }
      });

      // uni.navigateTo({
      // 	url:'dingdanzhongxin'
      // })
    },
    inputPayPro(e) {
      if (e.detail.value * 1 < 1) {
        this.checkPayPro = 1;
      } else if (e.detail.value * 1 <= 100 && e.detail.value * 1 >= 1) {
        this.checkPayPro = e.detail.value;
      } else {
        this.checkPayPro = 100;
      }
    },
    // 计算价格
    comptedMoney() {
      let num = 0;
      if (this.selectPlant.list && this.selectPlant.list.length) {
        // let sum = this.selectPlant.list.map(ele => ele.price).forEach(item => { num += (item * 1) });

        console.log("计算价格", this.selectPlant.list);
        let sum = this.selectPlant.list
          .map((item) => item.price * (item.num || 0))
          .forEach((item) => {
            num += item * 1;
          });
      }
      return num;
    },

    // 选择图片上传
    chooseImgUpload(index) {
      uni.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], //从相册选择
        success: (res) => {
          upLoadFile({ path: res.tempFilePaths[0] }).then((upFile) => {
            // this.img = JSON.parse(upFile.data).data
            if (index == "all") {
              this.imgList.push(JSON.parse(upFile.data).data);
            } else {
              this.imgList[index] = JSON.parse(upFile.data).data;
            }
          });
        },
      });
    },

    // 设置选择方案
    szfan() {
      uni.navigateTo({
        url:
          "xuanzefangan?info=" +
          JSON.stringify(this.info) +
          "&order_id=" +
          this.order_id,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.pic-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .pic-item {
    width: 33%;
  }
}

.index {
  width: 750upx;
  height: 100vh;
  background: #f2f2f2;
}
.box {
  padding: 10upx 40upx;
  width: 670upx;
  // height:395upx;
  min-height: 50rpx;
  background: rgba(255, 255, 255, 1);
  .tit {
    width: 670upx;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20upx;
    text {
      font-size: 28upx;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(169, 169, 169, 1);
    }
    image {
      width: 40upx;
      height: 40upx;
    }
  }
  .bigBox {
    background: #ffebaf;
    padding: 25upx 25upx 1upx 25upx;
    width: 620upx;
    .text {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20upx;
      .text_a {
        font-size: 28upx;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(26, 26, 26, 1);
      }
      .text_b {
        font-size: 28upx;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(26, 26, 26, 1);
      }
      .text_c {
        width: 130upx;
        display: flex;
        justify-content: center;
        align-items: center;
        input {
          background: #f2f2f2;
          width: 100upx;
          height: 40upx;
        }
        text {
          margin-left: 8upx;
          font-size: 28upx;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(26, 26, 26, 1);
        }
      }
    }
  }
  .time {
    margin-top: 20upx;
    text {
      display: block;
      font-size: 24upx;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(251, 79, 79, 1);
      line-height: 20px;
    }
  }
}

.yhjg {
  margin-top: 20upx;
  padding: 0 40upx;
  width: 670upx;
  height: 80upx;
  background: rgba(255, 255, 255, 1);
  font-size: 28upx;
  font-weight: 500;
  color: rgba(169, 169, 169, 1);
  line-height: 80upx;
  display: flex;
  align-items: center;
  input {
    margin-left: 50rpx;
  }
}

.sczz {
  margin-top: 20upx;
  padding: 20upx 40upx;
  width: 670upx;
  // height:237upx;
  background: rgba(255, 255, 255, 1);
  .tit {
    font-size: 28upx;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(169, 169, 169, 1);
  }
  image {
    margin-top: 29upx;
    display: block;
    width: 154upx;
    height: 154upx;
  }
}
.bz {
  margin-top: 20upx;
  padding: 20upx 40upx;
  width: 670upx;
  // height: 258upx;
  background: rgba(255, 255, 255, 1);
  .tit {
    padding: 20upx 0upx;
    font-size: 28upx;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    border-bottom: 1upx solid rgba(191, 191, 191, 1);
  }
  .inp {
    margin-top: 20upx;
    padding: 25upx;
    width: 620upx;
    height: 61upx;
    background: #f2f2f2;
    font-size: 28upx;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
  }
}

.warp-option {
  margin-top: 20upx;
  background-color: #fff;
  margin-bottom: 20upx;
  .pay {
    padding: 20upx 40upx;
    width: 670upx;
    height: 80upx;
    background: rgba(255, 255, 255, 1);
    display: flex;
    // justify-content: flex-end;
    align-items: center;
    .tit {
      font-size: 28upx;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(169, 169, 169, 1);
      line-height: 80px;
    }
    input {
      border: 1rpx solid #eee;
      margin-left: 30rpx;
	  border-radius: 15rpx;
	  height: 60rpx;
	}
	.placeholder-class {
		font-size: 26rpx;
		padding: 25rpx;
	}
    image {
      margin-left: auto;
      display: block;
      width: 40upx;
      height: 40upx;
    }
  }
}

.tijsh {
  margin-top: 20upx;
  padding: 20upx 40upx;
  width: 670upx;
  height: 78upx;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .text {
    font-size: 32upx;
    text:nth-child(1) {
      color: #333333;
    }
    text:nth-child(2) {
      color: #cacaca;
      text-decoration: line-through;
    }
    text:nth-child(3) {
      color: #fb4f4f;
    }
  }
  .btn {
    margin-left: auto;
    text-align: center;
    width: 220upx;
    height: 78upx;
    border-radius: 8upx;
    font-size: 32upx;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 78upx;
    background: #ffc822;
  }
}
</style>
