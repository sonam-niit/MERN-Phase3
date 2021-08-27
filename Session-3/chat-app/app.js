const express=require('express')();
const http=require('http').Server(express);
const io=require('socket.io')(http);

io.on('connection',(socket)=>{
    socket.on('send message',(msg)=>{
        io.emit('rcv message',msg)
    })
})
express.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

http.listen(3000,()=>{
    console.log("started");
})