'use strict'

const fs=require('fs');

let employee={
    name:"sonam soni",
    empCode:1001,
    gender:"female"
};

let data=JSON.stringify(employee,null,2);
fs.writeFile('emp1.json',data,(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("data written successfully")
});

console.log("call after funcion")