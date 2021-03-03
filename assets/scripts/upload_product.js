function addProducts() {
  const inputs = document.getElementsByTagName("input");

  fetch("https://arcane-shelf-35923.herokuapp.com/add_product/", {
    method: "POST",
    body: JSON.stringify({
      p_name: inputs[0].value,
      img_links: inputs[1].value,
      p_rice: inputs[2].value,
      description: inputs[3].value,
      color: inputs[4].value,
      size: inputs[5].value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      alert("Product added");
      document.getElementById("product-form").reset();
    });
}
function clear() {
  document.getElementsByName("clear").value = "";
}
