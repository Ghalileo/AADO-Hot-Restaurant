

const express = require("express");
const path = require("path");

const reservations = [];

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

    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


