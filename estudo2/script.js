//DOM manipulation

//const title = document.querySelector(".header");

/*const listItems = document.querySelectorAll(".item");

for (i = 0; i < listItems.length; i++) {
  listItems[i].style.color = "red";
}*/

/*for (i = 0; i < listItems.length; i++) {
  listItems[i].style.color = "red";
*/

/*const ul = document.querySelector("ul");
const li = document.createElement("li");
li.innerText = "Vingadores";
li.className = "item";
//li.classList.add("item");
//li.setAttribute("class", "item");
ul.append(li);

li.remove();
*/
/*let ul = document.querySelector("li");

console.log(ul.parentNode);
console.log(ul.parentElement);*/

/*let ul = document.querySelector("ul");

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);*/
/*
let button = document.querySelectorAll(".item");
button[2].addEventListener("click", () => {
  alerta("seu sorriso", "seus olhos");
});

function alerta(a, b) {
  button[2].style.backgroundColor = "Blue";
  button[2].style.color = "white";
}
*/

/*const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".text");

function revealContent() {
  if (hiddenContent.classList.contains("hidden")) {
    hiddenContent.classList.remove("hidden");
  } else {
    hiddenContent.classList.add("hidden");
  }
}

revealBtn.addEventListener("click", revealContent);
*/

//EVENT PROPAGATION

/*
window.addEventListener(
  "click",
  function () {
    console.log("window");
  },
  true
);

document.addEventListener(
  "click",
  function () {
    console.log("document");
  },
  true
);

document.querySelector(".div2").addEventListener(
  "click",
  function () {
    //e.stopPropagation();
    console.log("div2");
  },
  { once: true }
);
document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("div1");
  },
  true
);
document.querySelector(".button").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    console.log((e.target.textContent = "Clicked"));
  },
  true
);
*/

/*document.querySelector("#futebol").addEventListener("click", function (e) {
  console.log("futebol clicado");
  console.log(e.target);
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "blue";
  }
});

document.querySelector("#basquete").addEventListener("click", function (e) {
  console.log("basquete clicado");
  console.log(e.target);
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "blue";
  }
});

document.querySelector("#golf").addEventListener("click", function (e) {
  console.log("golf clicado");
  console.log(e.target);
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "blue";
  }
});

document.querySelector("#baseball").addEventListener("click", function (e) {
  console.log("baseball clicado");
  console.log(e.target);
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "blue";
  }
});*/

document.querySelector("#ul").addEventListener("click", function (e) {
  console.log(`${e.target.getAttribute("id")} foi clicado`);
  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "gray";
  }
});

const ul = document.querySelector("#ul");
const novoItem = document.createElement("li");

novoItem.innerText = "Natação";
novoItem.setAttribute("id", "Natação");

ul.appendChild(novoItem);
