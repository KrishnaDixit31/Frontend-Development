//? Scope :-

// 1. Global Scope :- Accessible in all code.
let a = 10;
const b = 2;
var c = 11;

console.log(a);
console.log(b);
console.log(c);

// 2. Function Scope :- Accessible in function block code.
function print() {
  let e = 100;
  const f = 200;
  var g = 110;
  console.log(e);
  console.log(f);
  console.log(g);

  console.log(a);
  console.log(b);
  console.log(c);
}

// console.log(e); // Error e is not defined.
// console.log(f); // Error f is not defined.
// console.log(g); // Error g is not defined.
print();

// 3. Block Scope :- Accessible in Block{} only.
let num1 = 12;
let num2 = 10;
if (num1 >= num2) {
  let isactive1 = num1 + " >= " + num2;
  var isactive2 = "yes it is";
  const isactive3 = true;

  console.log(isactive1);
  console.log(isactive2);
  console.log(isactive3);
}
// console.log(isactive1); // Error isactive1 is not defined.
console.log(isactive2); // Error var is not follow block scope.
// console.log(isactive3); // Error isactive3 is not defined.
