let slideIndex = 0;
showSlides();

function PopUpShow() {
  let popup = document.getElementById("product-popup");
  popup.style.display = "block";
}

function PopUpClose() {
  popup = document.getElementById("product-popup");
  popup.style.display = "none";
}

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
  fetch("https://arcane-shelf-35923.herokuapp.com/list-women/")
    .then((res) => res.json())
    .then((data) => {
      console.table(data);
      let list = document.getElementById("products");
      console.log(list);
      data.forEach((product) => {
        let item = ` 
            
            <div class ="card">
            <h4>${product.categories}</h4>
              <div class="product-image">
                <img src=${product.images} />
              </div>
              <div class="product-info">
                <h4>${product.name}</h4>
                <h4>${product.price}</h4>
                <button class = "cart">Add Cart</button>
                <button class="popup-btn" onClick="PopUpShow()" id="viewBtn">View Product</button>
                <div id="product-popup" class="popup">
                    <div class="popup-content">
                        <div class="popup-title text-center">
                            <span onClick ="PopUpClose()" class="close">&times;</span>
                            <h2>${product.name}</h2>
                            <img src=${product.images} />
                        </div>
                        <div class ="popup-price">
                            <h3>Price: ${product.price}</h3>
                        </div>
                        <div class="popup-info text-left">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, maiores.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium labore atque ducimus nulla eius eos
                                illo quae vero facere. Atque!.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, maiores.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium labore atque ducimus nulla eius eos
                                illo quae vero facere. Atque!.</p>
                        </div>
                        <div class = "popup-cate>
                          <h4>Catergory: ${product.categories}</h4>
                        </div>
                        <div class = "popup-size">
                          <h3>Size: ${product.size}</h3>
                        </div>

                    </div>
                </div>
              </div>
                
            </div>`;

        console.log(item);
        list.innerHTML += item;
      });
    });
}

productListed();
// PopUpClose();
// PopUpShow();

let btn = document.getElementById("viewBtn");

button.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

function searchProduct() {
  const searchForm = document.getElementById("search-form");
  const search = searchForm.getElementsByTagName("input")[0].value;

  fetch("https://arcane-shelf-35923.herokuapp.com/list-women/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      console.log(search);
      let matchedSearch = json.filter((data) => {
        return data.title == search;
      });
      document.getElementById("products").innerHTML = "";
      matchedSearch.forEach((product) => createProductItem(product));
    });
}

//fetch the data
