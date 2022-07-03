import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthApi} from "../../../api";


export const fetchUserData = createAsyncThunk(
    "auth/fetchUserData",
    async (params) => {
        const {data} = await AuthApi.getUserData(params)
        return data
    }
)