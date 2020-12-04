<template>
  <view class="questionnaire-survey">
    <view class="problem-list" v-for="(item, index) in list" :key="index">
      <view class="title">{{ index + 1 }} . {{ item.questionnaire_name }}</view>
      <view class="fl question-list">
        <radio-group
          @change="radioChange(index, item.questionnaire_id, $event)"
          class="fl radio-group"
        >
          <label
            class="uni-list-cell uni-list-cell-pd fl"
            v-for="(ele, indey) in item.questionList"
            :key="ele.value"
          >
            <view>
              <radio :value="ele.value + ''" :checked="indey === current" />
            </view>
            <view class="question-label">{{ ele.label }}</view>
          </label>
        </radio-group>
      </view>
    </view>
    <view class="btn" @click="btn"> 提交 </view>
  </view>
</template>

<script>
import {
  questionnaireApiList,
  questionnaireApiAdd,
} from "@/components/api/api.js";
export default {
  data() {
    return {
      // 问卷调查
      current: -1,
      list: [],
      answerList: [],
    };
  },
  mounted() {
    this._questionnaireApiList();
  },
  onLoad(opt) {
    this.order_id = opt.order_id;
  },
  methods: {
    btn() {
      let filterArr = this.answerList.filter( ele => ele )
      if (filterArr.length < this.answerList.length) {
        uni.showToast({
          title: `你还有${
            this.answerList.length - filterArr.length
          }道题没有回答`,
          icon: "none",
        });
        return false;
      }
      let obj = {
        answer: this.answerList.join(","),
        order_id: this.order_id,
      };

      questionnaireApiAdd(obj).then((res) => {
        uni.showToast({
          title: res.mig || '提交失败',
          icon: "none",
        });
        uni.navigateTo({
           url: '../order/orderAll'
        });
      });
    },
    radioChange(index, questionnaire_id, event) {
      let val = event.detail.value;
      this.answerList[index] = questionnaire_id + ";" + val;
    },
    _questionnaireApiList() {
      questionnaireApiList().then((res) => {
        res.varList.forEach((ele, index) => {
          ele.questionList = [
            {
              value: 1,
              label: ele.questionnaire_one,
            },
            {
              value: 2,
              label: ele.questionnaire_two,
            },
          ];
          if (ele.questionnaire_three) {
            ele.questionList.push({
              value: 3,
              label: ele.questionnaire_three,
            });
          }
        });
        this.list = res.varList;
        this.answerList.length = this.list.length;
        this.answerList.fill( null )
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.fl {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/deep/ .uni-radio-input-checked {
  background: #ffc10d !important;
  border-color: #ffc10d !important;
  &::before {
    color: #191919 !important;
  }
}
/deep/ .uni-radio-input {
  width: 34rpx !important;
  height: 34rpx !important;
}
.questionnaire-survey {
  width: 670rpx;
  margin: 0 auto;
  .problem-list {
    padding-bottom: 25rpx;
    border-bottom: #bfbfbf 1rpx solid;
    margin-bottom: 80rpx;
    .title {
      font-size: 28rpx;
      font-weight: 500;
      color: #1a1a1a;
      line-height: 36prx;
      margin: 27rpx 0 43rpx 0;
    }
    .question-list {
      .radio-group {
        width: 100%;
        .question-label {
          font-size: 28rpx;
          color: #1a1a1a;
        }
      }
    }
  }
  .btn {
    background: #ffc10d;
    width: 100%;
    height: 91rpx;
    border-radius: 8rpx;

    font-size: 36rpx;
    font-weight: 500;
    color: #ffffff;
    line-height: 91rpx;
    text-align: center;
  }
}
</style>
