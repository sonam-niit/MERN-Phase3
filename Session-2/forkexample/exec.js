const { exec } = require('child_process');
  
exec('dir | find /c /v ""', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: No. of directories = ${stdout}`);
  if (stderr!= "")
  console.error(`stderr: ${stderr}`);
});