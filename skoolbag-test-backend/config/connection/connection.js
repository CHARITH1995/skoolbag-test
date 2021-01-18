const mysql = require("mysql");
const config = require('../../config');
require("dotenv").config();

var con = mysql.createConnection({
  host: process.env.DB_HOSTING,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME
});
con.connect(function (err) {
  if (!err) {
    console.log("Database Connection Created");
  } else {
    console.log("Connetion error occured" + err);
  }
});

module.exports = con;
