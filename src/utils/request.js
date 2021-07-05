import axios from 'axios'
axios.defaults.baseURL = 'baseURL'
//post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json'
//设置超时
axios.defaults.timeout = 10000
// 请求拦截
axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截
axios.interceptors.response.use(
  (res) => {
    if (res.status == 200) {
      if (res.data.code === 2000) {
        return Promise.resolve(res.data)
      } else {
      }
    } else {
      return Promise.reject(res)
    }
  },
  (error) => {}
)
export default axios
