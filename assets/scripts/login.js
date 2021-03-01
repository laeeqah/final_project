function logUser() {
  const inputs = document.getElementsByTagName("input");

  fetch("http://127.0.0.1:5000/main/", {
    method: "POST",
    body: JSON.stringify({
      username: inputs[0].value,
      password: inputs[1].value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("user has been created");
      document.getElementById("login-form").reset();
    });
}

function clear() {
  document.getElementsByName("clear").value = "";
}
