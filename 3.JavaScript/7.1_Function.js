//? Function :-

//* 1. Creating Function :-

function addnumber(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
  return 1;
}
addnumber(2, 3);
console.log(addnumber(2, 3));
addnumber(2, 3, 4, 5);

// rest operator (...) :-
add(2, 4, 6, 8);

function add(...num) {
  let sum = 0;
  for (let n of num) {
    sum += n;
  }
  console.log(sum);
}

add(1, 2, 3, 4, 5, 6, 7, 8, 9);
add(9, 12, 83, 44);

//* 2. Creating Function hold in Variable :-

// console.log(total(3, 5)); //this dose not work here.

const total = function (num1, num2) {
  return num1 + num2;
};
console.log(total(3, 5));

//* 3. Creating arrow Function :-
// console.log(twosum(2, 4)); //this dose not work here.

let sum1 = (num1, num2) => {
  return num1 + num2;
};
console.log(sum1(2, 4));

// To print single return value then skip {}
let sum2 = (num1, num2) => num1 + num2;
console.log(sum2(5, 10));

// If we have single parameter then skip ()
let square = (num) => num * num;
console.log(square(6));

// print object :-
let get1 = () => (obj = { name: "krishna", age: 20 });
console.log(get1());

// this give an error
// let get2 = () => { name: "krishna", age: 20 };
// console.log(get2());

let get3 = () => ({ name: "krishna", age: 20 });
console.log(get3());

//* 3. Creating Immediately Invoke Function Expression (IIFE) :-
(function greeting() {
  console.log("Hello");
})();

(() => {
  console.log("Hello, hii");
})();

//* Callback Function :-
function greet() {
  console.log("Hello");
}

function meet(Callback) {
  console.log("Hii");
  Callback();
}

meet(greet);
