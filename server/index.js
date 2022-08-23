const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./router/authRouter");
const postRouter = require("./router/postsRouter");
const fileupload = require("express-fileupload");
require("dotenv").config();


const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(fileupload());
app.use(express.static("uploads"));
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)

        app.listen(PORT, () => console.log('SEVER STARTED ' + PORT));
    } catch(error){
        console.log('something went wrong');
    }
}

start();