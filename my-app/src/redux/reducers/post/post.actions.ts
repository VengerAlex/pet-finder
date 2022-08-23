import {createAsyncThunk} from "@reduxjs/toolkit";
import PostService from "../../../services/post/postService";
import {IPost} from "./post.interface";

interface IParams {
    isTrending: boolean
    isNew: boolean
}

interface IDeletePost {
    id: string | undefined
}

export const createPost = createAsyncThunk<IPost, IPost, {rejectValue: string}>(
    "post/create-new",
    async (params, thunkAPI) => {
        try {
            const response = await PostService.createPost(params);

            console.log("data", response)
            return response
        } catch (error){
            console.log(error)
            return thunkAPI.rejectWithValue("fdsf")
        }
    }
)

export const getPosts = createAsyncThunk<IPost[], IParams, {rejectValue: string}>(
    "post/getAll",
    async ({isTrending, isNew}, {rejectWithValue}) => {
        try {
            const response = await PostService.getPosts(isTrending, isNew);

            return response
        } catch (error){
            console.log(error)
            return rejectWithValue("Something went wrong")
        }
    }
)



export const deletePost = createAsyncThunk<IPost[], IDeletePost, {rejectValue: string}>(
    "post/delete",
    async ({id}, {rejectWithValue}) => {
        try {
            console.log(id, "IDD")
            const response = await PostService.deletePost(id);

            return response
        } catch (error){
            console.log(error)
            return rejectWithValue("Something went wrong")
        }
    }
)
