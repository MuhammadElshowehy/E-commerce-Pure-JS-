let userName = document.getElementById("username");
let password = document.getElementById("password");
let signIn = document.getElementById("signIn");
let alert = document.getElementById("alert");

let EZShopUser = localStorage.getItem("EZShopUser");
EZShopUser = JSON.parse(EZShopUser);

if (EZShopUser) {
  let EZShopUserName = EZShopUser.userName;
  let EZShopPassword = EZShopUser.password;
  // change logged from false to true:
  function changeLoggedState() {
    EZShopUser.logged = true;
    window.localStorage.setItem("EZShopUser", JSON.stringify(EZShopUser));
  }
  signIn.addEventListener("click", function (e) {
    e.preventDefault();
    checkEmptyOrNot();
    // check inputs
    if (
      userName.value.trim() === EZShopUserName &&
      password.value.trim() === EZShopPassword
    ) {
      changeLoggedState();
      setTimeout(() => {
        window.location = "index.html";
      }, 2000);
    }
  });
}

function checkEmptyOrNot() {
  if (userName.value == "" || password.value == "") {
    alert.style.visibility = "visible";
    setTimeout(() => {
      alert.style.visibility = "hidden";
    }, 3000);
  }
}
