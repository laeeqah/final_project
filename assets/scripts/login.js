// LOGIN FUNCTION
let users;

fetch("https://arcane-shelf-35923.herokuapp.com/list-records/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    users = data;
  });

function logUser() {
  let form = document.getElementById("login-form");
  let inputs = form.getElementsByTagName("input");

  let username = inputs[0].value;
  let password = inputs[1].value;

  console.log(username, password);

  let log = users.filter((user) => {
    return user.username == username && user.password == password;
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
