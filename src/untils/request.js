// 引入axios
import axios from "axios";
// 自定义错误信息提示
const excetionMessage = {
    1000: "用户名或密码发生错误",
    3000: ''
}
// 引入element-ui/message
import {Message} from "element-ui";

import store from "../store";

// 实例化对象
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// 请求拦截
service.interceptors.request.use(function (config) {
    // 获取vuex的token
    const token=store.getters.token
    // 当token存在的话，将token通过请求头发送给后台
    if(token) config.headers.Authorization="Bearer" + token

    return config;
}, function (error) {
    return Promise.reject(error)
})

// 响应拦截 
service.interceptors.response.use(function (response) {
    // 判断请求后返回数据的状态小于400
    if (response.status < 400) {
        return response.data.data
    }
    if (response.status === 401) {
        // token的过期处理
        return
    }
    _showError(response.data.code, response.data.message)
    return response;
}, function (error) {
    return Promise.reject(error)
})

// 错误提示
const _showError = (errorCode, message) => {
    let title
    title = excetionMessage[errorCode] || message || '发生未知错误'
    Message.error(title)
}
// 导出
export default service 