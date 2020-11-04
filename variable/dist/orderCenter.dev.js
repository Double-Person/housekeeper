"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.directorOrderCenterAllStatus = exports.workersOrderCenterAllStatus = exports.workersAfterProcessing = exports.workersAfterSale = exports.workersPlant = exports.workersOrderStatus = exports.technicianPlant = exports.technicianOrderStatus = exports.employees = exports.afterProcessing = exports.contract = exports.salesOrder = exports.statusObj = exports.positionObj = void 0;
var positionObj = {
  DIRECTOR: 0,
  // 主管   director
  TECHNICIAN: 1,
  // 技术员   technology
  MASTER: 2 // 工长    master

}; //主管
// 订单中心

exports.positionObj = positionObj;
var statusObj = {
  ALL: 0,
  // 全部
  CONSTRUCTION: 1,
  // 施工
  AUDIT: 2,
  // 审核
  CUSTOMER_CONFIRMATION: 3,
  // 客户确认
  QUALITY_ASSURANCE: 4,
  // 质保
  COMPLETE: 5,
  // 完成
  CANCEL: 6 // 取消

}; //  售后订单

exports.statusObj = statusObj;
var salesOrder = {
  PROCESSING: 0,
  // 处理中
  COMPLETED: 1 // 已完成

}; // 合同

exports.salesOrder = salesOrder;
var contract = {
  STAY_BY: 0,
  // 待通过
  NOT_THROUGH: 1,
  // 未通过
  HAVE_BEEN_THROUGH: 2 // 已通过

}; // 售后处理

exports.contract = contract;
var afterProcessing = {
  REFUND: 0,
  // 退款
  QUALITY_PROBLEM: 1 // 质量问题

}; // 员工

exports.afterProcessing = afterProcessing;
var employees = {
  TECHNICAL_PERSONNEL: 0,
  // 技术人员
  MASTER: 1 // 工长

}; // 技术员
// 订单中心

exports.employees = employees;
var technicianOrderStatus = {
  ALL: 0,
  // 全部
  ONGOING: 1,
  // 进行中
  COMPLETED: 2,
  // 已完成
  CANCELLED: 3 // 已取消

}; // 订单中心

exports.technicianOrderStatus = technicianOrderStatus;
var technicianPlant = {
  BEEN_CONFIRMED: 0,
  // 已确认
  CONFIRMED: 1,
  // 待确认
  NOT_THROUGH: 2 // 未通过

}; // 工人
// 订单中心

exports.technicianPlant = technicianPlant;
var workersOrderStatus = {
  ALL: 0,
  // 全部
  CONSTRUCTION: 1,
  // 施工
  AUDIT: 2,
  // 审核
  CUSTOMER_CONFIRMATION: 3,
  // 客户确认
  QUALITY_ASSURANCE: 4,
  // 质保
  COMPLETE: 5,
  // 完成
  CANCEL: 6 // 取消

}; // 方案

exports.workersOrderStatus = workersOrderStatus;
var workersPlant = {
  ALL: 0,
  // 全部
  ONGOING: 1,
  // 进行中
  COMPLETED: 2 // 已完成

}; // 售后订单

exports.workersPlant = workersPlant;
var workersAfterSale = {
  PROCESSED: 0,
  // 待处理
  PROCESSING: 1,
  // 处理中
  COMPLETED: 2 // 已完成

}; // 售后处理

exports.workersAfterSale = workersAfterSale;
var workersAfterProcessing = {
  REFUND: 0,
  // 退款
  QUALITY_PROBLEM: 1 // 质量问题

}; // 工人订单中所有状态

exports.workersAfterProcessing = workersAfterProcessing;
var workersOrderCenterAllStatus = {
  START: 0,
  // 待开工
  CONSTRUCTION: 1,
  // 施工中
  REVIEW: 2,
  // 审核中
  THROUGH: 3,
  // 已通过
  NOT_THROUGH: 4,
  // 未通过
  QUALITY: 5,
  // 质保中
  COMPLETED: 6,
  // 已完成
  CANCEL: 7,
  // 取消
  SALES_SERVICE: 8,
  // 售后待处理
  SALE_PROCESS: 9,
  // 售后处理中
  SALES_SERVICE_COMPLETED: 10 // 售后已完成

}; // 主管订单中所有状态

exports.workersOrderCenterAllStatus = workersOrderCenterAllStatus;
var directorOrderCenterAllStatus = {
  START: 0,
  // 待开工
  CONSTRUCTION: 1,
  // 施工中
  REVIEW: 2,
  // 审核中
  THROUGH: 3,
  // 已通过
  NOT_THROUGH: 4,
  // 未通过
  QUALITY: 5,
  // 质保中
  COMPLETED: 6,
  // 已完成
  CANCEL: 7,
  // 取消
  SALES_SERVICE: 8,
  // 售后待处理
  SALE_PROCESS: 9,
  // 售后处理中
  SALES_SERVICE_COMPLETED: 10,
  // 售后已完成
  USER_WAITING: 10,
  // 用户待通过 
  USER_NOT_APPROVED: 10 // 用户不通过

};
exports.directorOrderCenterAllStatus = directorOrderCenterAllStatus;