//const express = require("express");
//const app = express;
//const handlebars = require("express-handlebars");

//app.listen(8050);

console.log("Gerenciador");

var client = "carlos";

var value = 100;
var desc = 30;

var desconto = require("./Modulos/calDesconto");

var resposta = desconto(value, desc);
console.log(resposta);
