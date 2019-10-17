import axios from 'axios'

// axios的默认配置
axios.defaults.timeout = 10000 // 请求超时时间
// axios.defaults.baseURL = 'http://localhost:3000'

// 返回状态判断(响应拦截器)
axios.interceptors.response.use(res => {
  if (res.data.code !== 200) {
    alert('网络异常')
    return Promise.reject(res)
  }
  return res
}, error => {
  alert('网络异常')
  return Promise.reject(error)
})

axios.interceptors.response.use(response => response, err => Promise.resolve(err.response))

export function fetchGet (url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    })
    .then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export function FetchPost (url, data) {
  if (!url) {
    return
  }
  return new Promise((resolve, reject) => {
    axios.post(url, data)
    .then(res => resolve(res.data),
      err => { reject(err) })
    .catch(error => {
      reject(error)
    })
  })
}