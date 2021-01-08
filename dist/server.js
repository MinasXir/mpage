const express = require("express");
const app = express();

// server your css as static
app.use(express.static(__dirname + '/public'))

console.log("Server Started");

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})
app.get("/about", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})
app.get("/contact", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

// start your server
app.listen(3000, () => console.log('Server started at port 3000 http://localhost:3000'))