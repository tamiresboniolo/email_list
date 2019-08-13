/**
*
*author: Tamires D Boniolo
*
*/

/*
*JQuery selector object that get three input values 
*the first and the second input needs to be the same if not 
*the user will receive an alert.
*All fields are required, teh user will receive an alert if dont write anything.
*If all the input are true the botton submit the form will work.
*And the botton clean entries can be use anytime to clean all the form
or you can double click on the field that you want to delete.
*/


$(document).ready(function() {
	$("#join_list").click(
		function() {
			var emailAddress1 = $("#email_address1").val();
			var emailAddress2 = $("#email_address2").val();
			var isValid = true;
			
			// validate the first email address
			if (emailAddress1 == "") { 
				$("#email_address1").next().text("This field is required.");
				isValid = false;
			} else {
				$("#email_address1").next().text("");
			} 
			
			// validate the second email address
			if (emailAddress2 == "") { 
				$("#email_address2_error").text("This field is required.");
				isValid = false; 
			} else if (emailAddress1 !== emailAddress2) { 
				$("#email_address2").next().text("This entry must equal first entry.");
				isValid = false;
			} else {
				$("#email_address2").next().text("");
			}
			
			// validate the first name entry  
			if ($("#first_name").val() == "") {
				$("#first_name").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#first_name").next().text("");
			}
			
			// submit the form if all entries are valid
			if (isValid) {
				$("#email_form").submit(); 
			}
		} // end function
	);	// end click
	$("#email_address1").focus();
	
	
	//"Clear Entries" button that clears all of the text boxes. 
	 $("#clear_entries").click(function(){
		$("input:text").val("").next().text("*");;
		$("#email_address1").focus();
	});
  
	  //double-click event of any text box. 
	  $("#email_address1").on("dblclick", function() {
			$("#email_address1").val("");
			$("#email_address1").next().text("*");
	});
		$("#email_address2").on("dblclick", function() {
			$("#email_address2").val("");
			$("#email_address2").next().text("*");
	});
		$("#first_name").on("dblclick", function() {
			$("#first_name").val("");
			$("#first_name").next().text("*");
	});	  
  
}); // end ready


/**
Validation logic testing:

1. I left all the fields empty and clicked "Join our List". Expected: All fields should display "This field is required". Result confirmed.

2. I left all the fields empty and clicked "Clear Entries". Expected: Focus on the first text box and keep the asterisk. Result confirmed.

3. I left the first and the second fields empty and clicked "Join our List". Expected: Both fields should display "This field is required". Result confirmed.

4. I left the second and the third fields empty and clicked "Join our List". Expected: Both fields should display "This field is required". Result confirmed.

5. I entered different email address on the second box and vice versa, and clicked "Join our List". Expected: show the message on the second text box" This entry must equal first entry". Result confirmed.

6. I entered just numbers (integers and floats) on all the fields and each of them separate, clicked "Join our List". And it worked and showed the message "Thanks for joining our email list!". Result confirmed.

7. I entered just a space on all the fields and clicked "Join our List". It worked normal, and showed the screen with the message "Thanks for joining our email list!".
*/
