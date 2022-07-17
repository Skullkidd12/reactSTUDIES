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

const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".text");

function revealContent() {
  if (hiddenContent.classList.contains("hidden")) {
    hiddenContent.classList.remove("hidden");
  } else {
    hiddenContent.classList.add("hidden");
  }
}

revealBtn.addEventListener("click", revealContent);
