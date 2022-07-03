import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthApi} from "../../../api";


export const fetchAuth = createAsyncThunk(
    "auth/fetchAuth",
    async (params) => {
        const {data} = await AuthApi.fetchAuthorization(params)
        return data
    }
)