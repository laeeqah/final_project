function createUsers() {
  const inputs = document.getElementsByTagName("input");

  fetch("http://127.0.0.1:5000/main/", {
    method: "POST",
    body: JSON.stringify({
      fullname: inputs[0].value,
      username: inputs[1].value,
      email: inputs[2].value,
      password: inputs[3].value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("user has been created");
      document.getElementById("signup-form").reset();
    });
}
function clear() {
  document.getElementsByName("clear").value = "";
}
