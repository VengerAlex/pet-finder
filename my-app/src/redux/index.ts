import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userSlice from "./reducers/user/userSlice";
import postSlice from "./reducers/post/postSlice";


const rootReducer = combineReducers({
    user: userSlice,
    post: postSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;