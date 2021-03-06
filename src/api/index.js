import axios from "axios";

export const baseURL = "http://localhost:5000"
const instance = axios.create({
    baseURL,
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
    static async updatePost(id,fields){
        return await instance.patch(`/posts/${id}`,fields)
    }
    static async addPost(data){
        return await instance.post(`/posts`,data)
    }
    static async deletePost(id){
        return await instance.delete(`/posts/${id}`)
    }
}
export class AuthApi{
    static async login(data){
        return await instance.post(`/auth/login`, data)
    }
    static async register(data){
        return await instance.post(`/auth/register`, data)
    }
    static async authMe(){
        return await instance.get("/auth/me")
    }
}
export class UploadApi{
    static async getImage(data){
        return await instance.post("/upload",data)
    }
}
