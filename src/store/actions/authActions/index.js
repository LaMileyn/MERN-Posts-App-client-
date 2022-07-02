import {createAsyncThunk} from "@reduxjs/toolkit";
import {PostsApi} from "../../../api";

export const fetchAllPosts = createAsyncThunk(
    "posts/fetchAll",
    async () => {
        const response = await PostsApi.getPosts()
        console.log(response)
    }
)