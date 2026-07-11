//? var variable :-
//* Memory Allocation :-
// a = undefined
// b = undefined
// add = { function code }
// result1 = undefined
// result2 = undefined

//* Execution Phase :-
// a = 10
// b = 20
// add = { function code }
// result1 = 30
// result2 = 13

console.log(a); // here a is present in memory allocation phase.
var a = 10;
var b = 20;
console.log(a); // here a is present in Execution phase.
function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
var result1 = add(a, b);
var result2 = add(5, 8);
console.log(result1, result2);

//? let,const variable :- same Execution content
//* Memory Allocation :-
// c = uninitialized
// d = uninitialized
// addnum = { function code }
// result1 = uninitialized
// result2 = uninitialized

//* Execution Phase :-
// c = 30
// d = 20
// addnum = { function code }
// result1 = 50
// result2 = 9

// console.log(c); // here a is present in memory allocation phase (temporal dead zone).
let c = 30;
let d = 20;
console.log(a); // here a is present in Execution phase.
function addnum(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
const result3 = addnum(c, d);
const result4 = addnum(5, 4);
console.log(result3, result4);
