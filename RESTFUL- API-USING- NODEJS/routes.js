const express = require('express');
const router = express.Router();
const mysql = require("mysql");
const bcrypt = require('bcrypt');
const config = require('./config');

// connect to mysql
var pool = mysql.createPool(config.mysql);

// all the routes
router.get("/", function(req, res) {
    res.json({ "Message": "Hello World !" });
});

router.post("/users", function(req, res) {
    var query = "INSERT INTO ??(??,??) VALUES (?,?)";
    var table = ["user_login", "user_email", "user_password", req.body.email, bcrypt.hashSync(req.body.password, 10)];
    query = mysql.format(query, table);
    pool.query(query, (err, rows) => {
        if (err) {
            return res.json({ "Error": true, "Message": "Error executing MySQL query" });
        }
        res.json({ "Error": false, "Message": "User Added !" });
    });
});

// rest of the routes in next section

module.exports = router;