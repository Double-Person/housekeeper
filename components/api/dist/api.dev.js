"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upLoadFile = exports.telCode = exports.start = exports.selectorder = exports.receivingorders = exports.orderprogrammeinfo = exports.search = exports.addprogrammeinfo = exports.programme3 = exports.programme2 = exports.programme1 = exports.technicianListAllById = exports.technicianUpaateforeman = exports.upaateforeman = exports.selectgoodname = exports.ordertype = exports.questionnaireApiAnswerlist = exports.questionnaireApiAdd = exports.questionnaireApiList = exports.programmeApiList = exports.workerorderApiJudgeadopt = exports.workerorderApiProgramme = exports.daiforeman = exports.daitechnician = exports.distribution = exports.updatestate = exports.workerorderApiworkerList = exports.workerWorker = exports.technician = exports.workerUserExecutive = exports.workerIndex = exports.forgetPwd = exports.executive = exports.workerRegister = exports.login = void 0;

var _request = require("./request.js");

// ,baseUrl 
var baseUrl = ''; // #ifdef H5   

baseUrl = ''; // #endif
// #ifdef APP-PLUS

baseUrl = 'https://www.hemingbi.com/housekeeper'; // #endif
// 1.账号密码登录   phone   pwd

var login = function login(data) {
  return (0, _request.ajax)({
    url: '/worker/workerLogin',
    data: data,
    method: 'POST'
  });
}; // 2. 注册


exports.login = login;

var workerRegister = function workerRegister(data) {
  return (0, _request.ajax)({
    url: '/worker/workerRegister',
    data: data,
    method: 'POST',
    headerType: 'application/json'
  });
}; // 3.获取主管接口  参数  workers_id 工人id


exports.workerRegister = workerRegister;

var executive = function executive(data) {
  return (0, _request.ajax)({
    url: '/worker/executive',
    data: data,
    method: 'GET'
  });
}; // 4.忘记密码   手机号   验证吗  新密码 

/* 参数  workers_id 工人id phone  手机号 code 验证码 pwd  密码 */


exports.executive = executive;

var forgetPwd = function forgetPwd(data) {
  return (0, _request.ajax)({
    url: '/worker/forgetPwd',
    data: data,
    method: 'POST'
  });
}; // 5.首页用户信息显示   workers_id 工人id


exports.forgetPwd = forgetPwd;

var workerIndex = function workerIndex(data) {
  return (0, _request.ajax)({
    url: '/worker/index',
    data: data,
    method: 'GET'
  });
}; // 6、查询主管列表  


exports.workerIndex = workerIndex;

var workerUserExecutive = function workerUserExecutive(data) {
  return (0, _request.ajax)({
    url: '/workerUser/executive',
    data: data,
    method: 'POST'
  });
}; // 7、查询主管下的技术员列表  parent_id  主管的id


exports.workerUserExecutive = workerUserExecutive;

var technician = function technician(data) {
  return (0, _request.ajax)({
    url: '/workerUser/technician',
    data: data,
    method: 'POST'
  });
}; // 8、查询主管下的工人  parent_id  主管的id


exports.technician = technician;

var workerWorker = function workerWorker(data) {
  return (0, _request.ajax)({
    url: '/workerUser/worker',
    data: data,
    method: 'POST'
  });
}; // 9、查询所有工人的接单列表  worker_id （主管的id、技术员的id、工长的id    新订单


exports.workerWorker = workerWorker;

var workerorderApiworkerList = function workerorderApiworkerList(data) {
  return (0, _request.ajax)({
    url: '/api/workerorderApi/list',
    data: data,
    method: 'POST'
  });
}; // 10、主管接单点击事件  worker_id 主管的id    order_id   订单id   state_one   1接受 2不接受 


exports.workerorderApiworkerList = workerorderApiworkerList;

