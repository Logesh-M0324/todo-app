import todo from "../models/todo.js";
import moment from "moment";

const homeController = async(req,res,next)=>{
    try {
        const todos = await todo.find({}).sort({createdAt:-1});
        res.locals.moment = moment;

        res.render("index",{name:"List todo",todos});
    } catch (error) {
        console.log(error);
    }
}

const addController = (req,res,next)=>{
    try {
        res.render("newTodo",{name:"add_todo"});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const updateController = async(req,res,next)=>{
    try {
        const {id} = req.query;
        const todo1 = await todo.findById(id);
        res.render("updateTodo",{name:"update_todo", todo1});
    } catch (error) {
        res.status(500).json({message:eroor.message})
    }
}

const deleteController = (req,res,next)=>{
    try {
        const {id} = req.query;
        res.render("deleteTodo",{name:"delete_todo", id});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const postController = async(req,res,next)=>{
    try {
        const {title, desc} = req.body;
        const newTodo = new todo({title,desc});
        await newTodo.save();

        res.redirect("/");
    } catch (error) {
        res.status(500).send({error:error.message});
        console.log(error);
    }
}

const updateNewController = async(req,res)=>{
    try {
        const {id} = req.params;
        const {title,desc}=req.body;
        const todo1 = await todo.findById(id);
        if(!todo1){
            return res.status(404).json({message:error.message});
        }

        todo1.title = title;
        todo1.desc = desc;

        await todo1.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
}

const deleteFileController = async(req,res)=>{
    try {
        const {id , confirm} = req.query;
        
        if(confirm == "yes"){
            await todo.findByIdAndDelete(id);
        }
        res.redirect("/");
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export {homeController,addController,updateController,deleteController,postController,updateNewController, deleteFileController};