import mongoose from "mongoose";
//Mongoose Schema 
const todoSchema = mongoose.Schema({title:{type:String,required:true},desc:{type:String,required:true}},{timestamps:true});

//Mongoose Model
const todo = mongoose.model("todo",todoSchema);

export default todo;