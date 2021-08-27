'use strict'
const fs=require('fs');

let data=fs.readFileSync('user.json');
let user=JSON.parse(data)
console.log(user)