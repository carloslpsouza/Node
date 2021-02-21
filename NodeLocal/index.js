const express = require("express");

const app = express();

app.get("/", function(req, res){
	res.send("Rota index");
});

app.get('/parametros/:nome/:idade', function(req,res){
	res.send("Ola: " + req.params.nome + " " + req.params.idade)
	//res.send(req.params);
});

app.listen(3001);
console.log("server run")