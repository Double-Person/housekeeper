<template>
	<view>
		<!-- 工人 -->
		<!-- 头部个人信息 -->
		<view class="title">
			<view class="my_text">
				<view class="my_logo">
					<image src="../../static/my_icon/my_logo.png"></image>
					<image src="../../static/my_icon/logo.jpg" mode="" class="logo"></image>
				</view>
			</view>
			<view class="top_bac">
				<image src="../../static/my_icon/my_topbac.png" mode=""></image>
			</view>
			<text class="my_name">我是昵称</text>
		</view>
		<!-- 功能展示 -->
		<view class="my_list">
			<view class="list_fun">
				<view class="list" v-for="(item,index) in myList" :key="index" @click="getDome(item)">
					<view class="list_left">
						<view class="left_img">
							<image :src="item.image"></image>
						</view>
						<view class="text">{{item.middle}}</view>
					</view>
					<view class="list_right">
						<image src="../../static/my_icon/my_you.png"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="btn" @click="goHome">
			选择你的权限
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				myList: [{
						image: "../../static/my_icon/my_newdan.png",
						middle: "新订单",
						url: "../newfrom/newfrom"
					},
					{
						image: "../../static/my_icon/my_dan.png",
						middle: "订单中心",
						url: "../order/orderAll"

					},
					{
						image: "../../static/my_icon/my_fangan.png",
						middle: "方案",
						url:"../scheme/scheme"

					},
					// {
					// 	image: "../../static/my_icon/my_hetong.png",
					// 	middle: "合同",
					// },
					{
						image: "../../static/my_icon/my_shouhou.png",
						middle: "售后订单",
						url:"../after-sale/after-sale"

					},
					{
						image: "../../static/my_icon/my_shouchu.png",
						middle: "售后处理",
						url:"../after-sale/shouhouchuli"

					},
					{
						image: "../../static/my_icon/my_yungong.png",
						middle: "反馈",
						url:'../feedback/feedback-all'

					},
				]
			}
		},
		methods: {
			getDome(item) {
				console.log(item.url)
				uni.navigateTo({
					url: item.url
				});
			},
			goHome(){
				uni.navigateTo({
					url:'home1'
				});
			}
		}
	}
</script>

</script>

<style lang="scss">
	.btn{
		width: 710upx;
		height: 80upx;
		position: fixed;
		left:20upx;
		bottom: 60upx;
		border-radius: 12upx;
		background: #F9C923;
		text-align: center;
		line-height: 80upx;
	}
	
	/* 头部个人信息 */
	.title {
		width: 750upx;
		height: 378upx;
		background-image: url(../../static/my_icon/my_bac.png);
		position: relative;
		overflow: hidden;
	}

	.my_logo {
		width: 140upx;
		height: 140upx;
		margin-top: 106upx;
		margin-left: 303upx;
		position: relative;
		border-radius: 50%;
		overflow: hidden;
	}

	.my_logo image {
		width: 100%;
		height: 100%;
		position: absolute;
	}

	image {
		width: 100%;
		height: 100%;
	}

	.top_bac {
		width: 749upx;
		height: 175upx;
		position: absolute;
		z-index: 2;
		bottom: 0upx;
	}

	.my_name {
		// width: 142upx;
		height: 34upx;
		display: block;
		font-size: 36upx;
		position: absolute;
		bottom: 79upx;
		left: 304upx;
	}

	/* 功能列表 */
	.my_list {
		width: 750upx;
		height: 956upx;
		background: $uni-color-hui;
		overflow: hidden;
	}

	.list_fun {
		width: 750upx;
		height: 108upx;
		padding-top: 20upx;
	}

	.list {
		background: #ffffff;
		overflow: hidden;

		.list_left {
			width: 400upx;
			float: left;
			overflow: hidden;

			.left_img {
				width: 24upx;
				height: 28upx;
				float: left;
				margin: 32upx 26upx 32upx 40upx;
			}

			.text {
				float: left;
				font-size: 28upx;
				margin: 40upx 0upx 40upx 0upx;
			}

		}

		.list_right {
			width: 13upx;
			height: 24upx;
			float: right;
			margin-top: 32upx;
			margin-right: 42upx;
		}
	}
</style>
