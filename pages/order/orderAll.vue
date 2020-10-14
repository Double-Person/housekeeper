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
		<scroll-view scroll-x="true">
			<view class="top">
				<view class="active">全部</view>
				<view >施工</view>
				<view >审核</view>
			
				<view >质保</view>
				<view >完成</view>
				<view>取消</view>
			</view>
		</scroll-view>
		<!-- 全部 -->
		<view class="form_deta">
			<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index"></fromDeatil>
		</view>
		<!-- 施工 -->
		<!-- <view class="form_deta" :class="{block:act==1}" @click="sgDetail"> -->
		
		
	
		
		
	
	</view>
</template>

<script>
	import fromDeatil from "../../components/fromAll.vue"
	export default {
		data() {
			return {
			   act:0,
			   sAce:0
			}
		},
		methods: {
			
			// 施工跳转
			getDetail(){
				uni.navigateTo({
					url:"./sgdetailAll"
				})
			},
			yitongguo(){
				console.log(1)
				uni.navigateTo({
					url:'shenhexiangqing'
				})
			},
			weitongguo(){
				uni.navigateTo({
					url:'weitongguo'
				})
			},
			zhibaoxq(){
				uni.navigateTo({
					url:'zhibaoxiangqing'
				})
			},
			yiwancheng(){
				uni.navigateTo({
					url:'chakanwenjuan'
				})
			},
			yiquxiao(){
				uni.navigateTo({
					url:'quxiao'
				})
			}
		},
		components: {
			fromDeatil
		}
	}
</script>

<style lang="scss">
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

	scroll-view {
		width: 100%;
		height: 110upx;
		background: #fff;
		overflow: hidden;
	}

	.top {
		width: 130%;
		height: 110upx;
		display: flex;
		flex-wrap: nowrap;
		overflow: hidden;
		// border: 1px solid red;
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
	.form_deta{
		display: none;
	}
	.block{
		display: block;
	}
	
	.state text{
		display: inline-block;
		font-size: 32upx;
		padding: 19upx 47upx;
		border: 1upx solid #191919;
		margin-top: 20upx;
		margin-left: 60upx;
		border-radius: 10upx;
	}
	.state text:nth-of-type(1){
		margin-left: 20upx;
	}
	.state .statAct{
		background: #FFC823;
		color: #fff;
		border: none;
	}
</style>
