"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_vue["default"].config.productionTip = false;

function checkPhone() {
  var phone = document.getElementById('phone').value;
} // 手机正则匹配


_vue["default"].prototype.$checkPhone = function (phone) {
  var telStr = /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/;

  if (!telStr.test(phone)) {
    uni.showToast({
      title: '手机号码格式错误',
      icon: 'none'
    });
    return false;
  } else return true;
};

_vue["default"].prototype.$toIndex = function () {
  var HOUSE_LEVELS = uni.getStorageSync('HOUSE_LEVELS');

  switch (HOUSE_LEVELS * 1) {
    case 0:
      // 主管
      uni.navigateTo({
        url: "./pages/home/zhuguan"
      });
      break;

    case 1:
      // 技术员
      uni.navigateTo({
        url: "./pages/home/homejishu"
      });
      break;

    case 2:
      // 工人
      uni.navigateTo({
        url: "./pages/home/home"
      });
      break;

    default:
      break;
  }
};

_App["default"].mpType = 'app';
var app = new _vue["default"](_objectSpread({}, _App["default"], {
  mounted: function mounted() {
    console.log('main mounted');
  }
}));
app.$mount();