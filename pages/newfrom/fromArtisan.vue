<template>
	<!-- 选择技术人员页面 -->
	<view class="from_artisan">
		<!-- 循环-->
		<view class="from_list" @click="lookTxt">
			<view class="artisan">
				
			     <view class="art_text">
			     	<view class="art_logo">
						<image src="../../static/my_icon/logo.jpg" mode=""></image>
					</view>
					<view class="art_name">
						<text>王大伟</text>
						<text>职位</text>
					</view>
			     </view>
				 
				 
				 <view class="look_txt">
				 	查看资料
				 </view>
				 
				 
			</view>
			<view class="from_enter">
				确定
			</view>
		</view>
		
	</view>
</template>

<script>
export default{
		data(){
			return {
				
			}
		},
		methods:{
			lookTxt(){
				uni.navigateTo({
					url:"./ArtisanTxt"
				})
			}
		}
	}
</script>

<style lang="scss">
	.from_artisan{
		width: 750upx;
		height: 1206upx;
		position: relative;
	}
	.artisan {
		width: 676upx;
		height: 128upx;
		border: 1upx solid rgba(255, 213, 163, 1);
		border-radius: 16upx;
		margin:15upx auto;
		padding: 24upx 30upx;
		box-sizing: border-box;
	}
	.art_logo{
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		float: left;
		overflow: hidden;
	}
	.art_logo image{
		width: 100%;
		height: 100%;
	}
	.art_name{
		float: left;
		margin-left: 22upx;
	}
	.art_name text:nth-of-type(1){
		display: block;
		font-size: 32upx;
		color: #333;
	}
	.art_name text:nth-of-type(2){
		display: block;
		font-size: 24upx;
		color: #999;
		line-height: 48upx;
	}
	.look_txt{
		width: 130upx;
		height: 46upx;
		font-size: 26upx;
		color: #FFC00C;
		float: right;
		border: 1px solid #FFC00C;
		text-align: center;
		line-height: 46upx;
		border-radius: 10upx;
		margin-top: 16upx;
	}
	.from_enter{
		width: 715upx;
		height: 91upx;
		border-radius: 10upx;
		background: $uni-color-yellow;
		color: #fff;
		font-size: 36upx;
		text-align: center;
		line-height: 91upx;
		position: absolute;
		bottom: 32upx;
		left: 18upx;
	}
</style>
