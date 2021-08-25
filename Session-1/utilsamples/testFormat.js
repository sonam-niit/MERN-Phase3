var util=require('util');

var txt = 'hello %s  welcome to Node JS with NPM %d';

var result=util.format(txt,'sonam',7);

console.log(result);