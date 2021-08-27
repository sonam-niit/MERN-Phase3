'use strict'

const fs=require('fs');

let employee={
    name:"sonam soni",
    empCode:1001,
    gender:"female"
};

let data=JSON.stringify(employee);
fs.writeFileSync('emp.json',data);