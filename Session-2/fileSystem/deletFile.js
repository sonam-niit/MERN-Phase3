const fs = require('fs');

fs.unlink("test.txt",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("file deleted successfully..!!");
        
})

fs.unlinkSync("data.txt");