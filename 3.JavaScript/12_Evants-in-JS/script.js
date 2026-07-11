//? Events in JS :-

// 1.
function handclick() {
  const element = document.getElementById("first");
  element.textContent = "Future Coders";
}

// 2.
const element2 = document.getElementById("second");
element2.onclick = function handclick2() {
  element2.textContent = "Future Coders 2025";
  element2.style.backgroundColor = "red";
};
// update text
element2.onclick = function handclick2() {
  element2.textContent = "Byyyy 2025";
};

// 3.
const element3 = document.getElementById("third");
element3.addEventListener("click", () => {
  element3.textContent = "Future Coders 2050";
});

element3.addEventListener("click", () => {
  element3.style.backgroundColor = "orange";
});

// parent and child :-

// const child1 = document.getElementById("child1");
// child1.addEventListener('click', () => {
//     child1.textContent = "I Am Clicked";
// })

const parent = document.getElementById("parent");
// for (let child of parent.children) {
//     child.addEventListener('click', () => {
//         child.textContent = "I Am Clicked";
//     })
// }

function handleclick(e) {
  e.target.textContent = "I Am Clicked";
  parent.removeEventListener("click", handleclick);
}
parent.addEventListener("click", handleclick);

//* Methods and properties of event object :-
document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "Enter")
    console.log("Hello");
  console.log(event.target);
  console.log(event.clientX);
  console.log(event.clientY);
});

//* Bubbling and Capturing :-
const grandpa = document.getElementById("grandpa");
grandpa.addEventListener("click", (e) => {
  console.log(e.target);
  // console.log("GrandParent is Clicked");
}, false);

const parents = document.getElementById("parents");
parents.addEventListener("click", (e) => {
  console.log(e.target);
  // console.log("Parents is Clicked");
},false);

const child = document.getElementById("child");
child.addEventListener("click", (e) => {
  console.log(e.target);
  e.stopPropagation();
  // console.log("Child is Clicked");
}, false);