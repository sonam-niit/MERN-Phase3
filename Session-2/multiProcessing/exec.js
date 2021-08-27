const {exec}=require('child_process');

exec('dir',(error,stdout,stderr)=>{
    if(error){
        console.log(`exec error: ${error}`);
        return;
    }
    console.log(`no of directories: ${stdout} `);

    if(stderr){
        console.log(`stderr: ${stderr}`);
    }
});

