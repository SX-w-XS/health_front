/*
封装axios,同时加深对Promise理解
完成请求拦截、相应拦截、错误统一处理
 */
import axios from "axios";
import { ElMessage } from "element-plus";
import router from "@/router/router.js";
import * as url from "url";

//请求拦截
axios.interceptors.request.use(
    async config =>{
        //每一次发送请求之前先判断vuex中是否存在token
        //如果存在，则统一在http请求头上加上token
        config.headers.TOKEN = sessionStorage.getItem("token")
        return config
    },
    error => {
        return Promise.error(error)
    }
)

//响应拦截
axios.interceptors.response.use(
    response => {

    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                default:
            }
            return Promise.reject(error.response)
        }
    }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求携带的参数]
 */
const $get = (url, params) => {
    return new Promise((resolve, reject) => {
        axios
            .get(url,{
                params:params
            })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求携带的参数]
 */
const $post = (url, params) => {
    return new Promise((resolve, reject) => {
        axios
            .get(url,{
                params:params
            })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}

export default {
   install: app => {
       app.config.globalProperties["$get"] = $get
       app.config.globalProperties["$post"] = $post
       app.config.globalProperties["$axios"] = axios
   }
}
