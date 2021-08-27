const express=require('express');
const bodyParser = require('body-parser').json();
const productController=require("./productController");

const server=express();

server.get("",(req,res)=>{
    res.end("REST Example using Express");
})
server.use(bodyParser);
server.use("/api/product",productController)

server.listen(3000);

console.log("server started")