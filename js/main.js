let navLinks = document.querySelector("#links");
let navUser = document.querySelector("#user");
let navUsername = document.querySelector("#username");
let logOut = document.querySelector("#logout");
let productsDom = document.querySelector(".home .products");

if (localStorage.getItem("username")) {
  navLinks.remove();
  navUser.style.display = "flex";
  navUsername.innerHTML = localStorage.getItem("username");
}

logOut.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "/signUp.html";
  }, 2000);
});

/* stat show products */
let productsArr = [
  {
    id: 1,
    img: "./images/perfume.webp",
    title: "perfume",
    disc: "Lorem ipsum dolor sit amet consectetur",
    price: "20$",
  },
  {
    id: 2,
    img: "./images/camera.jpg",
    title: "camera",
    disc: "Lorem ipsum dolor sit amet consectetur",
    price: "20$",
  },
  {
    id: 3,
    img: "./images/watch.jpg",
    title: "watch",
    disc: "Lorem ipsum dolor sit amet consectetur",
    price: "20$",
  },
  {
    id: 4,
    img: "./images/cocacola.jpg",
    title: "cocacola",
    disc: "Lorem ipsum dolor sit amet consectetur",
    price: "20$",
  },
  {
    id: 5,
    img: "./images/lens.jpg",
    title: "lens",
    disc: "Lorem ipsum dolor sit amet consectetur",
    price: "20$",
  },
];

function showProducts() {
  let productsUi = productsArr.map((item) => {
    return `
      <div class="product">
        <img src="${item.img}" alt="${item.title} image" />
          <div class="disc">
            <h6>${item.title} </h6>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <span>Price: ${item.price}</span>
          </div>
          <div class="actions">
            <button class="button add-to-cart">Add to cart</button>
            <i class="fa-regular fa-heart" id="addFavorite"></i>
          </div>
      </div>
    `;
  });
  productsDom.innerHTML = productsUi;
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
  if (localStorage.getItem("username")) {
    // console.log("added to cart");
  } else {
    window.location = "../signIn.html";
  }
}

for (let i = 0; i < addToCartButton.length; i++) {
  addToCartButton[i].addEventListener("click", function () {
    checkUserLogged();
    // takeProductId();
    takeProductTitle();

    // function takeProductId() {
    //   let product = productsArr[i];
    // }

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
function showHideCartWindow() {
  if (cartProducts.innerHTML != "") {
    if (cartWindow.style.display == "block") {
      cartWindow.style.display = "none";
    } else {
      cartWindow.style.display = "block";
    }
  }
}
cartIcon.addEventListener("click", showHideCartWindow);
/* end add to cart button && take product id && update number of cart badge*/
