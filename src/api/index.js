import axios from "axios";


const instance = axios.create({
    baseURL : "http://localhost:5000",
    params : {}
})
export class PostsApi{
    static async getPosts(){
        return instance.get("/posts")
    }
    static async getOnePost(id){
        return await instance.get(`/posts/${id}`)
    }
}
export class AuthApi{
    static async fetchAuthorization(data){
        return await instance.post(`/auth/login`, data)
    }
}
