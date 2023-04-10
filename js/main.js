/* start show products */
allProducts = window.localStorage.getItem("allProducts");
allProducts = JSON.parse(allProducts);

let productsDom = document.querySelector(".show .products");
function showProducts() {
  let productsUi = allProducts.map((item) => {
    let product = document.createElement("div");
    product.classList.add("product");
    // give productId for product div:
    product.setAttribute("data-id", `${item.id}`);
    let img = document.createElement("img");
    img.src = item.img;
    img.alt = `${item.title} image`;
    product.appendChild(img);
    let disc = document.createElement("div");
    disc.classList.add("disc");
    // give productId for disc div:
    disc.setAttribute("data-id", `${item.id}`);
    let productTitle = document.createElement("h5");
    productTitle.classList.add("product-title");
    productTitle.appendChild(document.createTextNode(item.title));
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(item.disc));
    let price = document.createElement("span");
    price.appendChild(document.createTextNode(`Price: ${item.price}`));
    disc.appendChild(productTitle);
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
let cartIcon = document.querySelector(".cart-icon a i");
let badge = document.querySelector(".cart-icon .badge");

// check cartProducts in local storage?
let cartProductsInLocalStorage = localStorage.getItem("cartProducts")
  ? JSON.parse(localStorage.getItem("cartProducts"))
  : [];

// start cart icon.
function openCartPage() {
  if (
    cartProductsInLocalStorage === null ||
    cartProductsInLocalStorage.length == 0
  ) {
    window.location = "../signIn.html";
  } else {
    window.location = "../cartProducts.html";
  }
}
cartIcon.addEventListener("click", openCartPage);

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
let addToCartButton = document.querySelectorAll(".add-to-cart");
for (let i = 0; i < addToCartButton.length; i++) {
  addToCartButton[i].addEventListener("click", function () {
    function checkUserLogged() {
      if (window.localStorage.getItem("EZShopUser")) {
        EZShopUser = window.localStorage.getItem("EZShopUser");
        EZShopUser = JSON.parse(EZShopUser);
        if (EZShopUser.logged == false) {
          window.location = "/signIn.html";
        } else {
          sendCartProductsToLocalStorage();
          updateBadgeNum();
        }
      } else {
        window.location = "/signIn.html";
      }
    }
    checkUserLogged();
    // store cartProducts in local storage:
    function sendCartProductsToLocalStorage() {
      let productId = addToCartButton[i].parentElement.getAttribute("data-id");
      if (productId == allProducts[i].id) {
        cartProductsInLocalStorage.push(allProducts[i]);
        window.localStorage.setItem(
          "cartProducts",
          JSON.stringify(cartProductsInLocalStorage)
        );
      }
    }
  });
}
// end add-to-cart action.
/* end add to cart button && take product id && update number of cart badge*/

/** start product details **/
let productImg = document.querySelectorAll(".product img");
for (let i = 0; i < productImg.length; i++) {
  productImg[i].addEventListener("click", function () {
    let productId = productImg[i].parentElement.getAttribute("data-id");
    function catchProductWithTheSameId() {
      for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].id == productId) {
          window.localStorage.setItem(
            "productDetails",
            JSON.stringify(allProducts[i])
          );
        }
      }
    }
    catchProductWithTheSameId();
    window.location = "../productDetails.html";
  });
}
/** end product details **/
