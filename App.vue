
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 公用样式 */
	@import './static/style/common.scss';
	/*每个页面公共css */
	html{
		overflow-x: hidden !important;
		width: 750upx;
	}
	page{
		height: 100%;
	}
	.newfrom {
		height: 100%;
		background: $uni-color-hui;
		overflow: hidden;
	}
	
	.new_demo {
		width: 100%;
		height: 100%;
	}
	
	.new_list {
		width: 750upx;
		// height: 400upx;
		background: $uni-text-color-inverse;
		padding-top: 48upx;
		// padding-bottom: 40upx;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 1);
		overflow: hidden;
		position: relative;
		margin-top: 20upx;
	}
	
	.new_logo {
		width: 750upx;
		overflow: hidden;
	
		image {
			width: 38upx;
			height: 38upx;
			// margin-top: 38upx;
			margin-left: 20rpx;
			float: left;
		}
	
		text {
			font-size: 36upx;
			// margin-top: 34upx;
			float: left;
			margin-left: 16upx;
		}
	}
	
	.new_text {
		width: 750upx;
		margin: 20rpx ;
		// position: absolute;
		// top: 134upx;
		// left: 20upx;
		overflow: hidden;
		padding-bottom: 20rpx;
		display: flex;
	}
	
	.new_img {
		width: 180upx;
		height: 180upx;
		border-radius: 8px;
		overflow: hidden;
		// float: left;
	}
	
	.new_img image {
		display: block;
		width: 180upx;
		height: 180upx;
	}
	
	.new_mid {
		// float: left;
		margin-left: 18upx;
		padding-right: 30rpx;
	}
	
	.new_btn {
		position: absolute;
		top: 334upx;
		left: 339upx;
		overflow: hidden;
	}
	
	.new_btn text {
		display: block;
		width: 180upx;
		height: 68upx;
		float: left;
		font-size: 32upx;
		font-weight: 500;
		text-align: center;
		line-height: 68upx;
		border-radius: 34upx;
	}
	
	.new_btn text:nth-of-type(1) {
		border: 1px solid #999999;
		color: rgba(153, 153, 153, 1);
	}
	
	.new_btn text:nth-of-type(2) {
		background: $uni-color-yellow;
		;
		color: $uni--color-hei;
		margin-left: 30upx;
	}
	
	.new_mid text {
		display: block;
		font-size: 28upx;
		// margin-top: 13upx;
		color: $uni--color-hei;
	}
	
	.new_mid view {
		font-size: 26upx;
		color: #999999;
		margin-top: 12upx;
	}
	
	
	
	
	// 订单所有详情
	.new_detail {
		width: 750upx;
		background: #fff;
		margin-top: 20upx;
		padding:40upx 50upx 40upx 39upx;
	}
	.detail{
		font-size: 28upx;
		color: #333333;
		padding-bottom: 20upx;
		border-bottom: 1px solid #BEBEBE;
	}
	// 订单详情
	.text_detail{
		margin-top: 20upx;
		color: $uni-coloe-qianhui;
		font-size: 28upx;
	}
	.text_detail text{
		margin-top: 20upx;
	}
	.text_detail view{
		margin-top: 19upx;
	}
	// 客户信息
	.my_detail{
		margin-top: 59upx;
		color: $uni-coloe-qianhui;
		font-size: 28upx;
	}
	.my_detail view{
		margin-top: 19upx;
	}
	.my_detail view:nth-of-type(3){
		width: 660upx;
	}
	.shen{
		height: 30upx;
		font-size: 32upx;
		color: #999;
		position: absolute;
		top:40upx;
		right: 20upx;
	}
</style>
