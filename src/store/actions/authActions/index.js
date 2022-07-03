import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthApi} from "../../../api";


export const fetchLogin = createAsyncThunk(
    "auth/fetchLogin",
    async (params) => {
        const {data} = await AuthApi.login(params)
        return data
    }
)

export const fetchAuth = createAsyncThunk(
    "auth/fetchAuth",
    async () => {
        const {data} = await AuthApi.authMe()
        return data
    }
)