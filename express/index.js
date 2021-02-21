const express = require("express");

const app = express();

app.get("/", function(req, res){
	res.end("gerenciador financeiro");
});

app.get("/contato", function(req, res){
	res.end("Pagins de contato");
});

console.log("Server run!")
app.listen(8080);