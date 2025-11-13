// importing express to run server
import express from "express"
import mongoose from "mongoose";

// saving express functionalities in a variable
const api=express();

//choosing a port to give it main path 
const port = 8080;

// redirecting to home/main page
api.get("/",(req,res)=>{
    res.send("express server")
})

// coonecting mongodb 
mongoose.connect("mongodb://localhost:")
.then(()=>{
    console.log("mongodb connected successfully")
}).catch((err)=>console.log("mongodb not connected",err))


api.listen(port,()=>{
    console.log(`server listen at http://localhost:${port}`)
})

