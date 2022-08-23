const UserModel = require("../models/user-module");
const UserDto = require("../dtos/user-dto");
const TokenService = require("./token-service");

const bcrypt = require('bcrypt');
const GEN_SALT = 10;

class UserService {
    async registration(email, password, fullName){
        const candidate = await UserModel.findOne({email});

        if (candidate){
            return {message: `User with email ${email} already exist`}
        }

        const hashedPassword = await bcrypt.hash(password, GEN_SALT);

        const user = await UserModel.create({email, password: hashedPassword, fullName});
        const userDto = new UserDto(user);
        const token = TokenService.generateToken({...userDto});

        return {token, user: userDto};
    }

    async login(email, password){
        const candidate = await UserModel.findOne({email});

        if (!candidate){
            return {message: `Incorrect data`}
        }

        const hashedPassword = await bcrypt.compare(password, candidate.password);

        if (!hashedPassword) return  {message: "Wrong password"}

        const userDto = new UserDto(candidate);
        const token = TokenService.generateToken({...userDto});

        return {token, user: userDto};
    }

    async getUser(id){
        const user = await UserModel.findById(id);

        if (!user){
            return {message: "Пользователь не найден"}
        }

        const userDto = new UserDto(user);

        return userDto
    }

    async findAndUpdatePosts(id, newPost){
        // const post = await UserModel.findByIdAndUpdate({_id: id}, {$push: {posts: 1}})
        const post = await UserModel.findByIdAndUpdate({_id: id}, {$push: {posts: newPost}}, { new: true } )
        console.log(post)

        return post
    }

}

module.exports = new UserService();