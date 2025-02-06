// Get references to the form and input elements
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Function to show an error message
function showError(input, message){
    // Get the parent element of the input field
    const formControl = input.parentElement;

    // Add the 'error' class to the parent, which will style the input as erroneous
    formControl.className = "form-control error";

    // Find the <small> tag inside the parent element to display the error message
    const small = formControl.querySelector('small');
    small.innerText = message; // Set the error message
}

// Function to show success (when input is valid)
function showSuccess(input){
    // Get the parent element of the input field
    const formControl = input.parentElement;

    // Add the 'success' class to style the input as valid
    formControl.className = 'form-control success';
}

// Function to check if required fields are filled
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        // Check if the input field is empty
        if(input.value.trim() === ""){
            // If empty, call showError and display the required message
            showError(input, `${getFieldName(input)} is Required`);
        } else { 
            // If not empty, call showSuccess to indicate it's filled correctly
            showSuccess(input);
        }
    });
}

// Function to capitalize the first letter of the field name (based on the field's ID)
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listener for form submission
form.addEventListener('submit', function(e){
    e.preventDefault(); // Prevent the default form submission

    // Call checkRequired to validate all the input fields
    checkRequired([username, email, password, password2]);
});
