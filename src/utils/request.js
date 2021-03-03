// axios封装
import axios from "axios";
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router'
let api_base_url = ''
api_base_url = 'https://nicemusic-api.lxhcool.cn/'

// 2.配置
const instance=axios.create({
    baseURL:api_base_url,// 请求地址
    timeout:5000,// 请求超时
})
const router = useRouter()
//post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//请求拦截器
instance.interceptors.request.use(config=>{
    return config;
},error => {
    return Promise.error(error);
})

//响应拦截器
instance.interceptors.response.use( res=> {
    if(res.status === 200){
        return  Promise.resolve(res.data);
    } else if(status === 301){
        message.error('请先登录!')
        router.replace({
            path: '/'
        })
        return
    }
    else{
        return  Promise.reject(res);
    }
},error=>{
    // 对响应错误做点什么
    message.warning('服务器响应错误,请检查您的网络');
    return Promise.reject(error);

})

export default instance;