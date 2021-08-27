const fs = require('fs');

const dirName="testDir";

try {
    if(!fs.existsSync(dirName)){
        fs.mkdirSync(dirName);
    }
    else{
        throw new Error("directory Already Exists")
    }
} 
catch (error) {
    console.log("Error found");
    console.log(error)
}