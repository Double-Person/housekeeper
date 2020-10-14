<template>
	<view class="index">
		<view class="sou">
			<view class="sou_ipt">
				<input type="text" value="" />
				<view class="order_txt">
					<view class="sou_icon">
						<image src="../../../static/order_icon/sou.png"></image>
					</view>
					<text>搜索</text>
				</view>
			</view>
		</view>
		<view class="box">
			<view class="tit" v-for="(item,index) in 2" :key="index">
				<view class="titT">
					<view class="titi">一级名称</view>
					<image src="../../../static/loginImg/hxiala.png" mode=""></image>
				</view>
				<view class="titTs" v-show="item.flag" v-for="(items,idex) in 2" :key="idex">
					<view class="titBox" @click="flagS(index,idex)">
						<view class="titi">二级名称</view>
						<image src="../../../static/loginImg/xlll.png" mode=""></image>
					</view>
					<view class="text">
						<view class="textb">
							<image src="../../../static/loginImg/aaxa.png" mode=""></image>
							<text>三级名称名称名称名称名称名称名称</text>
						</view>
						<view class="textb">
							<image src="../../../static/loginImg/kax.png" mode=""></image>
							<text>三级名称名称名称名称名称名称名称</text>
						</view>
						<view class="textb">
							<image src="../../../static/loginImg/kax.png" mode=""></image>
							<text>三级名称名称名称名称名称名称名称</text>
						</view>
					</view>
				</view>
				
			</view>
		</view>
		<!-- 开工时间 -->
		<view class="timek">
			<text>开工时间</text>
			<input type="text" value="填写" class="inp" />
		</view>
		<!-- 完工时间 -->
		<view class="timek">
			<text>完工时间</text>
			<input type="text" value="填写" class="inp" />
		</view>
		<!-- 确定 -->
		<view class="btn" @click="btn">确定</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				flag:false,
				flags:false,
				
			}
		},
		methods:{
			btn(){
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
	.sou {
		width: 100%;
		height: 130upx;
		background-image: url(../../../static/order_icon/suo_big.png);
		overflow: hidden;
	}
	
	.sou_ipt {
		width: 671upx;
		height: 71upx;
		overflow: hidden;
		margin: 0 auto;
		margin-top: 28upx;
		border-radius: 50upx;
		position: relative;
	}
	
	input {
		width: 100%;
		height: 71upx;
		background-color: #fff;
		padding-left: 40upx;
		position: absolute;
	}
	
	.order_txt {
		position: absolute;
		z-index: 2;
		overflow: hidden;
		margin-left: 254upx;
		margin-top: 19upx;
	}
	
	.sou_icon {
		width: 34upx;
		height: 35upx;
		float: left;
	}
	
	.sou_icon image {
		width: 100%;
		height: 100%;
	
	}
	
	.order_txt text {
		display: block;
		float: left;
		font-size: 28upx;
		color: #B2B2B2;
		margin-left: 19upx;
		margin-top: 2upx;
	}
	
	.box{
		margin-bottom: 19upx;
		padding: 25upx 40upx;
		width:670upx;
		background:rgba(255,255,255,1);
		.tit{
			.titT{
				width: 670upx;
				height: 80upx;
				border-bottom:1upx solid rgba(191,191,191,1);
				display: flex;
				justify-content: flex-end;
				align-items: center;
				.titi{
					font-size:28upx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(26,26,26,1);
					line-height:80upx;
				}
				image{
					margin-left: auto;
					display: block;
					width: 40upx;
					height: 40upx;
				}
			}
			.titTs{
				.titBox{
					padding-left: 20upx;
					width: 650upx;
					height: 70upx;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					.titi{
						font-size:28upx;
						font-family:PingFang SC;
						font-weight:400;
						color:rgba(169,169,169,1);
					}
					image{
						margin-left: auto;
						display: block;
					}
					.imgH{
						width: 24upx;
						height: 13upx;
					}
					.imgW{
						width: 13upx;
						height: 24upx;
					}
				}
			}
			.text{
				padding: 25upx;
				width:620upx;
				height:132upx;
				background:rgba(242,242,242,1);
				border-radius:12upx;
				.textb{
					height:50upx;
					display: flex;
					align-items: center;
					image{
						display: block;
						width: 34upx;
						height: 34upx;
						margin-right: 16upx;
					}
					text{
						font-size:28upx;
						font-family:PingFang SC;
						font-weight:400;
						color:rgba(26,26,26,1);
					}
				}
			}
		}
	}

	.timek{
		margin-bottom: 10upx;
		padding: 0 40upx;
		width:670upx;
		height:80upx;
		background:rgba(255,255,255,1);
		display: flex;
		align-items: center;
		text{
			display: block;
			width: 160upx;
			font-size:28upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(26,26,26,1);
		}
		.inp{
			margin-left: 127upx;
			width:152upx;
			font-size:28upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(169,169,169,1);
		
		}
	}

	.btn{
		position: fixed;
		left:15upx;
		bottom: 32upx;
		width: 715upx;
		height: 91upx;
		text-align: center;
		line-height: 91upx;
		font-size:36upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
		background: #FFC10C;
		border-radius: 10upx;
	}
</style>
