import express from "express";
import bodyParser from "body-parser";
import path from "path";
import connectMongodb from "./init/mongodb.js";
import { router } from "./routes/todo.js";
//init app
const app = express();
connectMongodb();
//view engine set
app.set("view engine","ejs");

app.use(express.static(path.join(process.cwd(),"public")));

app.use(bodyParser.urlencoded({extended:true}));
app.use("/",router);

export {app};