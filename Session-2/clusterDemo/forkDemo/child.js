process.on('message',function(m){
    console.log('child process', m);
})

process.send({message: 'Hi.... from child '})