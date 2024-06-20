import type { App } from 'vue'

export function request(app: App) {
  const baseURL = import.meta.env.VITE_BASE_URL
  uni.$uv.http.setConfig((config) => {
    config.baseURL = baseURL /* 根域名 */
    return config
  })

  // 请求拦截
  uni.$uv.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	    config.data = config.data || {}
    if (config?.custom?.auth) {
      config.header.token = ''
    }
	    return config
  }, (config) => { // 可使用async await 做异步操作
	    return Promise.reject(config)
  })

  // 响应拦截
  uni.$uv.http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作 */
    const data = response.data

    const custom = response.config?.custom
    if (data.code !== 200) {
      if (custom.toast !== false) {
        uni.$uv.toast(data.message)
      }

      if (custom?.catch) {
        return Promise.reject(data)
      }
      else {
        return new Promise(() => { })
      }
    }
    return data === undefined ? {} : data
  }, (response) => {
    return Promise.reject(response)
  })
}

class HYRequest {
  request(config: any) {
    return uni.$uv.http.request(config)
  }
}
