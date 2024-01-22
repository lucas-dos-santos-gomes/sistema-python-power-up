form = document.querySelector("form");
email = form.querySelector("#email");
password = form.querySelector("#password");

form.onsubmit = e => {
  e.preventDefault();
  if(email.value != "pythonimpressionador@gmail.com") {
    alert("Esse E-mail não está cadastrado!");
    email.value = "";
    password.value = "";
  } else if(password.value != "python2024") {
    alert("A senha está incorreta!");
    password.value = "";
  } else {
    if(window.origin == "http://127.0.0.1:5500") {
      window.location.href = window.origin + "/product-registration.html"
    } else {
      window.location.href = window.origin + "/sistema-python-power-up/product-registration.html"
    }
  }
}