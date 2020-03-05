//our dependencies
var express = require("express");
var path = require("path");

// setting up express app 
var app = express();
var http= Request;
var PORT = process.env.PORT || 8080;

//handling data parsing 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());







//Routes 

// app.get("/api/tables", function(req,res){
    // res.sendFile(path.join(__dirname, "view.html"));
// });

app.get("/api/waitlist", function(req, res){
    res.sendFile(path.join(__dirname, "view.html"))
})



app.get("/api/waitlist", function(req, res){
    const list = req.params;

for (var i = 0; i < 5; i ++) {
    if (chosen === table[i].routeName) {
        return res.json(table[i]);
    }
}
return res.json(false);

app.post("/api/tables", function(req,res){

})
});
