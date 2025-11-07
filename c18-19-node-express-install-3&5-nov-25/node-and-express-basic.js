import express from express

// we are making server using express
const api= express();
//ports defined
const PORT =5000;

// redirecting to home/main page
api.get("/",(req,res)=>{
    res.send("express server")
})

api.listen(PORT,()=>{
    console.log(`server listen on port ${PORT} `)
})