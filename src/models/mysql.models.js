var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "a",
  database: "dbproducts"
});

module.exports=con;