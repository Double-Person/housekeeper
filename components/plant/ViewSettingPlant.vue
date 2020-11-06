<template>
	<view class="index">
		<!-- 工人 方案详情 -->
		<view class="box">
			<view class="tit">
				<text>选择方案</text>
				<image src="/static/loginImg/hright.png" mode=""></image>
			</view>

			<view class="bigBox" v-if="selectPlant.list != 0">
				<view class="text" v-for="item in selectPlant" :key="item.programme_id">
					<view class="text_a">{{ item.name }}</view>
					<view class="text_b">{{ item.company }}/㎡</view>
					<view class="text_c">
						<input v-model="item.numbers" disabled />
						<text>㎡</text>
					</view>
				</view>
			</view>
			<view class="time">
				<text>开工时间: {{ otherInfo.starttime }}</text>
				<text>完成时间: {{ otherInfo.endtime }}</text>
			</view>
		</view>
		<!-- 优惠价格 -->
		<view class="yhjg">优惠价格
			<input type="number" v-model="concessional" disabled />
		</view>
		<!-- 上传照片 -->
		<view class="sczz">
			<view class="tit">上传照片</view>
			<view class="pic-list">
				<view class="pic-item" v-for="(item, index) in imgList" :key="index">
					<image v-if="!item" src="/static/loginImg/axx.png" mode=""></image>
					<image v-if="item" :src="imgBaseUrl + item" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 备注 -->
		<view class="bz">
			<view class="tit">备注</view>
			<textarea v-model="remarks" placeholder="请输入备注" disabled class="inp" />
			</view>
    <!-- 支付比例 -->
    <view class="warp-option">
      <view class="pay">
        <view class="tit">选择支付比例</view>
        <input disabled  v-model="checkPayPro" />
      </view>
    </view>
    <!-- 提交审核 -->
    <view class="tijsh">
      <view class="text">
        <text>总价:</text>
        <text>{{ otherInfo.price }}</text>
        <text>￥{{ otherInfo.priceafter * (checkPayPro / 100) }}
		</text>
      </view>
      <view class="btn" style="opacity: 0.5;">提交审核</view>
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
      selectPlant: {}, // 选择方案页信息
      img: "", //  图片
      imgList: [],
      remarks: "", // 备注
      concessional: "", // 优惠价格
      checkPayPro: null,
      order_id: "",
	  otherInfo: {}
    };
  },
  onLoad(option) {

	  this.order_id = option.order_id;
		this._programmeApiList();
 
  },
  methods: {
	_programmeApiList() {
		programmeApiList({ order_id: this.order_id }).then((res) => {
		  let aginInfo = res.varList;		   
		  this.remarks = aginInfo.remarks; // 备注
		   this.concessional = aginInfo.concessional; // 优惠价格
		  this.imgList = aginInfo.urllist.map((ele) => ele.picture_url);
		  this.checkPayPro = aginInfo.proportion * 100;
		this.selectPlant = aginInfo.programme;
		let { starttime, endtime, price, priceafter } = aginInfo;
		this.otherInfo = { starttime, endtime, price, priceafter }
		   
		});
	}
 


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

input {
	padding-left: 25upx;
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
