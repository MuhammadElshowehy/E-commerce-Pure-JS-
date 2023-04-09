let navLinks = document.querySelector("#links");
let navUser = document.querySelector("#user");
let navUsername = document.querySelector("#username");
let logOut = document.querySelector("#logout");

let EZShopUser = localStorage.getItem("EZShopUser");
EZShopUser = JSON.parse(EZShopUser);
if (EZShopUser.logged) {
  navLinks.remove();
  navUser.style.display = "flex";
  navUsername.innerHTML = EZShopUser.userName;
}

logOut.addEventListener("click", function () {
  EZShopUser.logged = false;
  window.localStorage.setItem("EZShopUser", JSON.stringify(EZShopUser));
  setTimeout(() => {
    window.location = "/signIn.html";
  }, 2000);
});