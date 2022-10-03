const Sequelize = require('sequelize');
const sql = new Sequelize('db', 'user', '123', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sql;
var conection = sql.authenticate();

conection.then(function() {
    console.log('Banco de Dados conectado com sucesso!')
});

conection.catch(function(err) {
    console.log('Banco de Dados não foi conectado com sucesso!')
});

