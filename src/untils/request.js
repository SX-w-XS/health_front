import axios from "axios";
const api=axios.create({
    baseURL: 'http://8.130.77.118/back/', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

//请求拦截器
api.interceptors.request.use(
    config=>{
        return config;
    }
);

// 响应拦截器
api.interceptors.response.use(

    response => {
        return response.data;
    }
);

export default api;
