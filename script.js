function matchPassword() {
    let pw1 = document.getElementById("password");
    let pw2 = document.getElementById("confirm_password");
    let errorMessage = document.querySelector(".error_message");
    if (pw1.value == pw2.value) {
        if (pw1.value == "" || pw2.value == "") {
            errorMessage.textContent = "*Passwords do not match";
            pw1.classList.add("error");
            pw2.classList.add("error");
        }
        else {
            errorMessage.textContent = "";
            pw1.classList.remove("error");
            pw2.classList.remove("error");
        }}
    else {
        errorMessage.textContent = "*Passwords do not match";
        pw1.classList.add("error");
        pw2.classList.add("error");
    }
    }

let pwInput = document.querySelector("#password");
let confirmPwInput = document.querySelector("#confirm_password");

window.addEventListener("load", matchPassword);

pwInput.addEventListener("focus", matchPassword);
pwInput.addEventListener("blur", matchPassword);

confirmPwInput.addEventListener("load", matchPassword);
confirmPwInput.addEventListener("focus", matchPassword);
confirmPwInput.addEventListener("blur", matchPassword);