import mongoose from "mongoose";

const packageSchema = mongoose.Schema({
    packagename: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    servicesArr: [
        {
            service_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'serviceMessage',
            },
            service_qty: {
                type: Number,
                required: true,
            }
        }
    ],
})


const packageMessage = mongoose.model('packageMessage', packageSchema)


export default packageMessage