process.on('message', function(m) {
    console.log('Child process received:', m);
  });
    
  process.send({ TestMessage2: 'from child process' });