const Sequelize = require('sequelize');
const sequelize = new Sequelize('siscad', 'root', 'rhkg3', {
	host: "localhost",
	dialect: 'mysql'
})

try{
	sequelize.authenticate();
	console.log("con ok");
}catch(error){
	console.error("Não pode conectar", error);
}

sequelize.close()