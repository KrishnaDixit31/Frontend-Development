//? Creating Element in JS :-

const newelement = document.createElement("h2");
newelement.textContent = "Welcome to my Website";
newelement.id = "second";
console.log(newelement);

// select element :-
const element = document.getElementById("first");
// element.after(newelement);
// element.before(newelement);
// element.appendChild(newelement);
element.append(newelement);

// Assign class :-
newelement.className = "heading";
newelement.className = "imp";
console.log(newelement);
newelement.classList.add("heading");
newelement.classList.add("title");
console.log(newelement);

// remove :-
newelement.classList.remove("imp");

// create attribute node :-
const attr = document.createAttribute("id");
attr.value = "third";
const parent = document.querySelector("h3");
parent.setAttributeNode(attr);
console.log(parent.getAttribute("id"));
// parent.setAttribute("style", "background-color:pink");
parent.setAttribute("style", "color:red");
parent.removeAttribute("style");

// Add Node in DOM :-
const add = document.createElement("li");
add.textContent = "New Item";
const list = document.querySelector("#listing");
// list.prepend(add);
// list.append(add);
const One = document.querySelector("#listing li:first-child");
// list.insertBefore(add,One);
list.replaceChild(add, One);
list.innerHTML += "<li>hello</li>";

// Insert adjacent element :-
const newadd = document.createElement("li");
newadd.textContent = "Web Development";

const dad = document.getElementById("listing");

// dad.insertAdjacentElement("beforebegin", newadd);
// dad.insertAdjacentElement("afterbegin", newadd);
// dad.insertAdjacentElement("beforeend", newadd);
dad.insertAdjacentElement("afterend", newadd);