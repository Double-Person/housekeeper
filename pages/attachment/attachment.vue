<template>
	<view class="index">
		<button @click="html2canvas.create" class="btns" v-if="isShow">下载附件</button>
		<!-- 服务项目 -->
		<view class="serve">
			<view class="titb">
				<text class="tit_a">方案详情</text>
				<text class="tit_b" @click="_contractType({contract_type:plantInfo.contract.contract_type, order_id :plantInfo.order_id})">查看合同</text>
			</view>
			<view class="box" v-if="plantInfo.programme">
				<view class="text" v-for="(item, index) in plantInfo.programme">
					<text>{{ item.name }}</text>
					<text>{{ item.price }} / {{ item.company }}</text>
					<text>¥{{ item.price * item.numbers }}</text>
				</view>
				
			</view>
			<view class="bottom">
				<view class="left">
					<text>开工时间：</text>
					<text>{{ plantInfo.starttime }}</text>
				</view>
				<view class="right">
					<text>完工时间：</text>
					<text>{{ plantInfo.endtime }}</text>
				</view>
				<view class="youhui">
					<text class="color">总金额：</text>
					<text class="color">{{ plantInfo.proportion }}</text>
				</view>
			</view>
		</view>

		<!-- 照片 -->
		<view class="order_img">
			<view class="title">
				照片
			</view>
			<view class="img_data" v-if="plantInfo.urllist">
				<view class="oimg" v-for="(item, index) in plantInfo.urllist">
					<image :src="IMGBASEURL + item.picture_url"></image>
				</view>
				
			</view>
		</view>
		<!-- 备注 -->
		<view class="order_txt">
			<view class="title">
				备注
			</view>
			<view class="txt_data">
				{{ plantInfo.remarks }}
			</view>
		</view>
		

	</view>
</template>

<script>
	import { programmeApiList, upLoadByBase64 } from "@/components/api/api.js";
	import { imgBaseUrl } from "@/components/api/request.js";
	export default {

		data() {
			return {
				isShow: true,
				IMGBASEURL: imgBaseUrl,
		
				plantInfo: {},
			}
		},
		onLoad(opt) {
			let order_id = opt.order_id
			this._programmeApiList(order_id)
		},
		methods: {
			isShowBtn() {
				this.isShow = !this.isShow
			},
			_contractType({contract_type, order_id}) {
				if(contract_type == 1) { // 施工合同
					uni.navigateTo({
						url: '../../constructionContracts/constructionContracts?order_id='+ order_id + '&disabel=disabel'
					})
				}else if(contract_type == 2) {  // 维修合同
					uni.navigateTo({
						url: '../../maintenanceContracts/maintenanceContracts?order_id=' +order_id + '&disabel=disabel'
					})
				}else {
					uni.showToast({
						title: '系统错误',
						icon: 'none'
					})
				}
				
			},
			_programmeApiList(order_id) {
				programmeApiList({ order_id }).then(res => {
					this.plantInfo = res.varList
				})
			},
			renderFinish(opt) {
				const that = this;
				upLoadByBase64({
					imgStr: opt.path
				}).then(res => {
					let url = this.IMGBASEURL + res.data;
					this.downLoad(url)
				}).catch(() => uni.showToast({
					title: '上传图片失败',
					icon: 'none'
				}))
			},
			showLoading() {
				uni.showLoading({
					title: '下载中……',
					mask: true
				})
			},
			hideLoading() {
				uni.hideLoading()
			},
			// 下载
			downLoad(url) {
				const that = this;
				uni.downloadFile({
				    url: url,
				    success: (res) => {
				        if (res.statusCode === 200) {
				            uni.saveImageToPhotosAlbum({
				            	filePath: res.tempFilePath,
								success: function() {
									
									setTimeout(() => {
										uni.showToast({ title: "保存成功", icon: "none" });
									}, 1000)
								},
								fail: function() {
									setTimeout(() => {
										uni.showToast({ title: "保存失败", icon: "none" });
									}, 1000)
								},
								complete() {
									that.hideLoading();
									that.isShowBtn()
								}
				            })
				        }
				    },
					fail: () => {
						uni.showToast({
							title: '下载失败',
							icon: 'none'
						})
					}
				});
			},
			
		}
	}
</script>

<script module="html2canvas" lang="renderjs">
	import html2canvas from 'html2canvas';
	export default {
		methods: {
			async create() {	
				try {
					this.$ownerInstance.callMethod('showLoading', true);
					this.$ownerInstance.callMethod('isShowBtn', true);
					const timeout = setTimeout(async () => {
						const shareContent = document.body;
						window.pageYOffset = 0;
						document.documentElement.scrollTop = 0;
						document.body.scrollTop = 0;
						const canvas = await html2canvas(shareContent, {
							width: shareContent.offsetWidth, //设置canvas尺寸与所截图尺寸相同，防止白边
							height: shareContent.offsetHeight, //防止白边
							logging: true,
							useCORS: true
						});
						const base64 = canvas.toDataURL('image/jpeg', 1);
						this.$ownerInstance.callMethod('renderFinish', {
							path: base64,
						});
						clearTimeout(timeout);
					}, 500);
				} catch (error) {
					console.log(error)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@font-face {
		font-family: SourceHanSansCN;
		src: url("~@/static/SourceHanSansCN-Normal.otf") format('truetype'),
	}
	.btns {
		background: #F9C923;
		margin: 30rpx auto;
	}

	.index {
		width: 750upx;
		background-color: #F2F2F2;
		font-family: SourceHanSansCN;
	}

	.serve {
		padding: 0upx 40upx;
		margin-top: 20upx;
		width: 670upx;
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
			.tit_a{
				float: left;
			}
			.tit_b{
				float:right;
				// color: #D4D4D4;
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

			}
		}

		.bottom {
			padding: 20upx 0upx 40upx 0upx;
			font-size: 24upx;
			color: #191919;
			position: relative;

			.right {
				margin-top: 18upx;
			}

			.youhui {
				position: absolute;
				top: 20upx;
				right: 0upx;
			}

			.color {
				color: #FA4F4F;
			}
		}
	}

	.order_img {
		width: 750px;
		background-color: #fff;
		padding: 40upx;
		overflow: hidden;
		margin-top: 20upx;

		.title {
			width: 670upx;
			padding-bottom: 20upx;
			border-bottom: 2upx solid rgba(190, 190, 190, 1);
			font-size: 28upx;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		.img_data {
			width: 670upx;
			display: flex;
			justify-content: space-between;
			margin-top: 25upx;
			&::after{
				width: 210upx;
				content: '';
			}

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
			font-size: 28upx;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
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
			text{
				color: #FA4F4F;
			}
		}

		.fu {
			float: left;
			margin-left: 250upx;
		}
	}
</style>