var updatestate = function updatestate(data) {
  return (0, _request.ajax)({
    url: '/api/workerorderApi/updatestate',
    data: data,
    method: 'POST'
  });
}; // 10、主管下派订单点击事件  worker_id 工人的id（技术员或工人的id）   order_id   订单id  states    0已分配技术人员、3已分配工人


exports.updatestate = updatestate;

var distribution = function distribution(data) {
  return (0, _request.ajax)({
    url: '/api/workerorderApi/distribution',
    data: data,
    method: 'POST'
  });
}; // 11、查询主管技术员待派单  worker_id 主管的id


exports.distribution = distribution;

var daitechnician = function daitechnician(data) {
  return (0, _request.ajax)({
    url: '/api/workerorderApi/daitechnician',
    data: data,
    method: 'POST'
  });
}; // 12、查询主管工人待派单   worker_id 主管的id


exports.daitechnician = daitechnician;

var daiforeman = function daiforeman(data) {
  return (0, _request.ajax)({
    url: '/api/workerorderApi/daiforeman',
    data: data,
    method: 'POST'
  });
}; // 13  方案


exports.daiforeman = daiforeman;

var workerorderApiProgramme = function workerorderApiProgramme(data) {
  return (0, _request.ajax)({
    url: '/api/workerorderApi/programme',
    data: data,
    method: 'POST'
  });
}; // 方案通过


exports.workerorderApiProgramme = workerorderApiProgramme;

var workerorderApiJudgeadopt = function workerorderApiJudgeadopt(data) {
  return (0, _request.ajax)({
    url: '/api/workerorderApi/judgeadopt',
    data: data,
    method: 'POST'
  });
}; // 方案未通过详情


exports.workerorderApiJudgeadopt = workerorderApiJudgeadopt;

var programmeApiList = function programmeApiList(data) {
  return (0, _request.ajax)({
    url: '/api/programmeApi/list',
    data: data,
    method: 'POST'
  });
}; // 问卷调查


exports.programmeApiList = programmeApiList;

var questionnaireApiList = function questionnaireApiList(data) {
  return (0, _request.ajax)({
    url: '/api/questionnaireApi/list',
    data: data,
    method: 'POST'
  });
}; // 問卷调查提交


exports.questionnaireApiList = questionnaireApiList;

var questionnaireApiAdd = function questionnaireApiAdd(data) {
  return (0, _request.ajax)({
    url: '/api/questionnaireApi/add',
    data: data,
    method: 'POST'
  });
}; // 查询问卷调查答案列表


exports.questionnaireApiAdd = questionnaireApiAdd;

var questionnaireApiAnswerlist = function questionnaireApiAnswerlist(data) {
  return (0, _request.ajax)({
    url: '/api/questionnaireApi/answerlist',
    data: data,
    method: 'POST'
  });
}; // 主管訂單中心


exports.questionnaireApiAnswerlist = questionnaireApiAnswerlist;

var ordertype = function ordertype(data) {
  return (0, _request.ajax)({
    url: '/api/workerorderApi/ordertype',
    data: data,
    method: 'POST'
  });
}; // 技术人员
// 技术员的模糊查询
// technician_id 技术员id    states（全部不传）   0设置方案、1完成、2取消、3重新设置、4、待审核     query 参数


exports.ordertype = ordertype;

var selectgoodname = function selectgoodname(data) {
  return (0, _request.ajax)({
    url: '/api/technician/selectgoodname',
    data: data,
    method: 'POST'
  });
}; // 1、修改技术人员接单   technician_id :  技术员的id   order_id   订单id   state_one   1接受 2不接受    doortime    上门时间


exports.selectgoodname = selectgoodname;

var upaateforeman = function upaateforeman(data) {
  return (0, _request.ajax)({
    url: '/api/workerorderApi/upaateforeman',
    data: data,
    method: 'POST'
  });
};

exports.upaateforeman = upaateforeman;

var technicianUpaateforeman = function technicianUpaateforeman(data) {
  return (0, _request.ajax)({
    url: '/api/technician/upaateforeman',
    data: data,
    method: 'POST'
  });
}; // 订单中心


