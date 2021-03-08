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
