import axios from "axios";


const instance = axios.create({
    baseURL : "http://localhost:5000",
    params : {}
})
// middleWare

instance.interceptors.request.use( (config) => {
    config.headers.Authorization = window.localStorage.getItem("token")
    return config
})

// middleWare
export class PostsApi{
    static async getPosts(){
        return instance.get("/posts")
    }
    static async getOnePost(id){
        return await instance.get(`/posts/${id}`)
    }
}
export class AuthApi{
    static async login(data){
        return await instance.post(`/auth/login`, data)
    }
    static async authMe(){
        return await instance.get("/auth/me")
    }
}
