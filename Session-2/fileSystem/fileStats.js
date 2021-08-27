const fs=require('fs');

fs.stat('test.txt',(err,fd)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(fd);
        console.log(fd.isFile())
        console.log(fd.isDirectory())
    }
})