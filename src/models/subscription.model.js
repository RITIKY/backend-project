import mongoose, { Schema, model } from "mongoose";

const subcriptionSchema = new Schema({
    Subscriber: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,
        ref:"user"
    }
},{timestamps: true});

export const Subscription = mongoose.model("Subscription", subcriptionSchema);
