import axios from 'axios'
const instance = axios.create({
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
})

// http request 拦截器
instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        config.headers.authorization = token  //请求头加上token
        return config
    },
    err => {
        return Promise.reject(err)
    }
)
// http response 拦截器
// instance.interceptors.response.use(
//     response => {
//       //拦截响应，做统一处理 
//       if (response.data.code) {
//         switch (response.data.code) {
//           case 1002:
//             store.state.isLogin = false
//             router.replace({
//               path: 'login',
//               query: {
//                 redirect: router.currentRoute.fullPath
//               }
//             })
//         }
//       }
//       return response
//     },
//     //接口错误状态处理，也就是说无响应时的处理
//     error => {
//       return Promise.reject(error.response.status) // 返回接口返回的错误信息
//     }
// )
export default instance