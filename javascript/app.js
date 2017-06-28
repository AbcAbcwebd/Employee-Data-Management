// This function captures what the user typed on the form and saves it to the database.
// It should be a seperate function outside of a click event so that it can be called both for the click event and for a keydown event on 'ENTER'
function captureInput(){
	// These should be set equal to jQuery selectors that capture necesary data.
<<<<<<< HEAD
	var employeeName = $("#employeeAdd").val().trim();
	var role = $("#role").val().trim();
	var startDate = $("#startDate").val().trim();
	var monthlyRate = $("#monthlyRate").val().trim();
=======
	var employeeName = $('#employeeAdd').val();
	var role = $('#role').val();
	var startDate = $('#startDate').val();
	var monthlyRate = $('#monthlyRate').val();
>>>>>>> 9423a0530057cbd8dd6c7c4def0db7e1c712e433

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