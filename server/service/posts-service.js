const PostModel = require("../models/post-module");

class PostsService {
    async getAllPost(isTrending, isNew){
        const resIsTrending = JSON.parse(isTrending) ? -1 : +1;
        const resIsNew = JSON.parse(isNew) ? -1 : +1;

        console.log(JSON.parse(isTrending), JSON.parse(isNew))

        let response =
            await PostModel
                .find()
                .sort({createdAt: resIsNew})
                .sort({views: resIsTrending})

        return response
    }

    async createPost(newPost){
        const response = await PostModel.create(newPost);

        return response
    }

    async getOneAndUpdate(id){
        const response = await PostModel.findOneAndUpdate({_id: id}, {$inc: {views: 1}});

        return response
    }

    async getAllMatches(title){
        const regExp = new RegExp( title, "i");

        const response = await PostModel.find({title: {$regex: regExp}})

        return response
    }

    async deletePost(id){
        const response = await PostModel.findOneAndDelete({_id: id})

        return response
    }
}

module.exports = new PostsService();