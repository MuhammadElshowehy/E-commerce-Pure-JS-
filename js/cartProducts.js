let localStorageProducts = localStorage.getItem("cartProducts");
localStorageProducts = JSON.parse(localStorageProducts);

let productsDom = document.querySelector(".show .products");

function checkLengthOfProducts() {
  if (localStorageProducts === null || localStorageProducts.length == 0) {
    let alert = document.createElement("div");
    alert.appendChild(
      document.createTextNode("You haven't added any products yet")
    );
    alert.style.textAlign = "center";
    document.body.appendChild(alert);
  }
}
checkLengthOfProducts();

function showProducts() {
  if (localStorageProducts) {
    let productsUi = localStorageProducts.map((item) => {
      let product = document.createElement("div");
      product.classList.add("product");
      // give productId for product div:
      product.setAttribute("data-id", item.id);
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
      button.classList.add("button", "remove-from-cart");
      button.appendChild(document.createTextNode("Remove from cart"));
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
}
showProducts();

let removeFromCart = document.querySelectorAll(".remove-from-cart");
for (let i = 0; i < removeFromCart.length; i++) {
  removeFromCart[i].addEventListener("click", function () {
    let productId = removeFromCart[i].parentElement.getAttribute("data-id");
    function removeProduct() {
      localStorageProducts = localStorageProducts.filter((el) => {
        return el.id != productId;
      });
      window.localStorage.setItem(
        "cartProducts",
        JSON.stringify(localStorageProducts)
      );
    }
    removeProduct();
    window.location.reload();
  });
}
