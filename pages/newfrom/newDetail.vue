<template>
	<view class="newfrom">
		<view class="new_demo">
			<Detail></Detail>
			<view class="new_detail">
				<Order></Order>
			</view>
			<view class="down">
				<text>选择技术人员 </text>
				<view class="pull_down">
					<image src="../../static/newfrom_icon/pull_down.png" mode=""></image>
				</view>
			</view>
			<view class="from_enter">
				确定
			</view>
		</view>
	</view>
</template>

<script>
	import Detail from "../../components/detail.vue"
	import Order from "../../components/order.vue"
	export default {
		data() {
			return {

			};
		},
		components: {
			Detail,
			Order
		}
	}
</script>

<style lang="scss">
	.down {
		width: 100%;
		height: 80upx;
		background: #ffffff;
		margin-top: 20upx;
		overflow: hidden;
	}

	.down text {
		display: block;
		font-size: 28upx;
		color: #A9A9A9;
		line-height: 80upx;
		float: left;
		margin-left: 41upx;
	}

	.pull_down {
		width: 40upx;
		height: 40upx;
		float: right;
		margin-right: 40upx;
		margin-top: 20upx;
	}
	.pull_down image{
		width: 100%;
		height: 100%;
	}
	.from_enter{
		width: 715upx;
		height: 91upx;
		margin-top:163upx;
		margin-left: 18upx;
		border-radius: 10upx;
		background: $uni-color-yellow;
		color: #fff;
		font-size: 36upx;
		text-align: center;
		line-height: 91upx;
	}
</style>
