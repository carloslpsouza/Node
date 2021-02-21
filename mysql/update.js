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

connection.query("UPDATE USER SET NOME='Emilia', EMAIL='emilia@gmail.com' WHERE ID='2'", function(err, result){
	if (!err){
		console.log("Editado com sucesso!");
	}else{
		console.log("Erro ao editar usuario!");
	}
});

connection.end();