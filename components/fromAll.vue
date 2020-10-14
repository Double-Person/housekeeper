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
					{{msg}}
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
			<view class="btn" v-show="flag==1">
				<view class="left">上传进度</view>
				<view class="right">完成</view>
			</view>
			<view class="btna" v-show="flag==2">
				<view class="right">开工</view>
			</view>
			<view class="btna" v-show="flag==3">
				<view class="right">处理反馈</view>
			</view>
			<view class="btna" v-show="flag==4">
				<view class="right">完成</view>
			</view>
			<view class="btna" v-show="flag==5">
				<view class="right">问卷调查</view>
			</view>
			<view class="btna" v-show="flag==6" @click="shezhifa">
				<view class="right">设置方案</view>
			</view>
			<view class="btn" v-show="flag==7">
				<view class="left" @click="butongyi">不同意</view>
				<view class="right">同意</view>
			</view>
			<view class="btn" v-show="flag==8">
				<view class="left" @click="butongguo">不通过</view>
				<view class="right" @click="tongyi">通过</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			msg: {
				type: String,
				default: ""
			},
			flag:{
				type:Number,
				default:null
			}
		},
		data() {
			return {

			};
		},
		methods:{
			getDetail(){
				this.$emit('getDetail')
			},
			shezhifa(){
				this.$emit('shezhifa')
			},
			butongyi(){
				this.$emit('butongyi')
			},
			butongguo(){
				this.$emit('butongguo')
			},
			tongyi(){
				this.$emit('tongyi')
			}
		}
	}
</script>

<style lang="scss">
	.btn{
		padding: 20upx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background: white;
		.left{
			margin-left: auto;
			width:180upx;
			height:68upx;
			border:1upx solid rgba(191,191,191,1);
			border-radius:34upx;
			font-size:32upx;
			font-family:SourceHanSansCN;
			font-weight:400;
			color:rgba(153,153,153,1);
			line-height:68upx;
			text-align: center;
		}
		.right{
			margin-left: auto;
			margin-left:30upx;
			width:180upx;
			height:68upx;
			background:linear-gradient(150deg,rgba(255,200,35,1),rgba(255,193,12,1));
			border-radius:34upx;
			font-size:32upx;
			font-family:SourceHanSansCN;
			font-weight:400;
			color:rgba(26,26,26,1);
			line-height: 68upx;
			text-align: center;
		}
	}
	.btna{
		padding: 20upx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background: white;
		.right{
			margin-left: auto;
			margin-left:30upx;
			width:180upx;
			height:68upx;
			background:linear-gradient(150deg,rgba(255,200,35,1),rgba(255,193,12,1));
			border-radius:34upx;
			font-size:32upx;
			font-family:SourceHanSansCN;
			font-weight:400;
			color:rgba(26,26,26,1);
			line-height: 68upx;
			text-align: center;
		}
	}
</style>
