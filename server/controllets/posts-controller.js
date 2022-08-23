const PostsService = require("../service/posts-service");
const UserService = require("../service/user-service");
const path = require("path");
const PostModel = require("../models/post-module");

class PostsController {
    async getAllPosts(req, res) {
        try {
            const {isTrending, isNew} = req.query;
            console.log(isTrending, isNew)

            const response = await PostsService.getAllPost(isTrending, isNew);

            return res.json(response)
        } catch (error) {
            res.status(500).json({
                message: "Не удалось зарегистрироваться",
            });
        }
    }

    async createPost(req, res) {
        try {
            const {title, text, breed, size, gender} = req.body;

            const user = await UserService.getUser(req.userId);


            if (false){
                let fileName = Date.now().toString() + req.files.image.name;

                req.files.image.moveTo(path.join(__dirname, "..", "uploads", fileName));

                const newPost = {
                    username: req.username,
                    title,
                    breed,
                    gender,
                    size,
                    text,
                    imgUrl: fileName,
                    author: req.userId,
                }

                const response = await PostsService.createPost(newPost);
                const currUser = await UserService.findAndUpdatePosts(req.userId, newPost);

                return res.json(response)
            }

            const newPostWithoutImage = new PostModel({
                username: user.fullName,
                title,
                breed,
                gender,
                imgUrl: "",
                size,
                text,
                author: req.userId,
            })

            // const response = await PostsService.createPost(newPostWithoutImage);

            await newPostWithoutImage.save()


            await UserService.findAndUpdatePosts(req.userId, newPostWithoutImage);

            return res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                message: "Не удалось создать s",
            });
        }
    }

    async getOnePost(req, res) {
        try {
            const id = req.params.id;

            const response = await PostsService.getOneAndUpdate(id);

            return res.json(response)
        } catch (error) {
            res.status(500).json({
                message: "Не удалось зарегистрироваться",
            });
        }
    }


    async findAllPosts(req, res) {
        try {
            const {title} = req.query;

            const response = await PostsService.getAllMatches(title);

            return res.json(response)
        } catch (error) {
            res.status(500).json({
                message: "Не удалось зарегистрироваться",
            });
        }
    }

    async deletePost(req, res) {
        try {
            const id = req.params.id;

            console.log(id, "HHEKk")

            const response = await PostsService.deletePost(id);

            return res.json(response)
        } catch (error) {
            res.status(500).json({
                message: "Не удалось зарегистрироваться",
            });
        }
    }
}

module.exports = new PostsController();