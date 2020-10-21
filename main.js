import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

function checkPhone() {
	var phone = document.getElementById('phone').value;

}
// 手机正则匹配
Vue.prototype.$checkPhone = (phone) => {
	const telStr =
		/^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/;
	if (!(telStr.test(phone))) {

		uni.showToast({
			title: '手机号码格式错误',
			icon: 'none'
		})
		return false;
	} else return true
}

App.mpType = 'app'

const app = new Vue({
	...App,
	mounted() {
		console.log('main mounted')
	}
})
app.$mount()
