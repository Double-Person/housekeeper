"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ajaxJson = exports.ajax = exports.baseUrl = void 0;
// export const baseUrl ='http://192.168.0.103:8081'
var baseUrl_ = ''; // #ifdef H5   
// export const baseUrl =''

baseUrl_ = ''; // #endif
// #ifdef APP-PLUS
// export const baseUrl ='https://www.hemingbi.com/housekeeper'

baseUrl_ = 'https://www.hemingbi.com/housekeeper'; // #endif

var baseUrl = baseUrl_;
exports.baseUrl = baseUrl;

var ajax = function ajax(option) {
  if (!option.url) {
    throw new TypeError('请求地址不能为空');
    return false;
  }

  return new Promise(function (resolve, reject) {
    var token = null;

    try {
      var value = uni.getStorageSync('HOUSE_TOKEN');

      if (value) {
        option.data.token = value;
      }
    } catch (e) {
      console.log(e);
    }

    console.log('請求數據--', token);
    uni.request({
      url: baseUrl + option.url,
      data: option.data || {},
      method: option.method || 'GET',
      header: {
        'token': token,
        // option.headerType ||    option.headerType ? option.headerType :   'Bearer ' + 
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function success(res) {
        // console.log('全局数据', res.data);
        // 不同状态码相关提示
        switch (res.data.msgType) {
          case -1:
            uni.showToast({
              title: res.data.returnMsg,
              icon: 'none'
            });
            break;

          case '1':
            uni.showToast({
              title: '你没有相关权限',
              icon: 'none'
            });
            break;
        }

        resolve(res.data);
      },
      fail: function fail(err) {
        // console.log(err);
        uni.showToast({
          title: '请求失败，请稍后重试',
          icon: 'none'
        });
        reject(err);
      }
    });
  });
};

exports.ajax = ajax;

var ajaxJson = function ajaxJson(option) {
  if (!option.url) {
    throw new TypeError('请求地址不能为空');
    return false;
  }

  return new Promise(function (resolve, reject) {
    var token = uni.getStorage({
      key: 'token'
    });
    uni.request({
      url: baseUrl + option.url,
      data: JSON.stringify(option.data || {}),
      method: option.method || 'GET',
      header: {
        "Content-Type": "application/json"
      },
      success: function success(res) {
        console.log('全局数据', res.data.msgType); // 不同状态码相关提示

        switch (res.data.msgType) {
          case -1:
            uni.showToast({
              title: res.data.returnMsg,
              icon: 'none'
            });
            break;

          case '1':
            uni.showToast({
              title: '你没有相关权限',
              icon: 'none'
            });
            break;
        }

        resolve(res.data);
      },
      fail: function fail(err) {
        // console.log(err);
        uni.showToast({
          title: '请求失败，请稍后重试',
          icon: 'none'
        });
        reject(err);
      }
    });
  });
};

exports.ajaxJson = ajaxJson;