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
    window.location.href = window.location.href + "/product-registration.html"
  }
}