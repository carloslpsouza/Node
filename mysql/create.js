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

connection.query("INSERT INTO USER (NOME, EMAIL) VALUES ('emilia', 'emilia@gmail.com')", function(err, result){
	if (!err){
		console.log("Cadastrado com sucesso!");
	}else{
		console.log("Erro ao cadastrar no banco!");
	}
});

connection.end();