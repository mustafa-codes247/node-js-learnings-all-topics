// importing express to run server
import express from "express"
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";

// saving express functionalities in a variable
const api=express();

//choosing a port to give it main path 
const port = 8080;

// redirecting to home/main page
// api.get("/",(req,res)=>{
//     res.send("express server")
// })

api.use(express.json())
api.use("/api",router)


// coonecting mongodb 
mongoose.connect("mongodb://localhost:27017/crud")
.then(()=>{
    console.log("mongodb connected successfully")
}).catch((err)=>console.log("mongodb not connected",err))


api.listen(port,()=>{
    console.log(`server listen at http://localhost:${port}`)
})

