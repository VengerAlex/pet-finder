const {Schema, model} = require("mongoose");

const PostSchema = new Schema({
    title: {type: String, required: true},
    username: {type: String, required: true},
    breed: {type: String, required: true},
    gender: {type: String, required: true},
    size: {type: String, required: true},
    text: {type: String, required: true},
    imgUrl: { type: String, default: "", required: false},
    views: {type: Number, default: 0},
    author: {type: Schema.Types.ObjectId, ref: "User"},
    // comments: {type: Schema.Types.ObjectId, ref: "Comments"},
}, {timestamps: true});

module.exports = model('Post', PostSchema);