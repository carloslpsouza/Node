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

connection.query("DELETE FROM USER WHERE ID='3'", function(err, result){
	if (!err){
		console.log("Deletado com sucesso!");
	}else{
		console.log("Erro ao deletar usuario!");
	}
});

connection.end();