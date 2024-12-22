import express from "express";
const router = express.Router();
import { homeController,updateController,addController,deleteController,postController,updateNewController,deleteFileController} from "../controllers/todo.js";

router.get("/",homeController);

router.get("/add-todo",addController);

router.get("/update-todo",updateController);

router.get("/delete-todo",deleteController);

router.post("/add-todo",postController);

router.post("/update-todo/:id",updateNewController);

router.get("/confirm-delete",deleteFileController);

export {router};