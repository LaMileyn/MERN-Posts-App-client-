import {createSlice} from "@reduxjs/toolkit";
import {fetchUserData} from "../actions/authActions";


const initialState = {
    data : null,
    status : "loading"
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {},
    extraReducers: {
        [fetchUserData.pending]  : ( state ) =>{
            state.status = "loading"
            state.data = null
        },
        [fetchUserData.fulfilled]  : ( state, action ) =>{
            state.status = "loaded"
            state.data = action.payload
        },
        [fetchUserData.rejected]  : ( state ) =>{
            state.status = "error"
            state.data = null

        },
    }
})

export const { } = authSlice.actions
export const authReducer = authSlice.reducer