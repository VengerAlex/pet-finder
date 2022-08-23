const Router = require("express");
const PostsController = require("../controllets/posts-controller");
const checkAuth = require("../middleware/checkAuth");

const postRouter = new Router();

postRouter.get("/", PostsController.getAllPosts);
postRouter.post("/", checkAuth, PostsController.createPost);
postRouter.get("/find", PostsController.findAllPosts);
postRouter.get("/:id", PostsController.getOnePost);
postRouter.delete("/:id",  PostsController.deletePost);


module.exports = postRouter;