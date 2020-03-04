//our dependencies
var express = require("express");
var path = require("path");

// setting up express app 
var app = express();
var http= Request;
var PORT = process.env.PORT || 8080;

//handling data parsing 
app.use(express.urlencoded({ extended: true}));
app.use(express.json);







//Routes 

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "view.html"));
});

