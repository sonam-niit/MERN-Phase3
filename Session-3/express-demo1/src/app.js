const express=require('express');

const server=express();

server.listen(3000);

server.get("",(req,res)=>{
    res.end("Hello World From Express")
})

console.log("Server started on port 3000")