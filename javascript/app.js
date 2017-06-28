// Variables. They are global because index.html needs to access them. 
var employeeName;
var role;
var startDate;
var monthlyRate;

// This function captures what the user typed on the form and saves it to the database.
// It should be a seperate function outside of a click event so that it can be called both for the click event and for a keydown event on 'ENTER'
function captureInput(){
	// These should be set equal to jQuery selectors that capture necesary data.
	employeeName = $('#employeeAdd').val();
	role = $('#role').val();
	startDate = $('#startDate').val();
	monthlyRate = $('#monthlyRate').val();

	// Info needs to be saved to Firebase
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