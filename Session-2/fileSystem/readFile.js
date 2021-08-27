const fs = require('fs');

fs.readFile("data.txt",'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
        //need to convert in toString()
        //otherwise will show the data in form of buffer
        //use optional value to 'utf-8' to convert directly to toString
    }
})

console.log("Greetings")
// because of Async mode greetings executed first