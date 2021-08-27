const {execFile}=require('child_process');

execFile('node',['exec.js'],(error,stdout,stderr)=>{
    if(error){
        console.log(`exec error: ${error}`);
        return;
    }
    console.log(`no of directories: ${stdout} `);

    if(stderr){
        console.log(`stderr: ${stderr}`);
    }
});

