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

    var dataAsJSON = data["Result"];
    console.log(dataAsJSON[0]);

    // Loop through the returned data and add it to the table
	var i;
    for(i = 0; i < dataAsJSON.length; i++){
		//console.log(dataAsJSON[0]);
		// Add an empty <tr> element at the last position of the table
		var row = table.insertRow(-1);
		row.id = "row" + dataAsJSON[i]["ServiceID"];

		// Add empty cells for all the info we need to show
		var cellName = row.insertCell(0);
		var cellPrice = row.insertCell(1);
		var cellDesc = row.insertCell(2);
		var cellHrs = row.insertCell(3);
        var cellFees = row.insertCell(4);
        var cellTotal = row.insertCell(5);

		// Populate the cells
		cellName.innerHTML = dataAsJSON[i]["Name"];
		cellPrice.innerHTML = dataAsJSON[i]["Price"];
		cellDesc.innerHTML = dataAsJSON[i]["Desc"];
		cellHrs.innerHTML = dataAsJSON[i]["EstimatedTime"];
        cellFees.innerHTML = dataAsJSON[i]["TaxesAndFees"];
        cellTotal.innerHTML = dataAsJSON[i]["TotalPrice"];

		// Set the id of the field
		cellName.id = "namedisp";
		cellPrice.id = "pricedisp";
		cellDesc.id = "descdisp";
		cellHrs.id = "hrsdisp";
	}
  }
);