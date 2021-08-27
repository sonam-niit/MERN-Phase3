const express=require("express");
const mongoose=require("mongoose");//for DB

const router=express.Router();

const PeopleModel = mongoose.model("People");

router.get("/add", (req, res)=>{
    res.render("add");
});

router.post("/add", (req, res)=>{
    var people = new PeopleModel();
    people.fname = req.body.fname;
    people.salary = req.body.salary;
    people.mno = req.body.mno;
    people.save((err, doc)=>{
        if(!err){
            res.redirect("/people/list");
        }else {
            res.send("Error Occured");
        }
    });
    //res.render("add");
});

router.get("/list", (req, res)=>{
    //Getting
    PeopleModel.find((err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("list", {data: docs});
        }
    })
});

module.exports = router;
