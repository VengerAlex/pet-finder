import axios from "../../api";

import {API_URL, getPostUrl} from "../../configs/api.config";
import {IPost} from "../../redux/reducers/post/post.interface";

class PostService {
    async createPost(params: IPost){
        const response = await axios.post<IPost>(
            `${API_URL}${getPostUrl("")}`, params
        )

        return response.data
    }

    async getPosts(isTrending: boolean = false, isNew: boolean = false){
        const response = await axios.get<IPost[]>(
            `${API_URL}${getPostUrl("")}`, {params: {isTrending, isNew}}
        )

        return response.data
    }

    async getPost(id: string | undefined){
        const response = await axios.get<IPost>(
            `${API_URL}${getPostUrl(`${id}`)}`
        )

        return response.data
    }

    async findPosts(title: string){
        const response = await axios.get<IPost[]>(
            `${API_URL}${getPostUrl(`find?title=${title}`)}`
        )

        return response.data
    }

    async deletePost(id: string | undefined){
        const response = await axios.delete<IPost[]>(
            `${API_URL}${getPostUrl(`${id}`)}`
        )

        return response.data
    }
}

export default new PostService();