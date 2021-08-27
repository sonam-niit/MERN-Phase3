const fs = require('fs');

fs.appendFile("data.txt",'Good Morning.....!!!',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("data saved");
    }
})

//appendFileSync

fs.appendFileSync("data.txt","Have A good Day..!!!")