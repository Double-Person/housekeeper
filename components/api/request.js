
// export const baseUrl ='http://192.168.0.103:8081'

let baseUrl_ = ''
// #ifdef H5   
baseUrl_ =''
// #endif

// #ifdef APP-PLUS
baseUrl_ ='https://www.hemingbi.com/housekeeper'
// #endif
export const baseUrl = baseUrl_

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
	
		console.log('請求數據--', token)
        uni.request({
            url: baseUrl + option.url,
            data: option.data || {},
            method: option.method || 'GET',
            header: {
                'token': token,   // option.headerType ||    option.headerType ? option.headerType :   'Bearer ' + 
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: (res) => {
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
