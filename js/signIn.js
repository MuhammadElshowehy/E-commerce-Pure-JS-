let userName = document.getElementById("username");
let password = document.getElementById("password");
let signIn = document.getElementById("signIn");
let alert = document.getElementById("alert");

let storedUserName = localStorage.getItem("username");
let storedPassword = localStorage.getItem("password");

signIn.addEventListener("click", function (e) {
  e.preventDefault();
  checkEmptyOrNot();
  if (userName.value.trim() === storedUserName && password.value.trim() === storedPassword) {
    setTimeout(() => {
      window.location = "/index.html";
    }, 2000);
  }
});

function checkEmptyOrNot() {
  if (userName.value == "" || password.value == "") {
    alert.style.visibility = "visible";
    setTimeout(() => {
      alert.style.visibility = "hidden";
    }, 3000);
  }
}