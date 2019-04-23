function dbConnect(){
  // Reference: https://www.w3schools.com/xml/ajax_intro.asp
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
		// Connect to database
		populateTable(this);
	}
  }
  xhttp.open("POST","db-handler.js",true);
  xhttp.send();
}

function populateTable(data){
	//console.log(eval(data.response));
  // Reference: https://www.w3schools.com/jsref/met_table_insertrow.asp
  // Get the table to list the services
  var table = document.getElementById("services-table");

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