exports.technicianUpaateforeman = technicianUpaateforeman;

var technicianListAllById = function technicianListAllById(data) {
  return (0, _request.ajax)({
    url: '/api/technician/listAllById',
    data: data,
    method: 'POST'
  });
}; // 这个是第一层信息获取接口


exports.technicianListAllById = technicianListAllById;

var programme1 = function programme1(data) {
  return (0, _request.ajax)({
    url: '/api/workerProgramme/programme1',
    data: data,
    method: 'GET'
  });
}; // typeid


exports.programme1 = programme1;

var programme2 = function programme2(data) {
  return (0, _request.ajax)({
    url: '/api/workerProgramme/programme2',
    data: data,
    method: 'GET'
  });
}; // typeid   series_id


exports.programme2 = programme2;

var programme3 = function programme3(data) {
  return (0, _request.ajax)({
    url: '/api/workerProgramme/programme3',
    data: data,
    method: 'GET'
  });
}; // 参数  type（0 是新增  1  是修改）   order_id  list（这个是穿个方案的数组传id就行） 
// starttime开始时间  endtime结束时间  img 图片   
// concessional   remarks  proportion  price  priceafter  reason   GET   这个是提交和修改接口


exports.programme3 = programme3;

var addprogrammeinfo = function addprogrammeinfo(data) {
  return (0, _request.ajax)({
    url: '/api/workerProgramme/addprogrammeinfo',
    data: data,
    method: 'POST'
  });
}; // 方案搜索


exports.addprogrammeinfo = addprogrammeinfo;

var search = function search(data) {
  return (0, _request.ajax)({
    url: '/api/workerProgramme/search',
    data: data,
    method: 'GET'
  });
}; // 参数  orderprogrammeinfo_id    GET   这个是获取方案信息信息获取接口


exports.search = search;

var orderprogrammeinfo = function orderprogrammeinfo(data) {
  return (0, _request.ajax)({
    url: '/api/workerProgramme/orderprogrammeinfo',
    data: data,
    method: 'GET'
  });
}; // 工人
// 新订单  接收、不接受


exports.orderprogrammeinfo = orderprogrammeinfo;

var receivingorders = function receivingorders(data) {
  return (0, _request.ajax)({
    url: '/api/master/receivingorders',
    data: data,
    method: 'POST'
  });
}; // 订单中心  // 列表


exports.receivingorders = receivingorders;

var selectorder = function selectorder(data) {
  return (0, _request.ajax)({
    url: '/api/master/selectorder',
    data: data,
    method: 'POST'
  });
}; // 订单中心  施工待开工中  开工按钮


exports.selectorder = selectorder;

var start = function start(data) {
  return (0, _request.ajax)({
    url: '/api/master/start',
    data: data,
    method: 'POST'
  });
}; // 发送验证码


exports.start = start;

var telCode = function telCode(data) {
  return (0, _request.ajax)({
    url: '/login/telCode',
    data: data,
    method: 'POST'
  });
};

exports.telCode = telCode;

var upLoadFile = function upLoadFile(option) {
  if (!option.path) {
    throw new TypeError('文件上传路径不能为空');
  }

  return new Promise(function (resolve, reject) {
    uni.showLoading({
      title: '上传中',
      icon: 'loading',
      mask: true
    });
    uni.uploadFile({
      url: baseUrl + '/uploadFile/file',
      //仅为示例，非真实的接口地址
      filePath: option.path,
      name: option.name || 'file',
      formData: {// file: 'test'
      },
      success: function success(uploadFileRes) {
        console.log(uploadFileRes);
        uni.hideLoading();
        resolve(uploadFileRes);
      },
      fail: function fail(err) {
        uni.hideLoading();
        uni.showToast({
          title: '上传失败，请重新上传',
          icon: 'none'
        });
        reject(err);
      },
      complete: function complete() {}
    });
  });
};

exports.upLoadFile = upLoadFile;