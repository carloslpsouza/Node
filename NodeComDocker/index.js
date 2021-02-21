const express = require("express");

const app = express();

app.get("/", function(req, res){
	res.sendFile(__dirname + "/AP3-SRI-SITE/index.html");
});

app.get("/contato", function(req, res){
	res.send("Contato");
});


app.listen(3000);
console.log("Server run");