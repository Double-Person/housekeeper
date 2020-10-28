<template>
	<view class="index">
		<view class="box">
			<view class="tit" @click="szfan">
				<text>选择方案</text>
				<image src="/static/loginImg/hright.png" mode=""></image>
			</view>
	
			<view class="bigBox" v-if="isShowPlant && selectPlant.list != 0">
				<view class="text" v-for="item in selectPlant.list" :key="item.programme_id">
					<view class="text_a">{{item.name}}</view>
					<view class="text_b">{{item.company}}/㎡</view>
					<view class="text_c">
						<input type="text" value="" />
						<text>㎡</text>
					</view>
				</view>
	
			</view>
			<view class="time" v-if="isShowPlant">
				<text>开工时间: {{selectPlant.starttime}}</text>
				<text>完成时间: {{selectPlant.endtime}}</text>
			</view>
		</view>
		<!-- 优惠价格 -->
		<view class="yhjg">优惠价格
			<input type="text" v-model="concessional" />
		</view>
		<!-- 上传照片 -->
		<view class="sczz">
			<view class="tit">上传照片</view>
			<image v-if="!img" src="/static/loginImg/axx.png" mode="" @click="chooseImgUpload"></image>
			<image v-if="img" :src="imgBaseUrl + img" mode="" @click="chooseImgUpload"></image>
		</view>
		<!-- 备注 -->
		<view class="bz">
			<view class="tit">备注</view>
			<textarea v-model="remarks" placeholder="请输入备注" :maxlength="-1" class="inp" />
			</view>
		<!-- 支付比例 -->
		<view class="warp-option">
			<view class="pay">
				<view class="tit">选择支付比例</view>
				<image src="/static/loginImg/hxiala.png" mode="" @click="isShowPaymentProportion = !isShowPaymentProportion"></image>
			</view>
			<view v-show="isShowPaymentProportion" class="pay-warp">
				<view class="text" v-for="(ele,idex) in payProList" :key="idex">
					<!-- seriesname -->
					<view class="textb" @click="clickPayProId(ele)">
						<image src="/static/loginImg/aaxa.png" mode="" v-show="checkPayProId == ele.id"></image>
						<image src="/static/loginImg/kax.png" mode="" v-show="checkPayProId != ele.id"></image>
						<text>{{ele.label}}</text>
					</view>
			
				</view>
			</view>
		</view>
		
		<!-- 提交审核 -->
		<view class="tijsh">
			<view class="text">
				<text>总价:</text>
				<text>{{comptedMoney()}}</text>
				<text>￥{{comptedMoney() * checkPayProId}}</text>
			</view>
			<view class="btn" @click="submitAudit">提交审核</view>
		</view>
	</view>
</template>

