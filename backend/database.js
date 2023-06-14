const mysql = require("mysql");
const fs = require("fs");

var con = mysql.createConnection({
  host: "34.142.253.192",
  user: "root",
  password: "g:ZJ^CMoc`K1'ZS6",
  database: 'user_data',
  ssl: {
    ca: fs.readFileSync("./certificates/server-ca.pem"),
    key: fs.readFileSync("./certificates/client-key.pem"),
    cert: fs.readFileSync("./certificates/client-cert.pem"),
  },
});

con.connect();

con.query("SELECT * FROM user", function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
