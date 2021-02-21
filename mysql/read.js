const express = require("express");

const app = express();

//Conexão com banco
const mysql = require("mysql");

const connection = mysql.createConnection({
	host:     '172.17.0.2',
	user:     'root',
	password: '1234',
	database: 'NODEJS'
});

//connection.connect();

connection.connect(function(err){
	if (err) console.error('Erro con BD' + err.stack); return;
});

connection.query("SELECT * FROM USER", function(err, result, fields){
	if (err) throw err;
	console.log(result);
});

connection.end();

app.get("/", function(req, res){
	res.end("Raiz");
});

app.get("/contato", function(req, res){
	res.end("Contato");
});

console.log("Server run!")
app.listen(8080);