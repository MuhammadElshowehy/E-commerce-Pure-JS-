let navLinks = document.querySelector("#links");
let navUser = document.querySelector("#user");
let navUsername = document.querySelector("#username");
let logOut = document.querySelector("#logout");
let productsDom = document.querySelector(".home .products");

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

/* stat show products */
let id = 0;
let productsArr = [
  {
    id: ++id,
    img: "./images/perfume.webp",
    title: "perfume",
    disc: "Lorem ipsum dolor sit amet consectetur",
    price: "20$",
  },
  {
    id: ++id,
    img: "./images/camera.jpg",
    title: "camera",
    disc: "Lorem ipsum dolor sit amet consectetur",
    price: "20$",
  },
  {
    id: ++id,
    img: "./images/watch.jpg",
    title: "watch",
    disc: "Lorem ipsum dolor sit amet consectetur",
    price: "20$",
  },
  {
    id: ++id,
    img: "./images/cocacola.jpg",
    title: "cocacola",
    disc: "Lorem ipsum dolor sit amet consectetur",
    price: "20$",
  },
  {
    id: ++id,
    img: "./images/lens.jpg",
    title: "lens",
    disc: "Lorem ipsum dolor sit amet consectetur",
    price: "20$",
  },
];

function showProducts() {
  let productsUi = productsArr.map((item) => {
    let product = document.createElement("div");
    product.classList.add("product");
    let img = document.createElement("img");
    img.src = item.img;
    img.alt = `${item.title} image`;
    product.appendChild(img);
    let disc = document.createElement("div");
    disc.classList.add("disc");
    let title = document.createElement("h5");
    title.appendChild(document.createTextNode(item.title));
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(item.disc));
    let price = document.createElement("span");
    price.appendChild(document.createTextNode(`Price: ${item.price}`));
    disc.appendChild(title);
    disc.appendChild(p);
    disc.appendChild(price);
    let actions = document.createElement("div");
    actions.classList.add("actions");
    let button = document.createElement("button");
    button.classList.add("button", "add-to-cart");
    button.appendChild(document.createTextNode("Add to cart"));
    let i = document.createElement("i");
    i.classList.add("fa-regular", "fa-heart");
    i.id = "add-favorite";
    actions.appendChild(button);
    actions.appendChild(i);
    product.appendChild(disc);
    product.appendChild(actions);
    return product;
  });
  for (let i = 0; i < productsUi.length; i++) {
    productsDom.appendChild(productsUi[i]);
  }
}
showProducts();
/* end show products */

/* start add to cart button && take product id && update number of cart badge*/
// catch all add-to-cart buttons:
let addToCartButton = document.querySelectorAll(".add-to-cart");
let cartWindow = document.querySelector(".cart-window");
let cartIcon = document.querySelector(".cart-icon i");
let cartProducts = document.querySelector(".cart-window .cart-products");
let badge = document.querySelector(".cart-icon .badge");

function checkUserLogged() {
  if (EZShopUser.logged === false) {
    window.location = "../signIn.html";
  }
}

for (let i = 0; i < addToCartButton.length; i++) {
  addToCartButton[i].addEventListener("click", function () {
    checkUserLogged();
    takeProductId();
    takeProductTitle();

    function takeProductId() {
      let productId = productsArr[i].id;
      console.log(productId);
    }

    function takeProductTitle() {
      let productTitle = document.createElement("p");
      productTitle.appendChild(document.createTextNode(productsArr[i].title));
      cartProducts.prepend(productTitle);
      // number of cart badge && toggle show for cart badge
      function cartBadge() {
        let badgeNumber = document.querySelectorAll(
          ".cart-window .cart-products p"
        );
        badge.innerHTML = badgeNumber.length;
        if (badgeNumber.length == 0) {
          badge.style.display = "none";
        } else {
          badge.style.display = "block";
        }
      }
      cartBadge();
    }
  });
}

// toggle show for cart window:
function cartWindowToggleShow() {
  if (cartProducts.innerHTML != "") {
    if (cartWindow.style.display == "block") {
      cartWindow.style.display = "none";
    } else {
      cartWindow.style.display = "block";
    }
  }
}
cartIcon.addEventListener("click", cartWindowToggleShow);
/* end add to cart button && take product id && update number of cart badge*/
