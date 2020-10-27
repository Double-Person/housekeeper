<template>
	<view class="index">
		<view class="box">
			<view class="tit" @click="szfan">
				<text>选择方案</text>
				<image src="../../../static/loginImg/hright.png" mode=""></image>
			</view>
			<view class="bigBox">
				<view class="text">
					<view class="text_a">方案名称</view>
					<view class="text_b">22/㎡/</view>
					<view class="text_c">
						<input type="text" value="" />
						<text>㎡</text>
					</view>
				</view>
				<view class="text">
					<view class="text_a">方案名称</view>
					<view class="text_b">22/㎡/</view>
					<view class="text_c">
						<input type="text" value="" />
						<text>㎡</text>
					</view>
				</view>
				<view class="text">
					<view class="text_a">方案名称</view>
					<view class="text_b">22/㎡/</view>
					<view class="text_c">
						<input type="text" value="" />
						<text>㎡</text>
					</view>
				</view>
			</view>
			<view class="time">
				<text>开工时间:2020-07-09</text>
				<text>完成时间:2020-07-09</text>
			</view>
		</view>
		<!-- 优惠价格 -->
		<view class="yhjg">填写优惠价格</view>
		<!-- 上传照片 -->
		<view class="sczz">
			<view class="tit">上传照片</view>
			<image src="../../../static/loginImg/axx.png" mode=""></image>
		</view>
		<!-- 备注 -->
		<view class="bz">
			<view class="tit">备注</view>
			<textarea value="" placeholder="xxxx" class="inp"/>
		</view>
		<!-- 支付比例 -->
		<view class="pay">
			<view class="tit">选择支付比例</view>
			<image src="../../../static/loginImg/hxiala.png" mode=""></image>
		</view>
		<!-- 提交审核 -->
		<view class="tijsh">
			<view class="text">
				<text>总价:</text>
				<text>666</text>
				<text>￥300</text>
			</view>
			<view class="btn" @click="goi">提交审核</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				info: {}
			}
		},
		onLoad(option) {
			this.info = JSON.parse(option.info)
			console.log(this.info)
		},
		methods:{
			szfan(){
				uni.navigateTo({
					url:'xuanzefangan'
				})
			},
			goi(){
				uni.navigateTo({
					url:'dingdanzhongxin'
				})
			}
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
		padding: 0upx 40upx;
		width:670upx;
		height:395upx;
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
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(169,169,169,1);
		line-height:80upx;
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
	.pay{
		margin-top: 20upx;
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
</style>
