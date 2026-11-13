let para = document.querySelector("p");
let addStyle = document.getElementById("addStyle");
let removeStyle = document.getElementById("removeStyle");
let toggleStyle = document.getElementById("toggleStyle");
addStyle.addEventListener("click", function () {
  para.classList.add("highlight");
});
removeStyle.addEventListener("click", function () {
  para.classList.remove("highlight");
});

toggleStyle.addEventListener("click", function () {
  para.classList.toggle("highlight");
});

let existsBtn = document.getElementById("existsBtn");
existsBtn.addEventListener("click", function () {
  if (para.classList.contains("highlight")) {
    alert("Class exists");
  } else {
    alert("Class not exists");
  }
});

let buyBtn = document.getElementById("buyBtn");
buyBtn.addEventListener("click", function () {
  buyBtn.classList.toggle("active-btn");
});

let body = document.querySelector("body");
let darkMode = document.getElementById("darkMode");
darkMode.addEventListener("click", function () {
  body.classList.toggle("darkMode");
});
