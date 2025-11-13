// importing express to run server
import express from "express"

// saving express functionalities in a variable
const api=express();

//choosing a port to give it main path 
const port = 8080;

// redirecting to home/main page
api.get("/",(req,res)=>{
    res.send("express server")
})

api.listen(port,()=>{
    console.log(`server listen at http://localhost:${port}`)
})

