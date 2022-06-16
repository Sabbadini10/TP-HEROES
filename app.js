let express = require('express');
let app = express();
let port = 3030
let path = require('path')

app.listen(port, () => 
console.log("Levantando un servidor en http://localhost:" + port));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view/index.html"))
})

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view/index.html"))
})

app.get("//berners-lee", function(req, res) {
    res.sendFile(path.join(__dirname, "view//berners-lee.html"))
})

app.get("/babbage", function(req, res) {
    res.sendFile(path.join(__dirname, "view/babbage.html"))
})

app.get("/clarke", function(req, res) {
    res.sendFile(path.join(__dirname, "view/clarke.html"))
})

app.get("/hamilton", function(req, res) {
    res.sendFile(path.join(__dirname, "view/hamilton.html"))
})

app.get("/hopper", function(req, res) {
    res.sendFile(path.join(__dirname, "view/hopper.html"))
})

app.get("/lovelace", function(req, res) {
    res.sendFile(path.join(__dirname, "view/lovelace.html"))
})

app.get("/turing", function(req, res) {
    res.sendFile(path.join(__dirname, "view/turing.html"))
})