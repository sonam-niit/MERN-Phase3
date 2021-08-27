var cp = require('child_process');
  
var child = cp.fork(__dirname + '/child.js');
  
child.on('message', function(m) {
  console.log('Parent process received:', m);
});
  
child.send({ TestMessage1: 'from parent process' });
  
child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});