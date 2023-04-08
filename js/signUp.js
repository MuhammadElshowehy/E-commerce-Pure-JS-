let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signUp = document.getElementById("signup");
let alert = document.getElementById("alert");

signUp.addEventListener("click", function (e) {
  e.preventDefault();
  checkEmptyOrNot();
  signUpValidation();
});

function checkEmptyOrNot() {
  if (userName.value == "" || email.value == "" || password.value == "") {
    alert.style.visibility = "visible";
    setTimeout(() => {
      alert.style.visibility = "hidden";
    }, 3000);
  }
}
function signUpValidation() {
  let userNameRegex = /^[a-zA-Z0-9]{8,24}/;
  let emailRegex = /[a-zA-Z0-9]@[a-z]{1,8}.[a-z]{1,8}/;
  let passwordRegex = /(^[a-zA-z]{1,})(?=(\d{1,})(!|@|#|\$))/;
  /*
    -at least, start with small or capital letter followed by one number 
    followed by one of them !@#$.
    -password at least 8 character
  */

  let userNameValid = userNameRegex.test(userName.value);
  let emailValid = emailRegex.test(email.value);
  let passwordValid = passwordRegex.test(password.value);

  // console.log(userNameValid);
  // console.log(emailValid);
  // console.log(passwordValid);
  if (userNameValid && emailValid && passwordValid) {
    function storeInLocalStorage() {
      localStorage.setItem("username", userName.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("password", password.value);
    }
    storeInLocalStorage();
    setTimeout(() => {
      window.location = "signIn.html";
    }, 2000);
  }
}
