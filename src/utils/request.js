import axios from "axios";

const exceptionMessage = {
  1000: '用户名或者密码发生错误',
  2000: 'XXX发生错误',
  3000: ''
}

import { Message } from "element-ui"

import store from "@/store";

const service = axios.create({
  baseURL: process.env.VUE_APP_S_U,
  timeout: 5000
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  const token = store.getters.token
  if (token) config.headers.Authorization = "Bearer" + token
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  console.log('--', response)
  if (response.status < 400) {

    return response.data.data
  }
  if (response.status === 401) {
    return response.data.data
  }
  _showError(response.data.code, response.data.message)
  return response;
}, function (error) {
  return Promise.reject(error);
});

const _showError = (errorCode, message) => {
  let title
  title = exceptionMessage[errorCode] || message || '发生未知错误'
  Message.error(title)
}
// const request = (ontinos) => {... }

export default service