function getCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart ? cart : (cart = []);

  console.table(cart);

  renderCart(cart);
}

// ADD
// add necessary information to the cart
function renderCart(products) {
  let contentBox = document.getElementById("cartProducts");
  let total = 0;

  products.forEach((product) => {
    total += parseInt(product.price);

    contentBox.innerHTML += `
        <div class ="card-cart">
            <ul>
                <div class="product-image">
                    <img src=${product.images} />
                </div>
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <h4>${product.price}</h4>
                   

                    <button class = "remove" onclick="RemoveItem(${product.proid})">Remove</button>
                </div>
            </ul>
        </div>`;
  });
  // this will add the total amount of products together
  document.getElementById(
    "total"
  ).innerHTML = `<h4></h4> Your total is: R${total}</h4>`;
  console.log(total);
  return contentBox;
}

getCart();

// REMOVE
// will remove once you press on remove button and manualy refresh.
function RemoveItem(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));

  console.log(cart);

  let RemoveAnItem = cart.filter((item) => {
    return item.proid !== id;
  });

  localStorage.setItem("cart", JSON.stringify(RemoveAnItem));

  console.log("Product Removed");
  renderCart();
  window.location.href = "./cart.html";
}

function clearCart() {
  localStorage.removeItem("cart"); //clear local storage data
}
