let productsDom = document.querySelector(".show .products");

let localStorageProducts = localStorage.getItem("cartProducts");
localStorageProducts = JSON.parse(localStorageProducts);

function checkLengthOfProducts () {
  if (localStorageProducts.length == 0) {
    let alert = document.createElement("div");
    alert.appendChild(document.createTextNode("You haven't added any products yet"));
    alert.style.textAlign = "center"
    document.body.appendChild(alert);
  }
}
checkLengthOfProducts ();

function showProducts() {
  if (localStorageProducts) {
    for (let i = 0; i < localStorageProducts.length; i++) {
      let product = document.createElement("div");
      product.classList.add("product");
      let img = document.createElement("img");
      img.src = localStorageProducts[i].img;
      img.alt = `${localStorageProducts[i].title} image`;
      product.appendChild(img);
      let disc = document.createElement("div");
      disc.classList.add("disc");
      let title = document.createElement("h5");
      title.appendChild(document.createTextNode(localStorageProducts[i].title));
      let p = document.createElement("p");
      p.appendChild(document.createTextNode(localStorageProducts[i].disc));
      let price = document.createElement("span");
      price.appendChild(
        document.createTextNode(`Price: ${localStorageProducts[i].price}`)
      );
      disc.appendChild(title);
      disc.appendChild(p);
      disc.appendChild(price);
      product.appendChild(disc);
      let actions = document.createElement("div");
      actions.classList.add("actions");
      // give productId for actions div:
      actions.setAttribute("data-id", `${localStorageProducts[i].id}`);
      let button = document.createElement("button");
      button.classList.add("button", "remove-from-cart");
      button.appendChild(document.createTextNode("Remove from cart"));
      actions.appendChild(button);
      product.appendChild(actions);
      productsDom.appendChild(product);
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
