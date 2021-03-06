import {createSlice} from "@reduxjs/toolkit";
import {fetchAuth, fetchLogin, fetchRegister} from "../actions/authActions";


const initialState = {
    data : null,
    status : "loading"
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        logout : (state,action) =>{
            state.data = null
        }

    },
    extraReducers: {

        //------------ login
        [fetchLogin.pending]  : ( state ) =>{
            state.status = "loading"
            state.data = null
        },
        [fetchLogin.fulfilled]  : ( state, action ) =>{
            state.status = "loaded"
            state.data = action.payload
        },
        [fetchLogin.rejected]  : ( state ) =>{
            state.status = "error"
            state.data = null

        },
        //------------ login

        //------------ auth
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
        //------------ auth


        //------------ register
        [fetchRegister.pending]  : ( state ) =>{
            state.status = "loading"
            state.data = null
        },
        [fetchRegister.fulfilled]  : ( state, action ) =>{
            state.status = "loaded"
            state.data = action.payload
        },
        [fetchRegister.rejected]  : ( state ) =>{
            state.status = "error"
            state.data = null
        },
        //------------ register

    }
})

export const { logout } = authSlice.actions
export const authReducer = authSlice.reducer