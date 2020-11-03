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
			name = '质保中';
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
		default:
			name = type

	}
	return name
}

export {
	showMsg
}
