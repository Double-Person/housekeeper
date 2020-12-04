<template>
	<view class="index">
		<!-- 头部导航 -->
		<!--  -->
		<view class="bigbox">
			<textarea rows="3" cols="20" class="textareas" v-model="note" placeholder="请输入"></textarea>
		</view>
		<!--  -->
		<!--  -->
		<view class="box">
			<view class="text">添加图层</view>
			<view class="photo-list">
				<view class="img-warp" v-if="urlList.length < 6" @click="chooseImg">
					<image src="/static/loginImg/axx.png" mode=""></image>
				</view>
				<view class="img-warp" v-for="(item, index) in urlList" :key="index">
					<image :src="imgBaseUrl + item" mode=""></image>
				</view>
				
			</view>
			
			<button type="default" class="button" @click="_workeradd">提交</button>
		</view>
	</view>
</template>

<script>
	import {masterStart, upLoadFile} from '@/components/api/api.js';
	import {imgBaseUrl} from '@/components/api/request.js'
	import {positionObj} from "@/variable/orderCenter.js";
	export default {
		data (){
			return{
				imgBaseUrl: imgBaseUrl,
				urlList: [],
				bz: '',
				note: '',
				info: {}
			}
		},
		onLoad(opt) {
			this.bz = opt.bz;
			this.info = JSON.parse(opt.info);
			if( opt.bz == 0) {
				uni.setNavigationBarTitle({
					title: '售后开工'
				})
			}else if( opt.bz == 1) {
				uni.setNavigationBarTitle({
					title: '售后施工进度'
				})
			}else if( opt.bz == 2) {
				uni.setNavigationBarTitle({
					title: '售后完成'
				})
			}
		},
		methods:{
			_workeradd() {		
				// * 工长 开工 施工进度汇报 完工
				// * worker_id
				// * order_id
				// * construction_type 0新订单、1售后订单
				// * bz   
				// * urllist
				// * note   备注
				// * orderquality_id
				
				let obj = {
					worker_id: uni.getStorageSync('WORKERS_ID'),
					order_id: this.info.order_id,
					construction_type: 1,
					bz: this.bz,// 0开工 、 1施工进度 、 2完成
					urllist: this.urlList.join(','),
					note: this.note,
					orderquality_id: this.info.orderquality_id
				}
		
				
				masterStart(obj).then(res => {
					uni.showToast({
						title: res.mig || '提交失败',
						icon: 'none'
					})
					this.$toIndex()
				})
			},
			
			
			chooseImg() {
				uni.chooseImage({
				  count: 1,
				  sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
				  sourceType: ["album", "camera"], //从相册选择
				  success: (res) => {
				    upLoadFile({ path: res.tempFilePaths[0] }).then((upFile) => {
				      this.urlList.push(JSON.parse(upFile.data).data)
				      
				    });
				  },
				});
			},
			
			_masterStart() {
				
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/common/style/tabList.scss";
	.photo-list{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		&::after{
			width: 30%;
			content: '';
		}
		.img-warp{
			width: 30%;
		}
	}
	
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
