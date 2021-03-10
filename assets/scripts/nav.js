function toggleNav() {
  // Get links from navigation
  const links = document.getElementsByClassName("nav-links");

  //   Check styles on links
  links.style.width == "0px"
    ? (links.style.width = "100vw")
    : (links.style.width = "0px");
}

// MODAL
let modal = document.getElementById("myModal");

// THE BUTTON THAT OPENS THE MODAL
let btn = document.getElementById("viewBtn");

// THE <span> ELEMENT THAT CLOSES THE MODEL
let span = document.getElementsByClassName("close")[0];

// CLICK ON THE BUTTON MODEL OPENS
btn.onclick = function () {
  modal.style.display = "block";
};

// USER CLICK ON <span> (x) IT WILL CLOSE THE MODEL
span.onclick = function () {
  modal.style.display = "none";
};

// ANYWHERE CLICKED OUTSIDE THE MODAL IT WILL CLOSE
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// CART
/* Creates an object with key-value pairs */
// var gamePrices = { "SniperElite": 400, "NFL": 650, "MHW": 700, "NFS": 450 };

/* Saves object in a JSON readable object */
// localStorage.setItem("Games", JSON.stringify(gamePrices));

/* Gets the value from the container and sets it as float */
// var totPrice = parseFloat(localStorage.getItem("Total"));

// if (!totPrice) {
/* Creates a empty variable and array */
// var totPrice = 0;
// var cart = [];
// localStorage.setItem("Cart", JSON.stringify(cart));
// } else {
// cart = JSON.parse(localStorage.getItem("Cart"));
// }

// localStorage.setItem("Total", totPrice);

// function addSnipe() {
// gamesList = JSON.parse(localStorage.getItem("Games"));
// totPrice = parseFloat(localStorage.getItem("Total"));
// cart = JSON.parse(localStorage.getItem("Cart"));

/* Inserts element into the array */
// cart.push("Sniper Elite 4");

// localStorage.setItem("Cart", JSON.stringify(cart));

/* Sets variable with a new incremented value */
// localStorage.setItem("Total", totPrice += gamesList.SniperElite + (gamesList.SniperElite * 0.15));
/* Generates a pop up with text  */
// alert("The total comes to " + "R" + totPrice + " (VAT included)");
// }

// checkout

// var totPrice = parseFloat(localStorage.getItem("Total"));
// var local = localStorage.getItem("Location");
//console.log(typeof local);
/* Sets a variable by retrieving an element using it's ID */
// var totOut = document.getElementById("prodTotal");

/* Sets a variable that creates an element */
// var price = document.createElement("h3");

/* Puts text in the element */
// price.innerHTML = "R" + totPrice;

/* Adds an element to to the div of the html page */
// totOut.appendChild(price);

// var cart = JSON.parse(localStorage.getItem("Cart"));
// var cartLen = cart.length;

// var gList = document.createElement("ol");

// var gItem = document.getElementById("itemList");

/* While the cart variable is not empty the code inside it will execute */
// if (cart != null) {

//     for (var i = 0; i < cart.length; i++) {

//         var listItem = document.createElement("li");
//         /* Creates a list item text */
//         var listText = document.createTextNode(cart[i]);

//         /* Adds tag to the specified div tag of the html page */
//         gItem.appendChild(gList);
//         listItem.appendChild(listText);
//         gList.appendChild(listItem);

//     }
// }
