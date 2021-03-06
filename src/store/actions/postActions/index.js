import {createAsyncThunk} from "@reduxjs/toolkit";
import {PostsApi} from "../../../api";

export const fetchAllPosts = createAsyncThunk(
    "posts/fetchAll",
    async () => {
        const {data} = await PostsApi.getPosts()
        return data
    }
)
export const fetchDeletePost = createAsyncThunk(
    "posts/deleteOne",
    async (id) => (
        await PostsApi.deletePost(id)
    )
)