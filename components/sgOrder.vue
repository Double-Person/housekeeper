<template>
	<view>
		<!-- tab栏 -->
		<view class="new_demo">
			<!-- 循环订单位置 -->
			<view class="new_list" @click="getDetail">
		
				<!-- 名称+logo -->
				<view class="new_logo">
					<image src="../static/my_icon/logo.jpg" mode=""></image>
					<text>窗台防水</text>
				</view>
				<view class="shen">
					审核中
				</view>
				<!-- 订单详情 -->
				<view class="new_text">
					<view class="new_img">
						<image src="../static/my_icon/logo.jpg" mode=""></image>
					</view>
					<view class="new_mid">
						<text>项目名称</text>
						<view>客户姓名:汪小菲</view>
						<view>客户电话：18356987413</view>
						<view>客户地址：四川省成都市锦江区崔家店145号</view>
					</view>
				</view>
		
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
