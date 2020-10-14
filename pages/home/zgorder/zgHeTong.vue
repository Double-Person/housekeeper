<template>
	
	<view class="newfrom">
		<view class="sou">
			<view class="sou_ipt">
				<input type="text" value="" />
				<view class="order_txt">
					<view class="sou_icon">
						<image src="../../../static/order_icon/sou.png"></image>
					</view>
					<text>搜索订单</text>
				</view>
			</view>
		</view>
		
		<!--  -->
		<view class="top">
			<view class="active">待通过</view>
			<view >已通过</view>
			<view>未通过</view>
		</view>
		<!--  -->
	
	
		
		<!--  -->
		<view class="form_deta" >
			<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index"></fromDeatil>
		</view>
		
	</view>
</template>

<script>
	import fromDeatil from "../../../components/fromAll.vue"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
		
			getDetail(act){
				uni.navigateTo({
					url:'zghetongs'
				})
				
			},
			
			gox(){
			 uni.navigateTo({
			 	url:"./zgrenyuan"
			 })
			},
			
		},
		components: {
			fromDeatil
		}
	}
</script>

<style lang="scss" scoped>
	.num{
		padding: 15upx 30upx;
		display: flex;
		justify-content: space-between;
		.a{
			font-size:26upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(26,26,26,1);
		}
	}
	.numBox{
		padding: 40upx;
		background: white;
		.bigBox{
			border-radius: 8upx;
			border:1upx solid #FFEFC0;
			margin-bottom: 15upx;
			.box{
				margin-top: 15upx;
				padding: 0 30upx;
				width: 610upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				.tit{
					display: flex;
					
					image{
						display: block;
						width:80upx;
						height:80upx;
						border-radius: 100%;
					}
					.text{
						margin-left: 22upx;
						.name{
							font-size:32upx;
							font-family:PingFang SC;
							font-weight:400;
							color:rgba(51,51,51,1);
						}
						.zw{
							font-size:24upx;
							font-family:PingFang SC;
							font-weight:400;
							color:rgba(154,154,154,1);
						}
					}
				}
				.bgtext{
					margin-left: auto;
					padding-top: 6upx;
					width: 130upx;
					height: 40upx;
					font-size:26upx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(255,193,13,1);
					text-align: center;
					border:1upx solid #FFEFC0;
					border-radius: 8upx;
					
				}
			}
			.bigBoxs{
				padding: 40upx;
				height:118upx;
				background:rgba(255,255,255,1);
				text{
					display: block;
					font-size:28upx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(153,153,153,1);
					line-height:23px;
				}
			}
		}
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
	.top {
		padding: 0 30upx;
		width: 690upx;
		height: 110upx;
		display: flex;
		flex-wrap: nowrap;
		overflow: hidden;
		// border: 1px solid red;
		display: flex;
		justify-content: space-between;
		background:rgba(255,255,255,1);
	}
	
	.top view {
		height: 61upx;
		float: left;
		// border: 1px solid red;
		margin-left: 67upx;
		font-size: 32upx;
		margin-top: 21upx;
		line-height: 61upx;
	}
	
	.top view:nth-of-type(1) {
		margin-left: 9upx;
	}
	.active {
		border-bottom: 6upx solid #FFC823;
		font-weight: 700;
	}
</style>
