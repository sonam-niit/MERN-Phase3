'use strict'
const fs=require('fs');

let data=fs.readFile('user.json',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        let user=JSON.parse(data)
        console.log(user)
    }
});

console.log("after function call")