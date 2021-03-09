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

// Name and Password from the register-form
let name = document.getElementById("username");
let pw = document.getElementById("password");

// storing input from register-form
function store() {
  localStorage.setItem("name", name.value);
  localStorage.setItem("pw", pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {
  // stored data from the register-form
  let storedName = localStorage.getItem("name");
  let storedPw = localStorage.getItem("pw");

  // entered data from the login-form
  let userName = document.getElementById("userName");
  let userPw = document.getElementById("userPw");

  // check if stored data from register-form is equal to data from login form
  if (userName.value == storedName || userPw.value == storedPw) {
    alert("ERROR");
  } else {
    alert("You are loged in.");
  }
}
