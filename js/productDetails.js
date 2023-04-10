let productsDom = document.querySelector(".products");

let productDetails = window.localStorage.getItem("productDetails");
productDetails = JSON.parse(productDetails);

/* start show product details */
if (productDetails) {
  let product = document.createElement("div");
  product.classList.add("product");
  // give productId for product div:
  product.setAttribute("data-id", `${productDetails.id}`);
  let img = document.createElement("img");
  img.src = productDetails.img;
  img.alt = `${productDetails.title} image`;
  product.appendChild(img);
  let disc = document.createElement("div");
  disc.classList.add("disc");
  // give productId for disc div:
  disc.setAttribute("data-id", `${productDetails.id}`);
  let title = document.createElement("h5");
  title.classList.add("title");
  title.appendChild(document.createTextNode(productDetails.title));
  let p = document.createElement("p");
  p.appendChild(document.createTextNode(productDetails.disc));
  let price = document.createElement("span");
  price.appendChild(document.createTextNode(`Price: ${productDetails.price}`));
  disc.appendChild(title);
  disc.appendChild(p);
  disc.appendChild(price);
  product.appendChild(disc);
  // let actions = document.createElement("div");
  // actions.classList.add("actions");
  // // give productId for actions div:
  // actions.setAttribute("data-id", `${productDetails.id}`);
  // let button = document.createElement("button");
  // button.classList.add("button", "add-to-cart");
  // button.appendChild(document.createTextNode("Add to cart"));
  // let i = document.createElement("i");
  // i.classList.add("fa-regular", "fa-heart");
  // i.id = "add-favorite";
  // actions.appendChild(button);
  // actions.appendChild(i);
  // product.appendChild(actions);
  productsDom.appendChild(product);
}
/* end show product details */

