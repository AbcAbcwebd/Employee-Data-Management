// Variables. They are global because index.html needs to access them. 
var employeeName;
var role;
var startDate;
var monthlyRate;

// This function captures what the user typed on the form and saves it to the database.
// It should be a seperate function outside of a click event so that it can be called both for the click event and for a keydown event on 'ENTER'
function captureInput(){
	// These should be set equal to jQuery selectors that capture necesary data.
	employeeName = $("#employeeAdd").val().trim();
	role = $("#role").val().trim();
	startDate = $("#startDate").val().trim();
	monthlyRate = $("#monthlyRate").val().trim();
};