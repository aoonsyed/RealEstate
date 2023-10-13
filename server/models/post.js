import mongoose, { Schema } from "mongoose";

const postSchema = mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
    },
    address: {
        type: String,
    },
    area: {
        type: String,
    },
    price: {
        type: String,
    },
})


const Post = mongoose.model('post', postSchema)


export default Post