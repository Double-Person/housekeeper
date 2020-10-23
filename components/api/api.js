import { ajax,baseUrl } from "./request.js";

// 1.账号密码登录   完成
export const login = data => ajax({ url: '/api/worker/workerLogin', data, method: 'POST' });
// 2. 注册
export const workerRegister = data => ajax({ url: '/api/worker/workerRegister', data, method: 'POST' });

// 3.获取主管接口  参数  workers_id 工人id
export const executive = data => ajax({ url: '/api/worker/executive', data, method: 'GET' });

// 4.忘记密码   手机号   验证吗  新密码 
/* 参数  workers_id 工人id phone  手机号 code 验证码 pwd  密码 */
export const forgetPwd = data => ajax({ url: '/api/worker/forgetPwd', data, method: 'POST' });

// 5.首页用户信息显示   workers_id 工人id
export const workerIndex = data => ajax({ url: '/api/worker/index', data, method: 'GET' });




















// 发送验证码
export const telCode = data => ajax({ url: '/housekeeper/login/telCode', data, method: 'POST' });



export const upLoadFile = (option) => {
	if(!option.path) {
		throw new TypeError('文件上传路径不能为空')
	}
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '上传中',
			icon: 'loading',
			mask: true
		})
		uni.uploadFile({
			url: baseUrl + '/uploadFile/file', //仅为示例，非真实的接口地址
			filePath: option.path,
			name: option.name || 'file',
			formData: {
				// file: 'test'
			},
			success: (uploadFileRes) => {
				console.log(uploadFileRes)
				uni.hideLoading()
				resolve(uploadFileRes)
			},
			fail: err => {
				uni.hideLoading();
				uni.showToast({
					title: '上传失败，请重新上传',
					icon: 'none'
				})
				reject(err)
			},
			complete() {
				
			}
		});
	})
	
}
