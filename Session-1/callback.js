let data;
function fetchData(cb){
    setTimeout(()=>{
        data={sId:1001,sName:"Sonam"};
        cb();
    },
    2000)
}

var cbfunction=function displayData(){
    console.log(data);
    console.log("End");
}

function printHello(){
    console.log("Hello World");
}

console.log("starts");
fetchData(cbfunction);
printHello();