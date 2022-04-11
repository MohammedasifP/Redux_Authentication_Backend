const express=require('express');
const mongoose=require("mongoose");
const app=express();
      app.use(express.json())
const connect=()=>{
    mongoose.connect("mongodb+srv://asif:asif_456@cluster0.ep2by.mongodb.net/outh?retryWrites=true&w=majority");
}

const {register,login}=require('./controllers/auth.controller');
const postController = require("./controllers/post.controller");

  
app.post("/register",register)
app.post("/login",login);
app.use("/post", postController);

app.listen("7965",async()=>{
    await connect();
    console.log("linstening at port 7865");
})
