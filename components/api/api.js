import { ajax,baseUrl } from "./request.js";

// 1.账号密码登录   phone   pwd
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








// 6、查询主管列表  
export const workerUserExecutive = data => ajax({ url: '/api/workerUser/executive', data, method: 'POST' });

// 7、查询主管下的技术员列表  parent_id  主管的id
export const technician = data => ajax({ url: '/api/workerUser/technician', data, method: 'POST' });

// 8、查询主管下的工人  parent_id  主管的id
export const workerWorker = data => ajax({ url: '/api/workerUser/worker', data, method: 'POST' });

// 9、查询所有工人的接单列表  worker_id （主管的id、技术员的id、工长的id  
export const workerorderApiworkerList = data => ajax({ url: '/api/workerorderApiworker/list', data, method: 'POST' });

// 10、主管接单点击事件  worker_id 主管的id    order_id   订单id   state_one   1接受 2不接受 
export const updatestate = data => ajax({ url: '/api/workerorderApi/updatestate', data, method: 'POST' });

// 10、主管下派订单点击事件  worker_id 工人的id（技术员或工人的id）   order_id   订单id  states    0已分配技术人员、3已分配工人
export const distribution = data => ajax({ url: '/api/workerorderApi/distribution', data, method: 'POST' });

// 11、查询主管技术员待派单  worker_id 主管的id
export const daitechnician = data => ajax({ url: '/api/workerorderApi/daitechnician', data, method: 'POST' });

// 12、查询主管工人待派单   worker_id 主管的id
export const daiforeman = data => ajax({ url: '/api/workerorderApi/daiforeman', data, method: 'POST' });

// 13、修改技术人员接单   technician_id :  技术员的id   order_id   订单id   state_one   1接受 2不接受    doortime    上门时间
export const upaateforeman = data => ajax({ url: '/api/workerorderApi/upaateforeman', data, method: 'POST' });

     

     

    
     











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
