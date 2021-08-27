const cluster= require('cluster');

const http=require('http');
const noOfCPUs= require('os').cpus().length;

console.log(cluster.isMaster);
if(cluster.isMaster){
    masterProcess();
}
else{
    childProcess();
}

function masterProcess(){
    console.log(`Master ${process.pid} is running`);

    for(let i=0;i<noOfCPUs;i++){
        console.log(`Fork process ${i}`);
        cluster.fork();
    }

    process.exit();
}

function childProcess(){
    console.log(`Worker ${process.pid} started`)

    process.exit();
}