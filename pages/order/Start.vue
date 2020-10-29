<template>
	<view class="index">
		<!-- 头部导航 -->
		<!--  -->
		<view class="bigbox">
			<textarea rows="3" cols="20" class="textareas" v-model="note" placeholder="请输入备注信息"></textarea>
		</view>
		<!-- START: 0, // 待开工  CONSTRUCTION: 1, // 施工中 REVIEW: 2, // 审核中 THROUGH: 3, // 已通过 NOT_THROUGH: 4, // 未通过 QUALITY: 5, // 质保中-->
		<view class="box">
			<view class="text">添加图层</view>
			<image :src=" img ? (imgBaseUrl + img) : '/static/loginImg/axx.png'" mode="" @click="changeImg"></image>
			<button type="default" class="button" @click="submitBtn">提交</button>
		</view>
	</view>
</template>

<script>
		import {start, upLoadFile} from "@/components/api/api.js"
		import {imgBaseUrl} from "@/components/api/request.js"
		import { workersOrderCenterAllStatus } from '@/variable/orderCenter.js'
	export default {
		data (){
			return{
				imgBaseUrl: imgBaseUrl,
				TYPES: workersOrderCenterAllStatus,
				img: '',
				note: '',
				order_id: '',
				orderType: '',
				
			}
		},
		onLoad(option) {
			this.order_id = option.order_id
			this.orderType = option.types
		},
		methods:{	
			
			submitBtn() {
				this._start()
				// 施工   开工
				// 施工  添加进度
			},
			_start(order_id) {
				let obj = {
					'order_id': this.order_id,
					worker_id: uni.getStorageSync('WORKERS_ID'),
					construction_type: 0,  // 0新订单、1售后订单
					bz: 0, // 0开工 、 1施工进度 、 2完成
					note: this.note,
					urllist: this.img
				}
				start(obj).then(res => {
					uni.showToast({
						title: res.mig,
						icon: 'none'
					})
					uni.navigateTo({
						url: './orderAll'
					})
				})
			},
			changeImg() {
				uni.chooseImage({
				  count: 1,
				  sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
				  sourceType: ["album", "camera"], //从相册选择
				  success: res => {
				    upLoadFile({ path: res.tempFilePaths[0] }).then((upFile) => {
				      console.log(upFile);
					  this.img = JSON.parse(upFile.data).data;
					  console.log(this.img)
				    });
				  },
				});
			},
		
		}
	}
</script>

<style lang="scss" scoped>
	.index{
		width:750rpx;
		height:100vh;
		background-color: #F2F2F2;
	}
	.bigbox{
		padding: 30upx;
		background: white;
	}	
	.textareas{
		margin-top: 20upx;
		text-indent:2em;
		background-color: #F2F2F2;
		width: 690upx;
		height: 360upx;
	}
	.box{
		margin-top: 20upx;
		padding: 40upx;
		background:white;
		width: 750upx;
		.text{
			font-size:32upx;
			font-family:SourceHanSansCN;
			font-weight:400;
			color:rgba(51,51,51,1);
		}
		image{
			margin-top:40upx;
			display: block;
			width:154upx;
			height:154upx;
		}
		.button{
			width:715upx;
			height:91upx;
			background:linear-gradient(150deg,rgba(255,200,35,1),rgba(255,193,12,1));
			box-shadow:0upx 0upx 6upx 0upx rgba(208,139,20,0.25);
			border-radius:8upx;
			font-size:36upx;
			font-family:SourceHanSansCN;
			font-weight:400;
			color:rgba(51,51,51,1);
			line-height:91upx;
			text-align: center;
			position: fixed;
			bottom:76upx;
			left:14upx;
		}
	}
	.name_B{
			margin-top:20upx;
		.name{
			padding-left: 40upx;
			width:750upx;
			height:110upx;
			background:rgba(255,255,255,1);
			border-bottom: 1upx solid rgba(238,238,238,.5);
			font-size:32upx;
			font-family:SourceHanSansCN;
			font-weight:400;
			color:rgba(51,51,51,1);
			line-height:110upx;
		}
	}
</style>
