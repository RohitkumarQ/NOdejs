const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host: 'localhost', // MYSQL HOST NAME
    user: 'root', // MYSQL USERNAME
    port: 3308,
    password: '', // MYSQL PASSWORD
    database: 'admin_login' // MYSQL DB NAME
}).promise();
module.exports = dbConnection;