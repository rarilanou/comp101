function checkForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill out all fields.");
        return false;
    }
alert("Thanks for contacting."); 
return true;
}
 // "function checkForm()" is a function that checks if the form is filled out correctly. When it runs, it checks through "onsubmit="return checkForm()" in the HTML file.
 // "document.getElementById("ID").value" gets the value of the input box of its corresponding "id."
 // "if (name == "" || email == "" || message == "")" checks if any of the input boxes are empty. If they are, it will alert the user.
 // "alert" shows a pop-up.
 // "return false" stops the form from sending. "return true" allows it through.
 