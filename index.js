import express from "express";

const app = express();
 
app.set("view-engine","ejs");


app.listen(8000,()=>console.log("server is running in port 8000"));