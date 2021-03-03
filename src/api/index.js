import $http from "@/utils/request.js";
import qs from "qs";

// 登录
export function loginMusic(phone, password){
    return $http.get(`/login/cellphone?phone=${phone}&password=${password}`,{
        withCredentials: true
    })
}

// 获取用户详情
export function getDetail(data){
    return $http.get(`/user/detail?uid=${data}`)
}

//热搜列表(简略)
export function getHotSearch(data){
    return $http.post('/search/hot',qs.stringify(data))
}

//banner
export function getBanner(data){
    return $http.post('/banner',qs.stringify(data))
}


