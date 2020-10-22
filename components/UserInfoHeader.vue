<template>
	<view class="title">
		<view class="my_text">
			<view class="my_logo">
				<image src="../static/my_icon/my_logo.png" mode=""></image>
				<image src="../static/my_icon/logo.jpg" mode="" class="logo" @click="changeHead"></image>
			</view>
		</view>
		<view class="top_bac">
			<image src="../static/my_icon/my_topbac.png" mode=""></image>
		</view>
		<text class="my_name">我是昵称</text>
	</view>
</template>

<script>
	import {personal} from './api/api.js'
	export default {
		data() {
			return {
				userInfo: {}
			};
		},
		created() {
			this.getUserInfo()
		},
		methods: {
		
			// 更改用户头像
			changeHead() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: res => {
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			},
			// 获取用户信息
			getUserInfo() {
				
				let USERINFO_ID = uni.getStorageSync('USER_ID')
				personal({ USERINFO_ID }).then(res => {
					console.log('me', res)
				
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
/* 头部个人信息 */
	.title {
		width: 750upx;
		height: 378upx;
		background-image: url('../static/my_icon/my_bac.png');
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
		z-index: 3;
		bottom: 79upx;
		left: 304upx;
	}
</style>
