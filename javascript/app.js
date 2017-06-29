// Variables. They are global because index.html needs to access them. 
var employeeName;
var role;
var startDate;
var monthlyRate;

// This function captures what the user typed on the form and saves it to the database.
// It should be a seperate function outside of a click event so that it can be called both for the click event and for a keydown event on 'ENTER'
// var database = firebase.database();

function captureInput(){
	// These should be set equal to jQuery selectors that capture necesary data.
	employeeName = $("#employeeAdd").val().trim();
	role = $("#role").val().trim();
	startDate = $("#startDate").val().trim();
	monthlyRate = $("#monthlyRate").val().trim();
};

	// This probably wont' work here because currently we're linking to DB from HTML page.
	// If someone wants to move it all over to the JS file, feel free!
	// (Just don't break anything...)
	/* 
	database.push({
		employeeName: employeeName,
		role: role,
		startDate: startDate,
		monthlyRate: startDate,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});
	*/

//$('document').ready(function(){
	/* This doesn't work yet. Click area needs to be changed to a form identifyer, but the end thing will look something like this. 
	$('CLICK AREA').keyup(function(event){
    	if(event.keyCode == 13){
    		console.log("Enter pressed");
        };
    };
    */
//});
