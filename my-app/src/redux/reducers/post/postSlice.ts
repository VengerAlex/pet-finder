import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPostInterface} from "./post.interface";
import {createPost, getPosts} from "./post.actions";

const initialState: IPostInterface = {
    posts: [],
    isLoading: false,
    isTrending: false,
    isNew: false,
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setIsTrending(state){
          state.isTrending = !state.isTrending
        },
        setIsNew(state){
            state.isNew = !state.isNew
        },
        deleteOne(state, action){
            state.posts.filter(post => post._id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createPost.fulfilled, (state, {payload}) => {
                console.log(payload)
                state.isLoading = false
                state.posts = [...state.posts, payload]
            })
            .addCase(createPost.rejected, (state, {payload}) => {
                state.posts = []
                state.isLoading = false
            })
            .addCase(getPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPosts.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.posts = payload
            })
            .addCase(getPosts.rejected, (state) => {
                state.isLoading = true
            })
}})

export const {setIsTrending, deleteOne, setIsNew} = postSlice.actions;
export default postSlice.reducer;