<template>
	<view class="index">
		<view class="bigBox">
			<text>姓名：{{info.name}}</text>
			<text>电话：{{info.phone}}</text>
			<text>地址：{{info.address}}</text>
			<text>性别: {{info.sex || '男'}}</text>
			<text>年龄: {{info.age || 18}}</text>
		</view>
		<view class="box">
			<!-- 正面 -->
			<image src="../../../static/loginImg/xjz.png" mode="" @click="changePositive('positive')" v-if="!photo.positive"></image>
			<image :src="photo.positive" mode="" @click="changePositive('positive')" v-if="photo.positive"></image>

			<!-- 反面 -->
			<image src="../../../static/loginImg/xjf.png" mode="" @click="changePositive('reverse')" v-if="!photo.reverse"></image>
			<image :src="photo.reverse" mode="" @click="changePositive('reverse')" v-if="photo.reverse"></image>
			

			<!-- 手持正面 -->
			<image src="../../../static/loginImg/xj.png" mode="" @click="changePositive('handPositive')" v-if="!photo.handPositive"></image>
			<image :src="photo.handPositive" mode="" @click="changePositive('handPositive')" v-if="photo.handPositive"></image>
			

			<!-- 手持反面 -->
			<image src="../../../static/loginImg/xjgzz.png" mode="" @click="changePositive('handReverse')" v-if="!photo.handReverse"></image>
			<image :src="photo.handReverse" mode="" @click="changePositive('handReverse')" v-if="photo.handReverse"></image>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {},
				photo: {
					positive: '', // 正面
					reverse: '', // 反面
					handPositive: '', // 手持正面
					handReverse: '', //  手持反面
				}
			}
		},
		onLoad(option) {
			console.log(option)
			let {
				info
			} = option;
			this.info = JSON.parse(info)
		},

		methods: {
			changePositive(type) {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: res => {
						console.log(res.tempFilePaths[0])
						this.photo[type] = res.tempFilePaths[0];
					},
					fail: () => {
						uni.showToast({
							title:'请开启手机相机权限',
							icon:'none'
						})
					}
				});
			}
		}


	}
</script>

<style scoped lang="scss">
	.index {
		width: 750upx;

		background: #f2f2f2;
		padding-top: 20upx;
	}

	// 用户信息
	.bigBox {
		padding: 40upx;
		width: 670upx;
		background: rgba(255, 255, 255, 1);

		text {
			display: block;
			font-size: 28upx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(153, 153, 153, 1);
			line-height: 23px;
		}
	}

	.box {
		padding: 50upx 85upx;
		width: 580upx;

		image {
			display: block;
			width: 578upx;
			height: 364upx;
			border: 12upx;
			margin-bottom: 29upx;
		}
	}
</style>
