import { Schema, model } from "mongoose";

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

export const userModel = model('newUsers',userSchema)