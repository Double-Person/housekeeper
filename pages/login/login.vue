<template>
	<view class="index">
		<!-- <image src="../../static/loginImg/homebg.png" mode=""></image> -->
		<view class="box">
			<view class="a"></view>
			<view class="b"></view>
			<view class="c"></view>
			<view class="d"></view>
		</view>
	</view>
	
</template>

<script>
	// export default{
	// 	onLoad() {
	// 		setTimeout(()=>{
	// 			uni.navigateTo({
	// 				url:"logins"
	// 			})
	// 		},1000)
	// 	}
	//}
</script>

<style scoped lang="scss">

	.box{
		display: flex;
		 flex-wrap: wrap;
	}
	.a{
		width: 350upx;
		height: 400upx;
		background: red;
	}
	.b{
		width: 350upx;
		height: 500upx;
		background: pink;
	}
	.c{
		width: 350upx;
		height: 450upx;
		background: green;
	}
	.d{
		width: 350upx;
		height: 380upx;
		background: black;
	}
	.index{
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		image{
			display: block;
			width: 100%;
			height: 100%;
		}
	}
</style>
