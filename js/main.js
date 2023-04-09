/* start show products */
let productsDom = document.querySelector(".show .products");

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
    // give productId for actions div:
    actions.setAttribute("data-id", `${item.id}`);
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

// check products in local storage?
let cartProductsInLocalStorage = localStorage.getItem("cartProducts")
  ? JSON.parse(localStorage.getItem("cartProducts"))
  : [];

// start cart icon.
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

if (cartProductsInLocalStorage) {
  cartProductsInLocalStorage.map((item) => {
    cartProducts.innerHTML += `<P>${item.title}</P>`;
  });
}

function updateBadgeNum() {
  let badgeNumber = cartProductsInLocalStorage.length;
  badge.innerHTML = badgeNumber;
  if (badgeNumber == 0) {
    badge.style.display = "none";
  } else {
    badge.style.display = "block";
  }
}
updateBadgeNum();
// end cart icon.
// start add-to-cart action.
for (let i = 0; i < addToCartButton.length; i++) {
  addToCartButton[i].addEventListener("click", function () {
    function checkUserLogged() {
      if (EZShopUser.logged === false) {
        window.location = "/signIn.html";
      } else {
        takeProductTitle();
      }
    }
    checkUserLogged();

    /*
    function takeProductId() {
      let productId = productsArr[i].id;
      console.log(productId);
    }
    takeProductId();
    */

    function takeProductTitle() {
      let productTitle = document.createElement("p");
      productTitle.appendChild(document.createTextNode(productsArr[i].title));
      cartProducts.prepend(productTitle);
    }

    // store cart product in local storage:
    function sendCartProductsInLocalStorage() {
      cartProductsInLocalStorage.push(productsArr[i]);
      window.localStorage.setItem(
        "cartProducts",
        JSON.stringify(cartProductsInLocalStorage)
      );
    }
    sendCartProductsInLocalStorage();
    updateBadgeNum();
  });
}
// end add-to-cart action.
/* end add to cart button && take product id && update number of cart badge*/
