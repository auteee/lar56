
import axios from 'axios'
import {getToken} from '../helpers/helpers.js';

axios.defaults.baseURL='http://lar56.cn/api/admin/';
axios.defaults.timeout=5000;
axios.defaults.headers.common['Authorization'] = 'Bearer '+getToken();
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

// const ioax = axios.create({
//   baseURL: 'http://lar56.cn/api/admin/', // api的base_url
//   timeout: 5000, // request timeout,
//   headers: {'X-Requested-With': 'XMLHttpRequest'},
// });
//
// // 在实例已创建后修改默认值
// ioax.defaults.headers.common['Authorization'] = 'Bearer '+getToken();
// //ioax.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default axios;

/*
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
*/