// 工人 订单中心
function showMsg(type) {
	let name = ''
	switch (type * 1) {
		case 0:
			name = '待开工';
			break;
		case 1:
			name = '施工中';
			break;
		case 2:
			name = '审核中';
			break;
		case 3:
			name = '已通过';
			break;
		case 4:
			name = '未通过';
			break;
		case 5:
			name = '保修中';
			break;
		case 6:
			name = '已完成';
			break;
		case 7:
			name = '取消';
			break;
		case 8:
			name = '售后待处理';
			break;
		case 9:
			name = '售后处理中';
			break;
		case 10:
			name = '售后已完成';
			break;
		case 11:
			name = '用户待通过';
			break;
		case 12:
			name = '用户不通过';
			break;
		case 13:
			name = '用户通过';
			break;
		default:
			name = type

	}
	return name
}

// 主管 订单中心
function directorShowMsg(type) {
	let name = ''
	switch (type * 1) {
		case 0:
			name = '待开工';
			break;
		case 1:
			name = '施工中';
			break;
		case 2:
			name = '审核中';
			break;
		case 3:
			name = '已通过';
			break;
		case 4:
			name = '未通过';
			break;
		case 5:
			name = '保修中';
			break;
		case 6:
			name = '已完成';
			break;
		case 7:
			name = '取消';
			break;
		case 8:
			name = '售后待处理';
			break;
		case 9:
			name = '售后处理中';
			break;
		case 10:
			name = '售后已完成';
			break;
		case 11:
			name = '用户待通过';
			break;
		case 12:
			name = '用户不通过';
			break;
		case 13:
			name = '用户通过';
			break;
		default:
			name = type

	}
	return name
}

// 性别转换
function sexConversion(sex) {
	if (sex == 0) {
		return '女'
	} else if (sex == 1) {
		return '男'
	} else {
		return '不详'
	}
}

// 职位转换
function levelsConversion(level) {
	if (level == 0) {
		return '主管'
	} else if (level == 1) {
		return '技术员'
	} else if (level == 2) {
		return '工长'
	}
}


export {
	showMsg,
	directorShowMsg,
	sexConversion,
	levelsConversion
}
