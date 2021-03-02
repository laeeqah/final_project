let users;

fetch("http://127.0.0.1:5000/logged/")
  .then((response) => response.json())
  .then((data) => {
    console.table(data.body);
    users = data.body;
  });
function logUser() {
  let inputs = document.getElementsByTagName("input");

  let username = inputs[0].value;
  let password = inputs[1].value;

  let log = users.filter((user) => {
    return user.username == username && user.password == password
      ? true
      : false;
  });

  console.log(log);

  if (log.length > 0) {
    alert("Successfully logged in");
    window.location.href = "./index.html";
  } else {
    alert("Incorrect username or password");
  }
}

function clear() {
  document.getElementsByName("clear").value = "";
}
