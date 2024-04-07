import mongoose, {Schema} from 'mongoose'

const subsciptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, //the subscriber of the channel
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, //the Channel
        ref: "User"
    }
}, {timestamps: true})

export const Subsciption = mongoose.model('Subscription', subsciptionSchema)