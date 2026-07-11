/* Datatypes in JavaScript */

//? 1. Primitive :- String, Number, Boolean, undefined, null, BigInt, Symbol.

let username = "Krishna";
let num = 22;
let isActive = true;
let age;
let weather = null;
let big_num = 1234567890123345678n;
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // Output: false because every symbol is unique

//* typeof operator

console.log(username, typeof username);
console.log(num, typeof num);
console.log(isActive, typeof isActive);
console.log(age, typeof age);
console.log(weather, typeof weather);
console.log(big_num, typeof big_num);
console.log(id1, typeof id1);
console.log(id2, typeof id2);

//? Non-Primitive :- Array, Function, Object.

let Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let person = {
  firstName: "Krishna",
  lastName: "Dixit",
  age: 20,
};
function greet() {
  console.log("Hello");
}

greet();
console.log(Number, typeof Number);
console.log(person, typeof person);
console.log(greet, typeof greet);
