const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Simplilearn',{ useNewUrlParser: true }, (error)=>{
    if(!error){
        console.log("Connected Yippee..!!");
    }else{
        console.log("Error connecting to database.");
    }
});

const course = require("./people.model");
