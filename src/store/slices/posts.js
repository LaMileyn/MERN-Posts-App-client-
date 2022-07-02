import {createSlice} from "@reduxjs/toolkit";
import {fetchAllPosts} from "../actions/postActions";


const initialState = {
    posts : {
        items : [],
        status : "loading"
    },
    tags : {
        items : [],
        status : "loading"
    }
}

const postsSlice = createSlice({
    name : "posts",
    initialState,
    reducers : {},
    extraReducers: {
        [fetchAllPosts.pending]  : ( state, action ) =>{
            state.posts.status = "loading"
            state.posts.items = []
        },
        [fetchAllPosts.fulfilled]  : ( state, action ) =>{
            state.posts.status = "loaded"
            state.posts.items = action.payload
        },
        [fetchAllPosts.rejected]  : ( state, action ) =>{
            state.posts.status = "error"
            state.posts.items = []

        },
    }
})

export const { } = postsSlice.actions
export const postsReducer = postsSlice.reducer