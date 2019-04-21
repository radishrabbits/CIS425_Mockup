var mysql = require('mysql');

var con = mysql.createConnection({
    host: "sql.wpc-is.online", 
    user: "teama03", 
    password: "teama039832", 
    database: "db_teama03"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Services", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});