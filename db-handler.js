let sqlStmt;

sqlStmt = "SELECT * FROM Services";

MySql.Execute(
  "sql.wpc-is.online",
  "teama03",
  "teama039832",
  "db_teama03",
  sqlStmt,
  function(data){
    // Callback function
    // Reference: https://www.w3schools.com/jsref/met_table_insertrow.asp
    // Get the table to list the services
    var table = document.getElementById("services-table");

    var dataAsJSON = JSON.stringify(data);
    console.log(dataAsJSON);
    // Add an empty <tr> element at the last position of the table
    var row = table.insertRow(-1);

    // Add empty cells for all the info we need to show
    var cellName = row.insertCell(0);
    var cellPrice = row.insertCell(1);
    var cellDesc = row.insertCell(2);
    var cellHrs = row.insertCell(3);

    // Populate the cells
    cellName.innerHTML = "";
    cellPrice.innerHTML = "";
    cellDesc.innerHTML = "";
    cellHrs.innerHTML = "";

    // Set the id of the field
    cellName.id = "namedisp";
    cellPrice.id = "pricedisp";
    cellDesc.id = "descdisp";
    cellHrs.id = "hrsdisp";
    }
);
/*
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "sql.wpc-is.online", 
    user: "teama03", 
    password: "teama039832", 
    database: "db_teama03"
});
console.log("Attempting connection to DB Server...");
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Services", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    finalData = result;
  });
});*/