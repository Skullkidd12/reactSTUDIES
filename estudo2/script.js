//DOM manipulation

//const title = document.querySelector(".header");

/*const listItems = document.querySelectorAll(".item");

for (i = 0; i < listItems.length; i++) {
  listItems[i].style.color = "red";
}*/

/*for (i = 0; i < listItems.length; i++) {
  listItems[i].style.color = "red";
*/

const ul = document.querySelector("ul");
const li = document.createElement("li");
li.innerText = "Vingadores";
li.className = "item";
//li.classList.add("item");
//li.setAttribute("class", "item");
ul.append(li);

li.remove();
