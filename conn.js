let mysql = require('mysql')
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3308,
    database: 'support'

});

con.connect(function(err) {
    if (err) throw err;
    console.log("connected!");
});