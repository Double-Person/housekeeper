<template>
	<view class="index">
		<view class="headimg">
			忘记密码
		</view>
		<view class="xxBox">
			<view class="sjBox">
				<view class="sjh">手机号</view>
				<view class="sjText">
					<input type="text" maxlength="11" v-model="phone" @input="checkPhoneSendCode" />
					<image src="/static/loginImg/shouji-copyx.png" mode="" class="shoujiimage"></image>
				</view>
			</view>
			<view class="sjBox">
				<view class="sjh">验证码</view>
				<view class="sjText">
					<input type="text" v-model="code" :maxlength="codelength" class="code-input" />
					<view class="yzm" :disable="isPhone" @click="sendCode" :style="{opacity: isPhone ? 1 : 0.7}">{{text}}</view>
				</view>
			</view>
			<view class="sjBox">
				<view class="sjh">新密码</view>
				<view class="sjText">
					<input type="text" :type="type" class="pwd-input" v-model="password" @input="inputPassword" />
					<image src="/static/loginImg/bukejianx.png" mode="" class="xsyc" @click="togglePassWord"></image>
				</view>
			</view>
			<!-- <view class="zjdl" @click="gologin">
				直接登录
			</view> -->
		</view>
		<!-- 登录 -->
		<view class="button" @click="gologin" :style="{opacity: isCommit ? 1 : 0.7}">确定</view>
		<view class="btnImg">
			<image src="/static/loginImg/lonbg.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import {
		forgetPwd,
		telCode
	} from '@/components/api/api.js'
	export default {
		data() {
			return {
				phone: "", // 15288888888
				code: '',
				password: '',
				isPhone: false,
				text: '发送验证码',
				type:'password',
				codelength: 4,
				timer: null,
				isCommit: false
			}
		},
		methods: {
			// 检查手机号码
			checkPhoneSendCode() {
				if ((/^1[3456789]\d{9}$/.test(this.phone)))
					this.isPhone = true
				else this.isPhone = false
			},
			togglePassWord() {
				this.type = (this.type === 'password' ? 'text' : 'password')
			},
			// f发送验证码
			sendCode() {
				if (this.phone.length === 0) {
					uni.showToast({
						title: '请输入手机号码',
						icon: 'none'
					})
					return false;
				}
				// !this.$checkPhone(this.userInfo.phone)
				if (!this.isPhone) {
					uni.showToast({
						title: '请输入正确的手机号码',
						icon: 'none'
					})
					return false;
				}
				if (this.timer) return false;
				let sec = 60;
				this.timer = setInterval(() => {
					sec--
					this.text = `${sec}秒后重新发送`;
					if (sec === 0) {
						this.text = '重新发送';
						clearInterval(this.timer);
						this.timer = null
					}
				}, 1000)
				telCode({phone: this.phone}).then(res => {
					uni.showToast({
						title: '验证码发送成功',
						icon: 'none'
					})
				})
		

			},


			goIndex() {
				
				uni.navigateTo({
					url: "index"
				})
			},
			inputPassword() {
				if (!this.isPhone) return false;
				if (this.code.length != this.codelength) return false;
				if (this.password.length < 6) {
					this.isCommit = false;
					return false;
				}
				this.isCommit = true;
			},
			// 确定登录按钮
			gologin() {
				if (!this.isPhone) return false;
				if(!this.isCommit) return false;
				// workers_id 工人id phone  手机号 code 验证码 pwd  密码
				let obj = {
					phone: this.phone,
					pwd: this.password,
					code: this.code
				}
				forgetPwd(obj).then(res => {
					console.log(res)
					if(res.msgType == 0) {
						uni.navigateTo({
							url: 'logins'
						})
					}
				})
				
				
				
			}
		}
	}
</script>

<style scoped lang="scss">
	@font-face {
		font-family: SourceHanSansCN;
		src: url("~@/static/SourceHanSansCN-Normal.otf") format('truetype'),
	}

	.index {
		width: 750upx;
		height: 100vh;
		overflow: hidden;
	}

	.btnImg {
		width: 750upx;
		height: 163upx;
		overflow: hidden;
		background: url(../../static/loginImg/lonbg.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		position: fixed;
		bottom: 0upx;
		left: 0upx;
	}

	.headimg {
		width: 249upx;
		height: 55upx;
		margin: 0 auto;
		margin-top: 301upx;
		font-size: 58upx;
		font-family: SourceHanSansCN;
		font-weight: 500;
		color: rgba(53, 53, 53, 1);
	}

	.xxBox {
		padding: 0 125upx;
		margin-top: 107upx;

		.sjBox {
			width: 469upx;
			padding: 16upx;
			border-bottom: 1px solid rgba(255, 213, 163, 1);
			margin-bottom: 35upx;

			.sjh {
				width: 100upx;
				height: 27upx;
				font-size: 28upx;
				font-family: SourceHanSansCN;
				font-weight: bold;
				color: rgba(153, 153, 153, 1);
			}

			.sjText {
				margin-top: 35upx;
				display: flex;
				justify-content: space-between;
				position: relative;

				.pwd-input {
					width: 300upx;
					height: 34upx;
					font-size: 42upx;
					font-family: SourceHanSansCN;
					font-weight: bold;
					color: rgba(77, 77, 77, 1);
					border: none;
				}

				.shoujiimage {
					display: block;
					width: 16upx;
					height: 21upx;
					position: absolute;
					top: 20upx;
					right: 0upx;
				}

				.xsyc {
					display: block;
					width: 22upx;
					height: 16upx;
					position: absolute;
					top: 20upx;
					right: 0upx;
				}
				.code-input{
					width: 200upx;
					height: 34upx;
					font-size: 42upx;
					font-family: SourceHanSansCN;
					font-weight: bold;
					color: rgba(77, 77, 77, 1);
					border: none;
				}

				.yzm {
					padding: 15upx;
					// width: 163upx;
					height: 35upx;
					border: 1upx solid rgba(255, 193, 12, 1);
					border-radius: 4upx;
					font-size: 24upx;
					font-family: SourceHanSansCN;
					font-weight: bold;
					color: rgba(255, 193, 12, 1);
					text-align: center;
				}
			}
		}

		.zjdl {
			height: 23upx;
			font-size: 24upx;
			font-family: SourceHanSansCN;
			font-weight: 400;
			color: rgba(190, 190, 190, 1);
			float: right;
		}
	}

	.button {
		margin: 0 auto;
		margin-top: 112upx;
		width: 417upx;
		height: 83upx;
		background: linear-gradient(150deg, rgba(255, 200, 35, 1), rgba(255, 193, 12, 1));
		box-shadow: 0upx 0upx 3upx 0upx rgba(208, 139, 20, 0.25);
		border-radius: 42upx;
		font-size: 40upx;
		font-family: SourceHanSansCN;
		font-weight: 400;
		color: rgba(53, 53, 53, 1);
		text-align: center;
		line-height: 83upx;
	}
</style>
