// https://yflh.hkzhtech.com/qufl
let baseUrl = 'https://yflh.hkzhtech.com/qufl';

export const ajax = (option) => {
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
            data: option.data || {},
            method: option.method || 'GET',
            header: {
                // 'Authorization': 'Bearer ' + token,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: (res) => {
                // console.log(res.data);
                // 不同状态码相关提示
                switch (res.data) {
                    case '00':
                        uni.showToast({
                            title: '你没有相关权限',
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
                console.log(err);
                uni.showToast({
                    title: '请求失败，请稍后重试',
                    icon: 'none'
                })
                reject(err)
            }
        });
    })
}
