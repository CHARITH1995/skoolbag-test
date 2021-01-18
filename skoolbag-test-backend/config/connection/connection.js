var mysql = require("mysql");
require("dotenv").config();

var con = mysql.createConnection({
  //   host: "us-cdbr-east-03.cleardb.com",
  //   user: "b3389772773d57",
  //   password: "3158bc1d",
  //   database: "heroku_fed593341f6a8d5"
  host: "sql12.freemysqlhosting.net",
  user: "sql12387709",
  password: "qjgdYYAYNE",
  database: "sql12387709",
});
con.connect(function (err) {
  if (!err) {
    console.log("Database Connection Created");
  } else {
    console.log("Connetion error occured" + err);
  }
});

module.exports = con;
