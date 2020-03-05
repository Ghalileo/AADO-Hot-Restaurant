

const express = require("express");
const path = require("path");
const fs = require("fs");

const reservations = [];
const waitList = [];

app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserveAdd.html"));
});

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

app.post("/api/reservations", function(req, res) {
    var newReservation = req.body;

    // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    // console.log(newReservation);

    if (reservations.length > 5){
        waitList.push(newReservation);
    }
    else {
        reservations.push(newReservation);
    }
    res.json(newReservation);
});

app.get("/api/waitlist", function (req, res){
    return res.json(waitList);
})
// app.post("/api/waitlist", function (req, res){
//     let newWaitlist = req.body;

//     newWaitlist.routeName = newWaitlist.name.replace(/\s+/g, "").toLowerCase();
//     console.log(newWaitlist);
//     waitList.push(newWaitlist);
//     res.json(newWaitlist);
// })
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


// .then(function(response){
   
//     
// })



function writeNames(){
    fs.writeFile("waitlist.html", render(reservations), function (err){
    if (err) throw error 
})}



function adwaitlist (reservations){
    if (reservations.length > 5 ) {
        writeNames()
    }

}



// app.get("/api/waitlist", function(req, res){
//     const list = req.params;

//  for (var i = 0; i < 5; i ++) {
//      if (chosen === table[i].routeName) {
//          return res.json(table[i]);
//      }
//  }})
