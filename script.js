
const form = document.getElementById("logInForm")
const email =document.getElementById("email")
const password = document.getElementById("password")
const errorElement = document.getElementById("error")



form.addEventListener('submit', (e) => {

    e.preventDefault();

    validateInputes();

});

const setError = (element, message) =>{
    const inpuControl = element.parentElement;
    const errorDisplay = inpuControl.querySelector(".error");
    errorDisplay.innerText= message;
}


const validateInputes = () =>{
    const userEmail = email.value.trim();
    const userPassword = password.value.trim();

    if(userEmail ===""){
    setError(email, "Username is required");
    }else{
    setSuccess(email);
    }

    if(userPassword ===""){
    setError(password, "Password is required");
    }else{
    setSuccess(password);
    }

};