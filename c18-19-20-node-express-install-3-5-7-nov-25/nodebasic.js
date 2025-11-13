// this is just basic teaching of writing node file without express js 
// we dont have to write it , its just for info

// this is importing, in this case its 'normal js importing'
const http = require ('http');

// its the localhost name , where we usually run the server 
// it can be any number
const PORT = 8080;

// its basic node server creation 
// parameter has 'request' and 'response'
// it gets the request and in return sends response

const api=http.createServer((req,res)=>{
    res.send("node js first api server")
})

// here api listen redirect to the port we have defined
api.listen(PORT,()=>{
    console.log(`http://localhost: ${PORT}`)
})

