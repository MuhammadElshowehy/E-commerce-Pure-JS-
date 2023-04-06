let links = document.querySelector("#links");
let user = document.querySelector("#user");
let username = document.querySelector("#username");
let logOut = document.querySelector("#logout");

if (localStorage.getItem("username")) {
  links.remove();
  user.style.display = "flex";
  username.innerHTML = localStorage.getItem("username");
}

logOut.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "/signUp.html";
  }, 2000);
})