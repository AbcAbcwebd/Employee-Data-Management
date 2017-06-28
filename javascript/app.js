// This function captures what the user typed on the form and saves it to the database.
// It should be a seperate function outside of a click event so that it can be called both for the click event and for a keydown event on 'ENTER'
var database = firebase.database();

function captureInput(){
	// These should be set equal to jQuery selectors that capture necesary data.
	var employeeName = $("#employeeAdd").val().trim();
	var role = $("#role").val().trim();
	var startDate = $("#startDate").val().trim();
	var monthlyRate = $("#monthlyRate").val().trim();

	database.push({
		employeeName: employeeName,
		role: role,
		startDate: startDate,
		monthlyRate: startDate,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});

	
	
};

$('document').ready(function(){
	/* This doesn't work yet. Click area needs to be changed to a form identifyer, but the end thing will look something like this. 
	$('CLICK AREA').keyup(function(event){
    	if(event.keyCode == 13){
    		console.log("Enter pressed");
        };
    };
    */
});