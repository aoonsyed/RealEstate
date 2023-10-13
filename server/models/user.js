import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    phone: {
        type: String,
    },
    profession: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
})


const User = mongoose.model('user', userSchema)


export default User