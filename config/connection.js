var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "w1h4cr5sb73o944p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "u8lmbhx0ugdjinqu",
  password: "	odst3txynxftwt9z",
  database: "nuln45nigecdyz6y"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
