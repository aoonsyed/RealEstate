import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
    servicename: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
})


const serviceMessage = mongoose.model('serviceMessage', serviceSchema)


export default serviceMessage