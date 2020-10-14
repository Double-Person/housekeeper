<template>
	<!-- 技术人员资料 -->
	<view class="ArtisanTxt">
		<!-- 客户订单 -->
		<view class="art_ren">
			<view class="my_detail">
				<view>客户姓名：汪小菲</view>
				<view>客户电话：18356987413</view>
				<view>客户姓名：四川省成都市锦江区崔家店145号</view>
			</view>
			
			<!-- 图片照片 -->
			<view class="ren_img">
				
				<view>
					<image src="../../static/newfrom_icon/fan.png" mode=""></image>
				</view>
				<view>
					<image src="../../static/newfrom_icon/zheng.png" mode=""></image>
				</view>
				<view>
					<image src="../../static/newfrom_icon/shou.png" mode=""></image>
				</view>
				<view>
					<image src="../../static/newfrom_icon/work.png" mode=""></image>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
</script>

<style lang="scss">
	.art_ren{
	height: 2027upx;	
	background: $uni-color-hui;
	overflow: hidden;
	}
	.art_ren .my_detail{
		margin-top:0upx;
		color: $uni-coloe-qianhui;
		background: #fff;
		font-size: 28upx;
		margin-top: 20upx;
		padding: 40upx;
	}
	.art_ren .my_detail view:nth-of-type(1){
		margin-top: 0upx;
	}
	.ren_img{
		width: 100%;
		padding-top: 21upx;
		padding-bottom: 216upx;
	}
	.ren_img view{
		width: 578upx;
		height: 364upx;
		margin: 0 auto;
		margin-top: 29upx;
	}
	.ren_img image{
		width: 100%;
		height: 100%;
	}
</style>
