const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
 
  function read() {
  readline.question('Please enter your daily task(exit to stop)\n', data => {
      if(data !== "exit"){
    fs.appendFile('data.txt',data+'\n','utf-8',err => {
        if(err)
        {
            console.log(err);
        }
    })
    read();
}
else{
    readline.close();
}
  });
  }

function showTask()
{
    fs.readFile('data.txt','utf-8', (err,data) => {
        if(err){
            console.log(err);
        }
        else
        {
            console.log("Here is your daily task list: \n");
            console.log(data);
        }
    })
}
function showTask1()
{
    console.log(fs.readFileSync('data.txt').toString());
}
showTask1();
//read();
//showTask();