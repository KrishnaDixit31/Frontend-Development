/* Variables in JavaScript:- let, const, var */

//? Initialization of let variable //
let first = "Krishna";
console.log(first);

/* Block Scope */
if (true) {
  let firstName = "John";
  // firstName is declared here so console.log() give output
  console.log(firstName);
}
// This will give -> Reference Error: firstName is not define
// console.log(firstName);

/* Reassignment is allowed */
let count = 0;
count = 3;
console.log(count);

/* Initialization is allowed */
let Name; // Now Name is not initialize
Name = "John";
console.log(Name);

// Temporal Dead Zone
// This will give -> Reference Error: Cannot access 'firstLetter' before initialization
// console.log(firstLetter);
let firstLetter = "a";

//? Initialization of const variable //
const User = "Krishna";
console.log(User);

/* Block Scope */
if (true) {
  const greeting = "Hello";
  // greeting is declared here so console.log() give output
  console.log(greeting);
}
// This will give -> Reference Error: firstName is not define
// console.log(firstName);

/* Reassignment is not allowed */
const num = 0;
// TypeError: Assignment to constant variable.
// num = 3;
console.log(num);

/* Initialization is allowed */
// SyntaxError: Missing initializer in const declaration
const username = "John";
console.log(username);

// Temporal Dead Zone
// This will give -> Reference Error: Cannot access 'letter' before initialization
// console.log(letter);
const letter = "a";

//? Initialization of var variable //
var Visible = "I am Visible";
console.log(Visible);

/* NO Block Scope */
if (true) {
  var leak = "Hello";
  // leak is declared here so console.log() give output
  console.log(leak);
}
// console.log() give output here also
console.log(leak);

/* Reassignment is allowed */
var age = 1;
age = 3;
console.log(age);

/* Redeclaration is allowed */
var work = "Employ";
var work = "Engineer";
console.log(work);

// Temporal Dead Zone
// This will give -> Output: undefined (no error)
console.log(word);
var word = "Dead";
console.log(word);