<script>
	import {upLoadFile, addprogrammeinfo} from "@/components/api/api.js"
	import {imgBaseUrl} from "@/components/api/request.js"
	export default{
		data() {
			return {
				imgBaseUrl: imgBaseUrl,
				info: {}, // 上页信息
				selectPlant: {},  // 选择方案页信息
				img: '', //  图片
				remarks: '', // 备注
				concessional: '', // 优惠价格
				isShowPlant: false,
				isShowPaymentProportion: false, // 是否显示支付比例
				checkPayProId: 1,
				payProList: [
					{id: 0.1, label: '百分之十'},
					{id: 0.2, label: '百分之二十'},
					{id: 0.3, label: '百分之三十'},
				]
			}
		},
		onLoad(option) {
			this.info = JSON.parse(option.info)
			if(option.selectPlant) {
				this.selectPlant = JSON.parse(option.selectPlant )
				
				this.selectPlant.list = this.selectPlant.list.filter(ele => ele)
				this.isShowPlant = true
			}else {
				this.isShowPlant = false
			}

		},
		methods:{
			
			// 提交审核 按钮
			submitAudit(){
				 // type（0 是新增  1  是修改）   order_id 订单id  list（这个是穿个方案的数组传id就行） starttime开始时间  endtime结束时间  img 图片   
				 // concessional 优惠价   remarks 备注  proportion 支付比例  price 原价  priceafter 优惠后价格  reason  不通过原因
				 let { img, remarks, concessional, checkPayProId, selectPlant: {starttime, endtime} } = this;
				 let obj = {
					 type: 0, // .substr(0,5)+':00'
					 starttime, endtime, img, remarks,  
					 list: JSON.stringify(this.selectPlant.list),
					 order_id: this.info.order_id,
					 concessional,   // 优惠价
					 proportion: checkPayProId, //支付比例
					 priceafter: '', // 优惠后价格
					 reason: '' , // 不通过原因
				 }
				 console.log(obj)
				 addprogrammeinfo(obj).then(res => {
					 console.log('提交审核', res)
					 uni.showToast({
					 	title:"提交成功",
						icon: 'none'
					 })
				 })
				
				
				// uni.navigateTo({
				// 	url:'dingdanzhongxin'
				// })
			},
			// 计算价格
			comptedMoney() {
				let num = 0;
				if(this.selectPlant.list && this.selectPlant.list.length) {
					let sum = this.selectPlant.list.map(ele => ele.price).forEach(item => {
						num += (item * 1)
					})
				}
				return num
			},
			
			// 选择图片上传
			chooseImgUpload() {
				uni.chooseImage({
				  count: 1,
				  sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
				  sourceType: ["album", "camera"], //从相册选择
				  success: res => {
				    upLoadFile({ path: res.tempFilePaths[0] }).then((upFile) => {
					  this.img = JSON.parse(upFile.data).data
					  console.log(this.img);
				    });
				  },
				});
			},
			
			clickPayProId(ele) {
				this.checkPayProId = ele.id
			},
			// 设置选择方案
			szfan(){
				uni.navigateTo({
					url:'xuanzefangan?info=' + JSON.stringify(this.info)
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	
	.index{
		width: 750upx;
		height: 100vh;
		background: #f2f2f2;
	}
	.box{
		padding: 10upx 40upx;
		width:670upx;
		// height:395upx;
		min-height: 50rpx;
		background:rgba(255,255,255,1);
		.tit{
			width: 670upx;
			display: flex;
			justify-content: space-between;
			margin-bottom: 20upx;
			text{
				font-size:28upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(169,169,169,1);
			}
			image{
				width: 40upx;
				height: 40upx;
			}
		}
		.bigBox{
			background: #FFEBAF;
			padding:25upx 25upx 1upx 25upx;
			width: 620upx;
			.text{
			
				display: flex;
				justify-content: space-between;
				margin-bottom: 20upx;
				.text_a{
					font-size:28upx;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(26,26,26,1);
				
				}
				.text_b{
					font-size:28upx;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(26,26,26,1);
				}
				.text_c{
					width: 130upx;
					display: flex;
					justify-content: center;
					align-items: center;
					input{
						background: #F2F2F2;
						width: 100upx;
						height: 40upx;
					}
					text{
						margin-left:8upx;
						font-size:28upx;
						font-family:PingFang SC;
						font-weight:400;
						color:rgba(26,26,26,1);
					}
				}
			}
		}
		.time{
			margin-top: 20upx;
			text{
				display: block;
				font-size:24upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(251,79,79,1);
				line-height:20px;
			}
		}
	}

	.yhjg{
		margin-top: 20upx;
		padding: 0 40upx;
		width:670upx;
		height:80upx;
		background:rgba(255,255,255,1);
		font-size:28upx;
		font-weight:500;
		color:rgba(169,169,169,1);
		line-height:80upx;
		display: flex;
		align-items: center;
		input{
			margin-left: 50rpx;
		}
	}

	.sczz{
		margin-top: 20upx;
		padding: 20upx 40upx;
		width:670upx;
		height:237upx;
		background:rgba(255,255,255,1);
		.tit{
			font-size:28upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(169,169,169,1);
		}
		image{
			margin-top: 29upx;
			display: block;
			width: 154upx;
			height: 154upx;
		}
	}
	.bz{
		margin-top: 20upx;
		padding: 20upx 40upx;
		width:670upx;
		height: 258upx;
		background:rgba(255,255,255,1);
		.tit{
			padding:20upx 0upx;
			font-size:28upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(51,51,51,1);
			border-bottom:1upx solid rgba(191,191,191,1);
		}
		.inp{
			margin-top: 20upx;
			padding: 25upx;
			width: 620upx;
			height: 61upx;
			background: #f2f2f2;
			font-size:28upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(153,153,153,1);
		}
	}
	
	.warp-option{
		margin-top: 20upx;
		background-color: #fff;
		margin-bottom: 20upx;
	}
	.pay{
		
		padding: 20upx 40upx;
		width:670upx;
		height: 80upx;
		background:rgba(255,255,255,1);
		display: flex;
		justify-content: flex-end;
		align-items: center;
		.tit{
			font-size:28upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(169,169,169,1);
			line-height:80px;
		}
		image{
			margin-left: auto;
			display: block;
			width: 40upx;
			height: 40upx;
		}
	}
	.tijsh{
		margin-top: 20upx;
		padding: 20upx 40upx;
		width:670upx;
		height: 78upx;
		background:rgba(255,255,255,1);
		display: flex;
		align-items: center;
		justify-content: flex-end;
		.text{
			font-size:32upx;
			text:nth-child(1){
				color:#333333;
			}
			text:nth-child(2){
				color:#CACACA;
				text-decoration:line-through;
			}
			text:nth-child(3){
				color:#FB4F4F;
			}
		}
		.btn{
			margin-left: auto;
			text-align: center;
			width: 220upx;
			height: 78upx;
			border-radius: 8upx;
			font-size:32upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(51,51,51,1);
			line-height:78upx;
			background: #FFC822;
		}
	}

	.pay-warp{
		.text {
			padding: 15rpx 25upx;
			width: 620upx;
			margin: 15rpx auto;
			// height: 132upx;
			background: rgba(242, 242, 242, 1);
			border-radius: 12upx;
		
			.textb {
				height: 50upx;
				display: flex;
				align-items: center;
		
				image {
					display: block;
					width: 34upx;
					height: 34upx;
					margin-right: 16upx;
				}
		
				text {
					font-size: 28upx;
					font-family: PingFang SC;
					font-weight: 400;
					color: rgba(26, 26, 26, 1);
				}
			}
		}
	}
	
</style>
