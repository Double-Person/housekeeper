<template>
	<view class="index">
	
		<view class="xxBox">
			<view class="sjBox">
				<view class="sjh">手机号</view>
				<view class="sjText">
					<input type="text" v-model="userInfo.phone" :maxlength="11" />
					<image src="/static/loginImg/shouji-copyx.png" mode="" class="shoujiimage"></image>
				</view>
			</view>
			<view class="sjBox">
				<view class="sjh">验证码</view>
				<view class="sjText">
					<input type="text" v-model="userInfo.code" @input="inputCode" :maxlength="codeLength"/>
					<view class="yzm" @click="getCode" :style="{opacity: disableCode ? 1 : 0.5}">{{codeText}}</view>
				</view>
			</view>
			<view class="zjdl" @click="goLogin">
				已注册直接登录
			</view>
		</view>
		<!-- 登录 -->
		<view class="button" @click="goLogin" :style="{opacity: isCommit ? 1 : 0.5}">
			登录
		</view>
		<view class="btnImg">
			<image src="/static/loginImg/lonbg.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import {
		telCode,
		wxlogin
	} from '@/components/api/api.js'
	export default{
		data(){
			return{
				parmas: {},
				codeText: '发送验证码',
				userInfo: {
					phone:"",
					code: ''
				},
				timer: null,
				codeLength: 4,
				disableCode: true,
				isCommit: false
				
			}
		},
		onLoad(opt) {
			this.parmas = JSON.parse(opt.userInfo)
		},
	
		methods:{
			goLogin(){
				if(!this.isCommit)  return false;
				console.log(this.parmas)
				
				let {phone, code} = this.userInfo;
				this.parmas.phone = phone
				this.parmas.telnumber = code
				 wxlogin(this.parmas).then(async res => {
			
					let { token, user } = res;
					await uni.setStorageSync("USER_INFO", user); // 用户信息
					await uni.setStorageSync("WORKERS_ID", user.workers_id); // 用户id
					await uni.setStorageSync("HOUSE_TOKEN", token); // workers_id
					await uni.setStorageSync("PARENT_ID", user.parent_id); // 上级主管id
					await uni.setStorageSync("HOUSE_LEVELS", user.levels); // 上级主管id
					switch (user.levels * 1) {
						case 0:
							// 主管
							await uni.redirectTo({
								url: "../home/zhuguan",
							});
							break;
					
						case 1:
							// 技术员
							await uni.redirectTo({
								url: "../home/homejishu",
							});
							break;
					
						case 2:
							// 工人
							await uni.redirectTo({
								url: "../home/home",
							});
							break;
					
						default:
							break;
					}
					
				})
			
			},
			// 获取验证码
			getCode() {
				if(!this.$checkPhone(this.userInfo.phone)) return false;
				if (this.timer) return false;
				let time = 60;
				this.disableCode = false
				this.timer = setInterval(() => {
					time--;
					this.codeText = time + 's后重新获取';
					if(time === 0) {
						this.disableCode = true
						clearInterval(this.timer);
						this.timer = null
						this.codeText = '发送验证码'
					}
				}, 1000)
				telCode({phone: this.userInfo.phone}).then(res => {
					uni.showToast({
						title: '验证码发送成功',
						icon: 'none'
					})
				})
				
			},
			inputCode() {
				if((this.$checkPhone(this.userInfo.phone)) && (this.userInfo.code.length === this.codeLength)) {
					this.isCommit = true
				}
				else this.isCommit = false
			}
		}
	}
</script>

<style scoped lang="scss">
	@font-face {
		 font-family:SourceHanSansCN;
		 src: url("~@/static/SourceHanSansCN-Normal.otf") format('truetype'),	
	}
	.index{
		width: 750upx;
		height: 100vh;
		overflow: hidden;
	}
	.btnImg{
		width: 750upx;
		height: 163upx;
		overflow: hidden;
		background: url('../../static/loginImg/lonbg.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		position: fixed;
		bottom: 0upx;
		left: 0upx;
	}
	.headimg{
		width:750upx;
		height:55upx;
		text-align: center;
		margin-top:301upx;
		font-size:58upx;
		font-weight:500;
		color:rgba(53,53,53,1);
	}
	.xxBox{
		padding: 0 125upx;
		margin-top:30vh;
		.sjBox{
			width: 469upx;
			padding: 16upx;
			border-bottom:1px solid #ffd5a3;
			margin-bottom: 35upx;
			.sjh{
				width:100upx;
				height:27upx;
				font-size:28upx;
				font-weight:bold;
				color:#999999;
			}
			.sjText{
				margin-top:35upx;
				display: flex;
				position: relative;
				input{
					width:300upx;
					height:34upx;
					font-size:42upx;
					font-weight:bold;
					color:rgba(77,77,77,1);
				}
				.shoujiimage{
					display: block;
					width:16upx;
					height:21upx;
					position: absolute;
					top:20upx;
					right:0upx;
				}
				.xsyc{
					display: block;
					width:22upx;
					height:16upx;
					position: absolute;
					top:20upx;
					right:0upx;
				}
				.yzm{
					padding: 15upx 0upx;
					width:163upx;
					height:35upx;
					border:1upx solid rgba(255,193,12,1);
					border-radius:4upx;
					font-size:24upx;
					font-weight:bold;
					color:rgba(255,193,12,1);
					text-align: center;
				}
			}
		}
		.zjdl{
			font-size:24upx;
			font-weight:400;
			color:rgba(190,190,190,1);
			float: right;
		}
	}
	.button{
		margin:0 auto;
		margin-top:112upx;
		width:417upx;
		height:83upx;
		background:linear-gradient(150deg,rgba(255,200,35,1),rgba(255,193,12,1));
		box-shadow:0upx 0upx 3upx 0upx rgba(208,139,20,0.25);
		border-radius:42upx;
		font-size:40upx;
		color:rgba(53,53,53,1);
		text-align: center;
		line-height:83upx;
		.text{
			height:23upx;
			font-size:24upx;
			color:rgba(51,51,51,1);
			text{
				color:#FFC10C;
			}
		}
	}
</style>
