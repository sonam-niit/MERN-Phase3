var cp=require('child_process');

var child = cp.fork(__dirname+'/child.js');

child.on('message',function(m){
    console.log('Parent process ',m);
})

child.send({hello: 'Hi... from Parent'});

child.on('close',(code)=>{
    console.log(`child process finished with ${code}`)
})