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

  if (log.length >= 0) {
    alert("Successfully logged in");
    window.location.href = "./landing.html";
  } else {
    alert("Incorrect username or password");
  }
}

function clear() {
  document.getElementsByName("clear").value = "";
}

// Locale Storage

function logUser() {
  // get cart from local storage
  let login = JSON.parse(localStorage.getItem("login"));
  // Make sure the cart from localstorage is valid
  login ? login : (login = []);

  // Get data to search through
  fetch("https://arcane-shelf-35923.herokuapp.com/list-records/")
    .then((res) => res.json())
    .then((data) => {
      // Get selected item out of backend
      let log_user = data.filter((reg) => {
        return reg.username == username && reg.password == password;
      });

      // Add item to cart
      loginCount = login.push(log_user[0]);

      // put new cart back into local storage
      localStorage.setItem("login", JSON.stringify(login));
    });
}
