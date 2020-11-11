import { ajax, ajaxJson, baseUrl} from "./request.js";


// 判断是第一次
export const wxloginone = data => ajax({ url: '/worker/wxloginone', data, method: 'POST' });
// 微信登陆
export const wxlogin = data => ajax({ url: '/worker/wxlogin', data, method: 'POST' });



// 1.账号密码登录   phone   pwd
export const login = data => ajax({ url: '/worker/workerLogin', data, method: 'POST' });
// 2. 注册
export const workerRegister = data => ajax({ url: '/worker/workerRegister', data, method: 'POST', headerType:'application/json' });

// 3.获取主管接口  参数  workers_id 工人id
export const executive = data => ajax({ url: '/worker/executive', data, method: 'GET' });

// 4.忘记密码   手机号   验证吗  新密码 
/* 参数  workers_id 工人id phone  手机号 code 验证码 pwd  密码 */
export const forgetPwd = data => ajax({ url: '/worker/forgetPwd', data, method: 'POST' });

// 5.首页用户信息显示   workers_id 工人id
export const workerIndex = data => ajax({ url: '/worker/index', data, method: 'GET' });



// 6、查询主管列表  
export const workerUserExecutive = data => ajax({ url: '/workerUser/executive', data, method: 'POST' });

// 7、查询主管下的技术员列表  parent_id  主管的id
export const technician = data => ajax({ url: '/workerUser/technician', data, method: 'POST' });

// 8、查询主管下的工人  parent_id  主管的id
export const workerWorker = data => ajax({ url: '/workerUser/worker', data, method: 'POST' });

// 9、查询所有工人的接单列表  worker_id （主管的id、技术员的id、工长的id    新订单
export const workerorderApiworkerList = data => ajax({ url: '/api/workerorderApi/list', data, method: 'POST' });

// 10、主管接单点击事件  worker_id 主管的id    order_id   订单id   state_one   1接受 2不接受 
export const updatestate = data => ajax({ url: '/api/workerorderApi/updatestate', data, method: 'POST' });

// 10、主管下派订单点击事件  worker_id 工人的id（技术员或工人的id）   order_id   订单id  states    0已分配技术人员、3已分配工人
export const distribution = data => ajax({ url: '/api/workerorderApi/distribution', data, method: 'POST' });

// 11、查询主管技术员待派单  worker_id 主管的id
export const daitechnician = data => ajax({ url: '/api/workerorderApi/daitechnician', data, method: 'POST' });

// 12、查询主管工人待派单   worker_id 主管的id
export const daiforeman = data => ajax({ url: '/api/workerorderApi/daiforeman', data, method: 'POST' });

// 13  方案
export const workerorderApiProgramme = data => ajax({ url: '/api/workerorderApi/programme', data, method: 'POST' });
// 方案通过
export const workerorderApiJudgeadopt = data => ajax({ url: '/api/workerorderApi/judgeadopt', data, method: 'POST' });
// 方案未通过详情
export const programmeApiList = data => ajax({ url: '/api/programmeApi/list', data, method: 'POST' });
// 问卷调查
export const questionnaireApiList = data => ajax({ url: '/api/questionnaireApi/list', data, method: 'POST' });
// 問卷调查提交
export const questionnaireApiAdd = data => ajax({ url: '/api/questionnaireApi/add', data, method: 'POST' });
// 查询问卷调查答案列表
export const questionnaireApiAnswerlist = data => ajax({ url: '/api/questionnaireApi/answerlist', data, method: 'POST' });
// 主管訂單中心
export const ordertype = data => ajax({ url: '/api/workerorderApi/ordertype', data, method: 'POST' });
export const workerdopt = data => ajax({ url: '/api/workerorderApi/workerdopt', data, method: 'POST' });
// 查看施工进度
export const construction = data => ajax({ url: '/api/master/construction', data, method: 'POST' });
// 查询用户总余额
export const goEdit = data => ajax({ url: '/api/masterPrice/goEdit', data, method: 'POST' });
// 提现
export const withdra = data => ajax({ url: '/api/masterPrice/withdra', data, method: 'POST' });
export const withdraList = data => ajax({ url: '/api/masterPrice/list', data, method: 'POST' });

