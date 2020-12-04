<template>
	<view class="index">
		<!-- 头部导航 -->
		<!--  -->
		<view class="bigbox">
			<textarea rows="3" cols="20" class="textareas" v-model="bz" placeholder="请输入"></textarea>
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
	import {workeradd, upLoadFile} from '@/components/api/api.js';
	import {imgBaseUrl} from '@/components/api/request.js'
	import {positionObj} from "@/variable/orderCenter.js";
	export default {
		data (){
			return{
				imgBaseUrl: imgBaseUrl,
				urlList: [],
				isThrough: '',
				bz: '',
				info: {}
			}
		},
		onLoad(opt) {
			this.isThrough = opt.isThrough;
			this.info = JSON.parse(opt.info);
		},
		methods:{
			_workeradd() {
				// * 保存
				// * orderaftersale_id
				// * aftersale_type  售后类型(0退款、1质量问题)
				// * user_id  用户、工人、主管的id
				// * usertype   0用户、1工人、2主管
				// * aftersale_state 售后状态(0待处理、1同意、2不同意)
				// * bz  原因
				// * urllist
				let obj = {
					...this.info
				};
				
				let levels = uni.getStorageSync('HOUSE_LEVELS'),
					usertype = '';
				if (levels == positionObj.DIRECTOR) { // 主管
					usertype = 2
				} else if (levels == positionObj.MASTER) { // 工长
					usertype = 1
				} else if (levels == positionObj.TECHNICIAN) { // 技术
					usertype = 0
				}
				uni.showLoading({
					title:'加载中',
					mask: true
				})
				
				obj.user_id = uni.getStorageSync('WORKERS_ID');
				obj.usertype = usertype;
				obj.aftersale_state = this.isThrough;
				obj.urllist = this.urlList.join(',');
				obj.bz = this.bz;
				delete obj.order_id
				
				
				
				workeradd(obj).then(res => {
					setTimeout(()=> {
						uni.showToast({
							title: res.mig || '提交失败',
							icon: 'none'
						})
						this.$toIndex()
					}, 300)
				}).finally(() => uni.hideLoading())
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
			
			
			
			navigateBack(){
				console.log("1")
				uni.navigateBack({
					
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
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
