<template>
	<view class="index">
		<!--  注册补充信息 -->
		<view class="newUser">
			<text>新用户注册</text>
		</view>
		<view class="selUploading ">
			<view class="selGender">

				<view class="warp-list">
					<view class="title">
						选择职位
					</view>
					<view class="uni-form-item uni-column">
						<picker @change="bindPickerChange('positionIndex', $event)" :value="positionIndex" :range="position">
							<label class="sex_wapper">{{position[positionIndex]}}</label>
						</picker>
						<image src="/static/loginImg/xaila.png" mode="" class="down"></image>
						
					</view>
				</view>

				<view class="warp-list" v-if="positionIndex" @click="changeDirector">
					<view class="title">
						选择主管
					</view>
					<!-- @change="bindPickerChange('directorIndex', $event)" -->
					<view class="uni-form-item uni-column" >
						<picker  :value="directorIndex" :range="director">
							<!-- <label class="sex_wapper">{{director[directorIndex]}}</label> -->
							<label class="sex_wapper">{{userInfo.name||'请选择'}}</label>
						</picker>
						<image src="/static/loginImg/xaila.png" mode="" class="down"></image>
					</view>
				</view>

				<view class="warp-list">
					<view class="title">
						选择性别
					</view>
					<view class="uni-form-item uni-column">
						<picker @change="bindPickerChange('sexIndex', $event)" :value="sexIndex" :range="sex">
							<label class="sex_wapper">{{sex[sexIndex]}}</label>
						</picker>
						<image src="/static/loginImg/xaila.png" mode="" class="down"></image>
					</view>
				</view>


				
				<!-- <image src="../../static/loginImg/cccsx.png" mode="" class="ccs"></image> -->
				<view class="uoload-id-card">上传身份证</view>
			</view>
		</view>
		<view class="selzjz">
			<!-- 正面 -->
			<image src="/static/loginImg/xjz.png" mode="" @click="changePositive('positive')" v-if="!photo.positive"></image>
			<image :src="photo.positive" mode="" @click="changePositive('positive')" v-if="photo.positive"></image>
			
			<!-- 反面 -->
			<image src="/static/loginImg/xjf.png" mode="" @click="changePositive('reverse')" v-if="!photo.reverse"></image>
			<image :src="photo.reverse" mode="" @click="changePositive('reverse')" v-if="photo.reverse"></image>
			
			<!-- 手持正面 -->
			<image src="/static/loginImg/xj.png" @click="changePositive('handPositive')" mode="" v-if="!photo.handPositive"></image>
			<image :src="photo.handPositive" mode="" @click="changePositive('handPositive')" v-if="photo.handPositive"></image>
			
		</view>
		
		
		<view class="btnBox">
			<button type="default" @click="goIndex"><text>确定</text></button>
		</view>
		<view class="bottom">
			<image src="/static/loginImg/lonbg.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import {upLoadFile, workerRegister, workerUserExecutive} from '@/components/api/api.js'
	import {baseUrl} from '@/components/api/request.js'
	
	export default {
		data() {
			return {
				userInfo: {},
				sex: ["男", "女"],
				sexIndex: 0,
				position: ['主管', '技术员', '工长'], //  顺序不能换
				positionIndex: 0,
				director: ['张三', '李四', '王五'],
				directorIndex: 0,
				
				photo: {
					positive: '', // 正面
					reverse: '', // 反面
					handPositive: '', // 手持正面
				}
			}
		},
		onLoad(option) {
			this.userInfo = JSON.parse(option.userInfo)
			if(this.userInfo.positionIndex) {
				this.positionIndex = this.userInfo.positionIndex
			}
			
			this.getWorkerUserExecutive()
		
		},
		methods: {
			changeDirector() {
				this.userInfo.positionIndex = this.positionIndex
				uni.navigateTo({
					url: './directorList?userInfo=' + JSON.stringify(this.userInfo)
				})
			},
			// 下拉款选择
			bindPickerChange(type, event) {
				console.log(type)
				this[type] = event.target.value
			},
			// 查询主管列表
			getWorkerUserExecutive() {
				workerUserExecutive().then(res => {
					console.log('查询主管列表', res)
				})
			},
			// 上传身份证
			changePositive(type) {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: res => {
						upLoadFile({path: res.tempFilePaths[0]}).then(file => {
							let upLoadPath = JSON.parse(file.data).data
							this.photo[type] = baseUrl + '/' +  upLoadPath
						})
					},
					fail: () => {
						uni.showToast({
							title:'请开启手机相机权限',
							icon:'none'
						})
					}
				});
			},
			goIndex() {
				// sexIndex  positionIndex  directorIndex
				let {sexIndex, positionIndex, directorIndex, userInfo: {code, phone, pwd }, photo: {positive, reverse, handPositive} } = this;
				
				// phone  电话   code  验证码  pwd  密码   position  职位  director  主管  
				// sex  性别   idCardZ  身份证正面  idCardZF  身份证反面  office  工作证
				
				code: "1234"
				phone: "18398207590"
				pwd: "123456"
				let obj = {
					"phone": phone,
					"code": code,
					"pwd": pwd,
					"position": positionIndex,
					"director": this.userInfo.workers_id || '',
					"sex": sexIndex === 0 ? 1 : 0,
					
					"idCardZ": positive,
					"idCardF": reverse,
					"office": handPositive
				}
				console.log(sexIndex, positionIndex, directorIndex)
				console.log(obj)
				workerRegister(obj).then(res => {
					console.log('注册', res)
					if(res.msgType == 0) {
						uni.showToast({
							title:res.returnMsg,
							icon: "none"
						})
						uni.navigateTo({
							url:"./logins?phone?=" + phone
						})
					}
				})
				// uni.request({
				// 	url: baseUrl + '/api/worker/workerRegister',
				// 	data: JSON.stringify(obj), // obj, //
				// 	method: 'POST',
				// 	// header: {
				// 	// 	"Content-Type":  "application/json"
				// 	// },
				// 	success: res => {
				// 		console.log('----', res)
				// 	},
				// 	fail:(err)=> {
				// 		console.log('----', err)
				// 	}
				// })
				
				// uni.navigateTo({
				// 	url: "logins"
				// })
			},

		}
	}
