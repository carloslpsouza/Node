const express = require("express");

const app = express();

app.get("/", function(req, res){
	res.sendFile(__dirname+"/src/index.html");
});

app.get("/contato", function(req, res){
	res.end("Pagins de contato");
});

console.log("Server run!")
app.listen(8080);