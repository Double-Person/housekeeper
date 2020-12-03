let baseUrl_ = ''
// #ifdef H5   
baseUrl_ =''
// #endif

// #ifdef APP-PLUS
baseUrl_ ='https://yflh.hkzhtech.com/housekeeper'
// #endif
export const baseUrl = baseUrl_

// export const imgBaseUrl = baseUrl + '/'


// export const imgBaseUrl = 'https://yflh.hkzhtech.com/housekeeper/'
export const imgBaseUrl = 'http://192.168.0.107:8081/'


let arr = []


export const ajax = (option) => {
    if (!option.url) {
        throw new TypeError('请求地址不能为空')
        return false
    }
    return new Promise((resolve, reject) => {
        let token = null
		try {
		    const value = uni.getStorageSync('HOUSE_TOKEN');
		    if (value) {	
				option.data.token = value
		    }
		} catch (e) {
		  
			console.log(e)
		}
		
		
		// uni.showLoading({
		// 	title: '加载中',
		// 	mask: true
		// })
		let getUrl = option.url + '' + JSON.stringify(option.data || '');
		let obj = {
			url: getUrl,
			timeStamp: new Date().getTime()
		}
		
		if(arr.length > 1) {
			let nowTime = new Date().getTime();
			if( (getUrl == arr[arr.length - 1].url) && ( nowTime - arr[arr.length - 1].timeStamp < 800 ) ) {
				console.log('阻止重复提交');
				if(arr.length > 500) {
					arr = []
				}
				return false;
			}
		}
		
		arr.push(obj);
		
        uni.request({
            url: baseUrl + option.url,
            data: option.data || {},
            method: option.method || 'GET',
            header: {
                'token': token,   // option.headerType ||    option.headerType ? option.headerType :   'Bearer ' + 
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: (res) => {
			
				console.log(baseUrl + option.url)
                // console.log('全局数据', res.data);
                // 不同状态码相关提示
                switch (res.data.msgType) {
                    case -1:
                        uni.showToast({
                            title: res.data.returnMsg,
							icon: 'none'
                        })
                        break;
                    case '1':
                        uni.showToast({
                            title: '你没有相关权限',
							icon: 'none'
                        })
                        break;
                }

                resolve(res.data);
            },
            fail: err => {

                uni.showToast({
                    title: '请求失败，请稍后重试',
                    icon: 'none'
                })
                reject(err);
            },
			// complete() {
			// 	uni.hideLoading()
			// }
        });
    })
}


export const ajaxJson = (option) => {
    if (!option.url) {
        throw new TypeError('请求地址不能为空')
        return false
    }
    return new Promise((resolve, reject) => {
        let token = uni.getStorage({
            key: 'token'
        });
        uni.request({
            url: baseUrl + option.url,
            data: JSON.stringify(option.data || {}),
            method: option.method || 'GET',
            header: {
                "Content-Type":  "application/json"
            },
            success: (res) => {
                console.log('全局数据', res.data.msgType);
                // 不同状态码相关提示
                switch (res.data.msgType) {
                    case -1:
                        uni.showToast({
                            title: res.data.returnMsg,
							icon: 'none'
                        })
                        break;
                    case '1':
                        uni.showToast({
                            title: '你没有相关权限',
							icon: 'none'
                        })
                        break;
                }

                resolve(res.data);
            },
            fail: err => {
                // console.log(err);
                uni.showToast({
                    title: '请求失败，请稍后重试',
                    icon: 'none'
                })
                reject(err);
            }
        });
    })
}
