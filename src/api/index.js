import axios from "axios";


const instance = axios.create({
    baseURL : "http://localhost:5000",
    params : {}
})
export class PostsApi{
    static async getPosts(){
        return instance.get("/posts")
    }
}