//define your model schema

import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todo: { type: String,require: true, unique: true}
})

//we r creating collections with name called todos with todoSchema
const todoCollection = mongoose.model("todo", todoSchema)

export default todoCollection;