</script>

<style scoped lang="scss">

	/*  */
	.warp-list {
		border-bottom: 1upx solid rgb(255, 247, 237);
		padding-bottom: 10upx;
		margin-top: 30upx;

	}

	.title {
		margin: 28rpx auto;
		font-size: 28upx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #999999;
		line-height: 30upx;
	}

	.uoload-id-card {
		margin: 30upx auto;
	}
	.uni-form-item{
		position: relative;
		z-index: 2;
	}
	.down {
		display: block;
		width: 26rpx;
		height: 15rpx;
		position: absolute;
		left: 480rpx;
		top: 18rpx
	}


	/*  */



	.newUser {
		margin-top: 302rpx;
	}

	.newUser text {
		width: 287rpx;
		height: 56rpx;
		font-size: 58rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(53, 53, 53, 1);
		margin-left: 233rpx;
	}

	.selUploading {
		position: relative;
		width: 70%;
		margin-top: 105rpx;
		padding: 0 125rpx;

		/* height: 245rpx; */
	}

	.selGender text {
		width: 84rpx;
		height: 27rpx;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(153, 153, 153, 1);
		line-height: 25px;
	}

	.ccs {
		display: block;
		width: 510rpx;
		height: 1rpx;
		margin-top: 10rpx;
		margin-bottom: 35rpx;
	}

	
	
	.sex_wapper {
		width: 37rpx;
		height: 39rpx;
		font-size: 42rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(77, 77, 77, 1);
		line-height: 25rpx;
		margin-top: 29rpx;
		margin-bottom: 11rpx;
	}

	.selzjz {
		 padding-left: 86rpx; 
		image {
			display: block;
			width: 578rpx;
			height: 364rpx;
			margin-bottom: 29rpx;
		}
	}


	.btnBox {
		margin: 60upx auto 0 auto;
	}

	.btnBox button {
		width: 417rpx;
		height: 83rpx;
		background: linear-gradient(150deg, rgba(255, 200, 35, 1), rgba(255, 193, 12, 1));
		box-shadow: 0px 0px 3px 0px rgba(208, 139, 20, 0.25);
		border-radius: 42rpx;
	}

	.btnBox button text {
		width: 116rpx;
		height: 38rpx;
		font-size: 40rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(53, 53, 53, 1);
		line-height: 40rpx;
	}

	.btnText {
		margin: 0 auto;
		width: 300rpx;
		height: 23rpx;
		padding: 19rpx;
		font-size: 24rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		line-height: 25rpx;
	}

	.bottom {
		margin-top: 63rpx;
	}

	.bottom image {
		display: block;
		width: 100%;
		height: 136rpx;
	}
</style>
