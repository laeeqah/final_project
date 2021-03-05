let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function productListed() {
  fetch("https://arcane-shelf-35923.herokuapp.com/list-products/")
    .then((res) => res.json())
    .then((data) => {
      console.table(data);
      let list = document.getElementById("products");
      console.log(list);
      data.forEach((product) => {
        let item = ` 
            <div class ="card">
              <h4>${product.catergories}
              <img src=${product.images} />
              <h4>${product.name}</h4>
              <h4>${product.description}</h4>
              <h4>${product.price}</h4>
            </div>`;
        console.log(item);
        list.innerHTML = item;
      });
    });
}

productListed();

// MODAL
let modal = document.getElementById("proModal");

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
