let data;
function fetchData(){
    setTimeout(()=>{
        data={sId:1001,sName:"Sonam"};
        displayData();
    },
    2000)
}

function displayData(){
    console.log(data);
    console.log("End");
}

console.log("starts");
fetchData();
