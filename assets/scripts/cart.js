// Get data from localStorage
// let cart = JSON.parse(localStorage.getItem("cart"));
// cart ? cart : (cart = []);

// function updateCartLink() {
//   document.getElementById("cart-link").innerHTML = `Cart(${cart.length})`;
// }
// updateCartLink();

// Check if cart content is available

// let cartContent = document.getElementById("cart-products");
// console.log(cartContent);

// if (cartContent) {
//   cartContent.innerHTML = `
//         <h1 style="text-align:center;">Cart</h1>
//         <table style="text-align: left">
//             <thead style="background: #bebebe">
//                 <tr class="test">
//                     <th class=""imgcart">Image</th>
//                     <th class="namecart">Name</th>
//                     <th class="colcart">Color</th>
//                     <th class="catcart">Category</th>
//                     <th class="pricecart">Price</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 ${renderCartItems()}
//             </tbody>
//         </table>
//     `;
// }
// function renderCartItems() {
//   let content = "";
//   cart.forEach((item) => {
//     content += `
//             <tr>
//                 <td><img src=${item.image} alt=${item.name}/></td>
//                 <td>${item.name}</td>
//                 <td>${item.color}</td>
//                 <td>${item.category}</td>
//                 <td>${item.price}</td>
//             </tr>
//         `;
//   });

//   return content;
// }

// function add() {
//   let cart = JSON.parse(localStorage.getItem("cart"));
//   cart ? cart : (cart = []);
//   cart.push(selectedProduct);
//   console.log(cart);
//   document.getElementById("cart-link").innerHTML = `Cart(${cart.length})`;
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// function createCart() {
//   let inCart;

//   let cart = localStorage.getItem("cart");
//   console.log("Whats in your cart?", JSON.parse(cart));
// }

// function showCart() {
//   let added = document.getElementById("cartItem");
// }

// function renderCart(){
//     let cart = JSON.parse(localStorage.getItem("cart"));

//     fetch("http://127.0.0.1:5000/show-records/")
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             console.log(cart);
//             let cartItem = [];

//             data.forEach((dataItem) => {
//                 cart.forEach((cartItem) =>{
//                     if (dataItem.id == cartItem) {
//                         cartItem.push(dataItem);
//                     }
//                 });
//             });

//             console.log(cartItem);
//             cartItem.forEach((item) => {
//                 let cartItem = createCartItem(item);
//                 document.getElementById("").innerHTML += cartItem;
//             })
//             console.log(cartItem);
//         });
