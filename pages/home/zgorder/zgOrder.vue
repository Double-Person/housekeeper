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
		<scroll-view scroll-x="true">
			<view class="top">
				<view class="active">全部</view>
				<view>施工</view>
				<view>审核</view>
				<view>客户确认</view>
				<view>质保</view>
				<view>完成</view>
				<view>取消</view>
			</view>
		</scroll-view>
		<!-- 全部 -->
		<view class="form_deta" :class="{block:act==0}">
			<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index"></fromDeatil>
		</view>
		<!-- 施工 -->
		<!-- <view class="form_deta" :class="{block:act==1}" @click="sgDetail"> -->
		
		<!--  -->
		<!-- 审核页面 -->
		<view class="form_deta" :class="{block:act==2}">
			<view class="state">
				<text class="statAct">审核中</text>
				<text >已通过</text>
				<text >未通过</text>
			</view>
			<!-- 切换页面 -->
			<view class="form_deta">
				<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index" ></fromDeatil>
			</view>
			<view class="form_deta" :class="{block:sAce==1}">
				<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index" ></fromDeatil>
			</view>
			<view class="form_deta" :class="{block:sAce==2}">
				<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index"></fromDeatil>
			</view>
		</view>
		<!-- 客户确认 -->
		<view class="form_deta" :class="{block:act==3}">
			<view class="state states">
				<text class="statAct">审核中</text>
				<text :class="statAct">未通过</text>
			</view>
			<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index" @getDetail="kehuqueren"></fromDeatil>
		</view>
		
		
		<view class="form_deta" :class="{block:act==1}" >
			<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index" @getDetail="getDetail"></fromDeatil>
		</view>
		<!-- <view class="form_deta" :class="{block:act==3}" >
			<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index" @getDetail="kehuqueren"></fromDeatil>
		</view> -->
		<view class="form_deta" :class="{block:act==4}">
			<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index"  @getDetail="zhibaoxq"></fromDeatil>
		</view>
		<view class="form_deta" :class="{block:act==5}">
			<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index"  @getDetail="wancheng"></fromDeatil>
		</view>
		<view class="form_deta" :class="{block:act==6}">
			<fromDeatil :msg="msg" v-for="(item,index) in 2" :key="index"  @getDetail="yiquxiao"></fromDeatil>
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
		
			// 施工跳转
			getDetail(){
				uni.navigateTo({
					url:"./zgshigong"
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
					url:'zgzhibaoxiangqing'
				})
			},
			wancheng(){
				uni.navigateTo({
					url:'zgwanchengxiangqing'
				})
			},
			yiquxiao(){
				uni.navigateTo({
					url:'zgquxiao'
				})
			},
			butongguo(){
				uni.navigateTo({
					url:'butongyi'
				})
			},
			kehuqueren(){
				uni.navigateTo({
					url:'zgkehuquerenxiangqing'
				})
			},
			shenhexx(sAce){
				if(sAce==2){
					uni.navigateTo({
						url:'zgweitongguo'
					})
				}else{
					uni.navigateTo({
						url:'zgshenhexiangqing',
					})
				}
				
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
	.state{
		width: 710upx;
		margin-top: 19upx;
		// height:80upx;
		display: flex;
		justify-content: space-between;
		padding: 0 20upx;
		
	}
	.states{
		width: 530upx;
		margin-top: 19upx;
		// height:80upx;
		display: flex;
		justify-content: space-between;
		padding: 0 110upx;
	}
	.state text{
		display:block;
		font-size: 32upx;
		padding: 19upx 47upx;
		border: 1upx solid #191919;
		// margin-top: 20upx;
		// margin-left: 60upx;
		border-radius: 10upx;
	}
	.state text:nth-of-type(1){
		// margin-left: 30upx;
	}
	.state .statAct{
		background: #FFC823;
		color: #fff;
		border: none;
	}
</style>
