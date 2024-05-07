function validateForm() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let errorName = document.getElementById("errorName");
    let errorPassword = document.getElementById("errorPassword");

    errorName.innerHTML = "";
    errorPassword.innerHTML = "";

    if (name.trim() === ""){
        errorName.innerHTML += "<p>Please enter your name</p>";
    }

    if (password.trim() === ""){
        errorPassword.innerHTML += "<p>Please enter your password</p>";
    }

    if (errorName !== ""){
        return false;
    }
    
    else if(errorPassword !== ""){
        return false;
    }
    
    return true;
};