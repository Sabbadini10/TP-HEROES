let express = require('express');
let app = express();
let port = 3030

app.listen(port, () => 
console.log("Levantando un servidor en http://localhost:" + port));

app.get("/", function(req, res) {
    res.send("Hola Mundo")
})

app.get("/salida", function(req, res) {
    res.send("Chau")
})