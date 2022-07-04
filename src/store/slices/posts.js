import {createSlice} from "@reduxjs/toolkit";
import {fetchAllPosts, fetchDeletePost} from "../actions/postActions";


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
        // getting all
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
        // getting all

        // deletingOne
        [fetchDeletePost.pending]  : ( state, action ) => {
            console.log('helll')
            state.posts.items = state.posts.items.filter( (element) => element._id !== action.meta.arg)
        }
        // deletingOne
    }
})

export const { } = postsSlice.actions
export const postsReducer = postsSlice.reducer