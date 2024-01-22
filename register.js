form = document.querySelector("form");
inputs = document.querySelectorAll("input");
submitBtn = document.querySelector(".submit");
clearBtn = document.querySelector(".clear");
table = document.querySelector("table");
tbody = table.querySelector("tbody");

form.onsubmit = e => {
  e.preventDefault();
  tr = document.createElement("tr");
  for(let i = 0; i < inputs.length; i++) {
    td = document.createElement("td");
    td.textContent = inputs[i].value;
    tr.appendChild(td);
    inputs[i].value = "";
  }
  tbody.appendChild(tr);
  table.classList.remove("display_none", tbody.childElementCount > 0);
}

/*submitBtn.onclick = () => {
  tr = document.createElement("tr");
  for(let i = 0; i < inputs.length; i++) {
    td = document.createElement("td");
    td.textContent = inputs[i].value;
    tr.appendChild(td);
    inputs[i].value = "";
  }
  tbody.appendChild(tr);
  table.classList.remove("display_none", tbody.childElementCount > 0);
}*/

clearBtn.onclick = () => {
  if(tbody.childElementCount > 0) {
    table.removeChild(table.lastElementChild);
    table.appendChild(document.createElement("tbody"));
  }
}