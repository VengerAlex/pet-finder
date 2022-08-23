const mongoose= require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    fullName: {type: String, unique: false, required: true},
    password: {type: String, required: true},
    avatarUrl: {type: String, required: false},
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: "Post"}],
    // favourites: [{type: Schema.Types.ObjectId, ref: "Favourite"}],
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);