// 订单审核
export const shenhe = data => ajax({ url: '/api/aftersaleApi/shenhe', data, method: 'POST' });
// 重新审核
export const againshenhe = data => ajax({ url: '/api/aftersaleApi/againshenhe', data, method: 'POST' });








// 技术人员
// 技术员的模糊查询
// technician_id 技术员id    states（全部不传）   0设置方案、1完成、2取消、3重新设置、4、待审核     query 参数
export const selectgoodname = data => ajax({ url: '/api/technician/selectgoodname', data, method: 'POST' });


// 1、修改技术人员接单   technician_id :  技术员的id   order_id   订单id   state_one   1接受 2不接受    doortime    上门时间
export const upaateforeman = data => ajax({ url: '/api/workerorderApi/upaateforeman', data, method: 'POST' });


export const technicianUpaateforeman = data => ajax({ url: '/api/technician/upaateforeman', data, method: 'POST' });
// 订单中心
export const technicianListAllById = data => ajax({ url: '/api/technician/listAllById', data, method: 'POST' });


// 这个是第一层信息获取接口
export const programme1 = data => ajax({ url: '/api/workerProgramme/programme1', data, method: 'GET' });
// typeid
export const programme2 = data => ajax({ url: '/api/workerProgramme/programme2', data, method: 'GET' });
// typeid   series_id
export const programme3 = data => ajax({ url: '/api/workerProgramme/programme3', data, method: 'GET' });

// 参数  type（0 是新增  1  是修改）   order_id  list（这个是穿个方案的数组传id就行） 
// starttime开始时间  endtime结束时间  img 图片   
// concessional   remarks  proportion  price  priceafter  reason   GET   这个是提交和修改接口
export const addprogrammeinfo = data => ajax({ url: '/api/workerProgramme/addprogrammeinfo', data, method: 'POST' });

 
// 方案搜索
export const search = data => ajax({ url: '/api/workerProgramme/search', data, method: 'GET' });
// 参数  orderprogrammeinfo_id    GET   这个是获取方案信息信息获取接口
export const orderprogrammeinfo = data => ajax({ url: '/api/workerProgramme/orderprogrammeinfo', data, method: 'GET' });







     

    
// 工人
// 新订单  接收、不接受
export const receivingorders = data => ajax({ url: '/api/master/receivingorders', data, method: 'POST' });
// 订单中心  // 列表
export const selectorder = data => ajax({ url: '/api/master/selectorder', data, method: 'POST' });
// 订单中心  施工待开工中  开工按钮
export const start = data => ajax({ url: '/api/master/start', data, method: 'POST' });
 // 查询工人的订单的施工意见  * master_id   * opinion_state 状态(0已解决、1未解决)
 export const listorder = data => ajax({ url: '/api/pinion/listorder', data, method: 'POST' });
 // 详情
 export const pinionFindById = data => ajax({ url: '/api/pinion/findById', data, method: 'POST' });
 
 
 
 // 查询工人的订单的施工完成按钮意见
 export const opinionstate = data => ajax({ url: '/api/master/opinionstate', data, method: 'POST' });
 
 // /售后订单开工
 export const masterStart = data => ajax({ url: '/api/master/start', data, method: 'POST' });
 
 export const masterProgramme = data => ajax({ url: '/api/master/programme', data, method: 'POST' });
 
 
 
 
 
 









// 发送验证码
export const telCode = data => ajax({ url: '/login/telCode', data, method: 'POST' });



// 查询用户的售后处理  worker_id  主管id    token
export const userlist = data => ajax({ url: '/api/aftersaleApi/userlist', data, method: 'POST' });
// 用户的售后处理 通过、不通过
export const workeradd = data => ajax({ url: '/api/aftersaleApi/workeradd', data, method: 'POST' });

// 售后订单
export const qualityList = data => ajax({ url: '/api/aftersaleApi/qualityList', data, method: 'POST' });


// 订单审核详情
export const aftersaleApiConstruction = data => ajax({ url: '/api/aftersaleApi/construction', data, method: 'POST' });





// 订单详情
export const goosapiFindById = data => ajax({ url: '/api/goosapi/findById', data, method: 'POST' });












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
