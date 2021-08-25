function testCustomCall(message,callback){
    console.log("Custom Call Running: "+message);

    if(typeof callback== "function")
    {
        callback();
    }
}

testCustomCall("Testing CallBack Function",function myFunction(){
    console.log("This is simple function passed as an argumanet");
})