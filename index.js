document.getElementById("form-validate").addEventListener("submit", function (event) { 

    event.preventDefault(); // Prevent form submission & avoid rerendering the page

    let name = document.getElementById("name").value.trim(); // trim() method removes whitespace from both ends of a string
    let userName = document.getElementById("username").value.trim(); 
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();

    let nameError = document.getElementById("name-error");
    let userNameError = document.getElementById("username-error");
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");
    let confirmPasswordError = document.getElementById("confirm-password-error");

    let isFormValid = true; // flag variable to track overall form validity

    let namePattern = /^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/; // pattern to allow only alphabets and space between first, middle, and last name
    let userNamePattern = /^[a-zA-Z]+@[0-9]+$/; // pattern to validate username with @ and numbers
    let emailPattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/; // Pattern to validate email format (\ . is used to escape the dot character)

    if (name === "") {
        nameError.innerText = "Name is required";
        isFormValid = false;
    }
    else if (!namePattern.test(name)) {
        nameError.innerText = "Enter your full name with last name";
        isFormValid = false;
    }
    else if(namePattern.test(name)){
        nameError.innerText = "";
        isFormValid = true;
    }

    if (userName === "") {
        userNameError.innerText = "Username is required";
        isFormValid = false;
    }
    else if (!userNamePattern.test(userName)) // test() method tests for a match in a string
    {
        userNameError.innerText = "Enter a validate username like abc@123";
        isFormValid = false;
    }
    else if(userNamePattern.test(userName)){
        userNameError.innerText = "";
        isFormValid = true;
    }

    if (email === "") {
        emailError.innerText = "Email is required";
        isFormValid = false;
    }
    else if (!emailPattern.test(email)) {
        emailError.innerText = "Enter a valid email";
        isFormValid = false;
    }
    else if(emailPattern.test(email)){
        emailError.innerText = "";
        isFormValid = true;
    }

    if (password === "") {
        passwordError.innerText = "Password is required";
        isFormValid = false;
    } 
    else if (password.length <3 || password.length >10){
        passwordError.innerText = "Password length must be between 3 and 10 characters";
        isFormValid = false;
    }
    else if(password.length >3 || password.length <10){
        passwordError.innerText = "";
        isFormValid = true;
    }

    if (confirmPassword === "") {
        confirmPasswordError.innerText = "Confirm Password is required";
        isFormValid = false;
    } 
    else if (password !== confirmPassword) {
        confirmPasswordError.innerText = "Passwords not match";
        isFormValid = false;
    }
    else if (password === confirmPassword){
        confirmPasswordError.innerText = "";
        isFormValid = true;
    }

    if(isFormValid){
        alert(`Hi ${name}, Welcome!!! Your account has been created successfully!`);  
    }

}
);
