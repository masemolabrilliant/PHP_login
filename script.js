const email =document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("logInForm")
const errorElement = document.getElementById("error")



form.addEventListener('submit', (e) => ){
    let messages = []

if(email.value ==='' || email.value == null){
    messages.push('Name is required')
}

if(message.length >0){

    e.preventDefault()
    errorElement.innerHTML = messages.join (", ")
}

}