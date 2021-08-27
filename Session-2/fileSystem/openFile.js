const fs=require('fs');
fs.open('test.txt','r+',(err,fd)=>{
    
    if(err){
        console.log(err);
    }
    else{
    console.log("file opened Successfuly")
    console.log(fs.readFileSync('data.txt').toString());
    fs.close(fd,(err)=>{
        if(err){
            console.log("error while closing file")
        }
        else{
            console.log("file closed")
        }
    })
}
})

