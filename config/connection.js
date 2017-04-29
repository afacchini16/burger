var mysql = require('mysql');

console.log("connection.js");

var connection = mysql.createConnection({
    port: 8889,
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

connection.connect(function(error) {
    if (error) {
        console.log("error connection to mysql database: " + error.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;