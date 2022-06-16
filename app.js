let express = require('express');
let app = express();

app.listen(3030, () => 
console.log("Levantando un servidor con Express"));

app.get("/", function(req, res) {
    res.send("Hola Mundo")
})

app.get("/salida", function(req, res) {
    res.send("Chau")
})