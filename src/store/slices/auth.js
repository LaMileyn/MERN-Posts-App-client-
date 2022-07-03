import {createSlice} from "@reduxjs/toolkit";
import {fetchAuth} from "../actions/authActions";


const initialState = {
    data : null,
    status : "loading"
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {},
    extraReducers: {
        [fetchAuth.pending]  : ( state ) =>{
            state.status = "loading"
            state.data = null
        },
        [fetchAuth.fulfilled]  : ( state, action ) =>{
            state.status = "loaded"
            state.data = action.payload
        },
        [fetchAuth.rejected]  : ( state ) =>{
            state.status = "error"
            state.data = null

        },
    }
})

export const { } = authSlice.actions
export const authReducer = authSlice.reducer