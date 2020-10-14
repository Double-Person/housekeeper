<template>
	
	<view class="newfrom">
		<view class="sou">
			<view class="sou_ipt">
				<input type="text" value="" />
				<view class="order_txt">
					<view class="sou_icon">
						<image src="../../static/order_icon/sou.png"></image>
					</view>
					<text>搜索订单</text>
				</view>
			</view>
		</view>
		
		<!--  -->
		<view class="top">
			<view :class="active">全部</view>
			<view>进行中</view>
			<view>已完成</view>
		</view>
		
		<!--  -->
		<view class="form_deta">
			<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index"></fromDeatil>
		</view>
	</view>
</template>

<script>
	import fromDeatil from "../../components/fromAll.vue"
	export default {
		components:{
			fromDeatil
		},
		data() {
			return {
			
			}
		},
		methods: {
		
			getDetail(act){
				
				uni.navigateTo({
					url:'fankui'
				})
				
			},
			
			// 施工跳转
			sgDetail(){
			 uni.navigateTo({
			 	url:"./sgDetail"
			 })
			},
			
		},
		components: {
			fromDeatil
		}
	}
</script>

<style lang="scss" scoped>
	.sou {
		width: 100%;
		height: 130upx;
		background-image: url(../../static/order_icon/suo_big.png);
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
		padding: 0 20upx;
		width: 710upx;
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
