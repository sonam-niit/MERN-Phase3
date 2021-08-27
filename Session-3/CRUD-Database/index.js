const connection = require("./models");
const express = require("express");
const server = express();
const path = require("path");
const expresshandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const PeopleController = require("./controllers/people");
server.use(bodyparser.urlencoded({
    extended:true
}));

server.set('views', path.join(__dirname, "/views/"));

server.engine("hbs", expresshandlebars({
    extname:"hbs",
    defaultLayout:"mainlayout",
    layoutsDir: __dirname + "/views/layouts"
}));

server.set("view engine", "hbs");

server.get("", (req, res)=>{
    res.send("<h1>Hello</h1>");
   // res.render("index",{});
});

server.use("/people", PeopleController);
server.listen('3000');
