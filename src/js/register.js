form = document.querySelector("form");
inputs = document.querySelectorAll("input");
submitBtn = document.querySelector(".submit");
clearBtn = document.querySelector(".clear");
table = document.querySelector("table");

form.onsubmit = e => {
  e.preventDefault();
  tbody = table.querySelector("tbody");
  tr = document.createElement("tr");
  for(let i = 0; i < inputs.length; i++) {
    td = document.createElement("td");
    if(inputs[i].value.length > 0) {
      td.textContent = inputs[i].value;
    } else {
      td.textContent = "--";
      td.classList.add("center");
    }
    tr.appendChild(td);
    inputs[i].value = "";
  }
  tbody.appendChild(tr);
  table.classList.remove("display_none", tbody.childElementCount > 0);
}

clearBtn.onclick = () => {
  tbody = table.querySelector("tbody");
  if(tbody.childElementCount > 0) {
    table.removeChild(table.lastElementChild);
    table.appendChild(document.createElement("tbody"));
    table.classList.add("display_none");
  }
}