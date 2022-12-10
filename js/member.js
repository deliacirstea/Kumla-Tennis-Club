const loginForm = document.getElementById("signup-form");
const loginButton = document.getElementById("signupButton");
const nameControl = document.getElementById("name-field");
const phoneControl = document.getElementById("phone-field");
const mailControl = document.getElementById("email-field");
const pswControl = document.getElementById("password-field");

const signupErrorMsg = document.getElementById("signup-error-msg");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
   
    const newName = nameControl.value;
    const newPhone = phoneControl.value;
    const newMail = mailControl.value;
    const newPsw = pswControl.value;
   

   

   if (newName !== "" && newPhone !== "" && newMail !== "" && newPsw !== "" ) {
       alert("Welcome " + newName + " !");
    }
   
     else {
        signupErrorMsg.style.opacity = "1";
    }

})


