import {createSlice} from "@reduxjs/toolkit";

import {IUserInitialState} from "./user.interface";
import {check, login, register} from "./user.actions";

const initialState: IUserInitialState = {
    user: null,
    isLoading: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("token");
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.user = payload.user
            })
            .addCase(register.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.user = payload.user
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(check.pending, (state) => {
                state.isLoading = true
            })
            .addCase(check.fulfilled, (state, {payload}) => {
                console.log(payload.user, "USER")
                state.isLoading = false
                state.user = payload.user
            })
            .addCase(check.rejected, (state) => {
                state.isLoading = false
            })
    }
})

export const {logout} = userSlice.actions;
export default userSlice.reducer;