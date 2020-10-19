//主管

// 订单中心
export const statusObj = {
	ALL: 0,  // 全部
	CONSTRUCTION: 1,  // 施工
	AUDIT: 2,  // 审核
	CUSTOMER_CONFIRMATION: 3,  // 客户确认
	QUALITY_ASSURANCE: 4,  // 质保
	COMPLETE: 5,  // 完成
	CANCEL: 6,  // 取消
}

//  售后订单
export const salesOrder = {
	PROCESSING: 0,  // 处理中
	COMPLETED: 1, // 已完成

}

// 合同
export const contract = {
	STAY_BY: 0, // 待通过
	NOT_THROUGH: 1, // 未通过
	HAVE_BEEN_THROUGH: 2, // 已通过
}


// 售后处理
export const afterProcessing = {
	REFUND: 0, // 退款
	QUALITY_PROBLEM: 1, // 质量问题
}


// 员工
export const employees = {
	TECHNICAL_PERSONNEL: 0, // 技术人员
	MASTER: 1, // 工长
}

