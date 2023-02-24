const express=require("express");
const path=require("path");
const hbs=require("hbs");
const app=express();
const port=process.env.PORT||8000;

// public path
const publicPath=path.join(__dirname,"../public");
// console.log(publicPath);
app.use(express.static(publicPath));


// views
app.set("view engine","hbs");
const viewsPath=path.join(__dirname,"../templates/views");
app.set("views",viewsPath);


// routing
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("*",(req,res)=>{
    res.render("404");
})


// listening
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})