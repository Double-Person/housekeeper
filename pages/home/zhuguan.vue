<template>
	<view>
		<!-- 主管 -->
		<!-- 头部个人信息 -->
		<user-info-header />
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
						<image src="/static/my_icon/my_you.png"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="btn" @click="goHome">
			选择你的权限
		</view> -->
	</view>

</template>

<script>
	import UserInfoHeader from '@/components/UserInfoHeader.vue'
	
	export default {
		data() {
			return {
				myList: [{
						image: require('@/static/my_icon/my_newdan.png'),
						middle: "新订单",
						url: "./zgorder/zgNewOrder"
					},
					{
						image: require("@/static/my_icon/my_dan.png"),
						middle: "待派单",
						url: "./zgorder/WaitingList"
					},
					{
						image: require("@/static/my_icon/my_dan.png"),
						middle: "订单中心",
						url: "./zgorder/zgOrder"

					},
					{
						image: require("@/static/my_icon/my_fangan.png"),
						middle: "方案",
						url: "./zgorder/zgFangan"

					},
					{
						image: require("@/static/my_icon/my_hetong.png"),
						middle: "合同",
						url: "./zgorder/zgHeTong"
					
					},
					{
						image: require("@/static/my_icon/my_shouchu.png"),
						middle: "售后处理",
						url: "./zgorder/zgshouhchuli"
					
					},
					{
						image: require("@/static/my_icon/my_shouhou.png"),
						middle: "售后订单",
						url: "./zgorder/zgSHOrder"
					},
					{
						image: require("@/static/my_icon/my_shouhou.png"),
						middle: "售后审核",
						url: "./zgorder/OrderReview"
					},
					
					
					
					
					{
						image: require("@/static/my_icon/my_yungong.png"),
						middle: "员工",
						url: "./zgorder/zgyuangong"
					},
					{
						image: require("@/static/my_icon/wallet.png"),
						middle: "钱包",
						url: "./zgorder/zgwallet"
					},
				
				]
			}
		},
		components:{
			UserInfoHeader
		},
		methods: {
			getDome(item) {
				console.log(item.url)
				uni.navigateTo({
					url: item.url,
					fail(err) {
						console.log(err)
					}
				});
			},
			goHome(){
				uni.navigateTo({
					url:'home1'
				});
			},
			
		}
	}
</script>

</script>

<style lang="scss" scoped>
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
	image {
		width: 100%;
		height: 100%;
	}

	/* 功能列表 */
	.my_list {
		width: 750upx;
		// height: 956upx;
		background: $uni-color-hui;
		overflow: hidden;
	}

	.list_fun {
		width: 750upx;
		// height: 108upx;
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
