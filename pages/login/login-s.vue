<template>
	<view class="index">
		<!--  注册补充信息 -->
		<view class="newUser">
			<text>新用户注册</text>
		</view>
		<view class="selUploading ">
			<view class="selGender">
				<view>
					<text>选择性别</text>
				</view>
				<view class="uni-form-item uni-column">
					<picker @change="bindPickerChange" :value="index" :range="arr">
						<label class="sex_wapper">{{arr[index]}}</label>
					</picker>
				</view>
				<image src="../../static/loginImg/xaila.png" mode="" class="down"></image>
				<!-- <image src="../../static/loginImg/cccsx.png" mode="" class="ccs"></image> -->
				<text>上传身份证</text>
			</view>
		</view>
		<view class="selzjz">
			<image src="../../static/loginImg/xjz.png" mode=""></image>
			<image src="../../static/loginImg/xjf.png" mode=""></image>
			<image src="../../static/loginImg/xj.png" mode=""></image>
		</view>
		<view class="btnBox">
			<button type="default" @click="goIndex"><text>确定</text></button>
		</view>
		<view class="bottom">
			<image src="../../static/loginImg/lonbg.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr:["男","女"],
				index:"0"
			}
		},
		methods: {
			goIndex(){
				uni.navigateTo({
					url:"logins"
				})
			},
			
		}
	}
</script>

<style scoped>
	.index{
		
	}
	.newUser{
		margin-top: 302rpx;
	}
	.newUser text{
		width:287rpx;
		height:56rpx;
		font-size:58rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(53,53,53,1);
		margin-left: 233rpx;
	}
	.selUploading{
		position: relative;
		width: 100%;
		margin-top:105rpx;
		padding: 0 125rpx;
		height: 245rpx;
	}
	.selGender text{
		width:84rpx;
		height:27rpx;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(153,153,153,1);
		line-height:25px;
	}
	.ccs{
		display: block;
		width: 510rpx;
		height: 1rpx;
		margin-top: 10rpx;
		margin-bottom: 35rpx;
	}
	 .down{
		display: block;
		width: 26rpx;
		height: 15rpx;
		position: absolute;
		left: 605rpx;
		top:70rpx
	}
	.sex_wapper{
		width:37rpx;
		height:39rpx;
		font-size:42rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(77,77,77,1);
		line-height:25rpx;
		margin-top: 29rpx;
		margin-bottom: 11rpx;
	}
	.selzjz {
		padding-left: 86rpx;
	}
	.selzjz image{
		display: block;
		width: 578rpx;
		height: 364rpx;
		margin-bottom: 29rpx;
	}
	.btnBox{
		margin: 0 auto;
	}
	.btnBox button{
		width:417rpx;
		height:83rpx;
		background:linear-gradient(150deg,rgba(255,200,35,1),rgba(255,193,12,1));
		box-shadow:0px 0px 3px 0px rgba(208,139,20,0.25);
		border-radius:42rpx;
	}
	.btnBox button text{
		width:116rpx;
		height:38rpx;
		font-size:40rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(53,53,53,1);
		line-height: 40rpx;
	}
	.btnText{
		margin: 0 auto;
		width:300rpx;
		height:23rpx;
		padding: 19rpx;
		font-size:24rpx;
		font-family:Source Han Sans CN;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:25rpx;
	}
	.bottom {
		margin-top: 33rpx;
	}
	.bottom image{
		display: block;
		width: 100%;
		height: 136rpx;
	}
</style>
