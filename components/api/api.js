import {ajax} from "./request.js"

// 1.账号密码登录   完成
export const login = data => ajax({url: '/api/ordersummary/login/account', data, method:'POST'});

// 2.个人中心
export const personal = data => ajax({url: '/api/ordersummary/me', data, method:'POST'});
