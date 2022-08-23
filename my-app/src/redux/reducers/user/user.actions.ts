import {createAsyncThunk} from "@reduxjs/toolkit";
import {IAuthResponse} from "./user.interface";
import AuthService from "../../../services/auth/auth.service";

interface IRegisterProps {
    email: string
    password: string
    fullName: string
}

interface ILoginProps {
    email: string
    password: string
}

export const register = createAsyncThunk<IAuthResponse, IRegisterProps>(
    "auth/register",
    async ({email, password, fullName}, thunkAPI) => {
        try {
            const response = await AuthService.register(email, password, fullName);

            return response.data
        } catch (error){
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const login = createAsyncThunk<IAuthResponse, ILoginProps>(
    "auth/login",
    async ({email, password}, thunkAPI) => {
        try {
            const response = await AuthService.login(email, password);

            return response.data
        } catch (error){
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)


export const check = createAsyncThunk<IAuthResponse, undefined, {rejectValue: string}>(
    "auth/check",
    async (_, thunkAPI) => {
        try {
            const response = await AuthService.checkAuth();

            console.log(response.data)
            return response.data
        } catch (error){
            console.log(error)
            return thunkAPI.rejectWithValue("You are not authorized")
        }
    }
)