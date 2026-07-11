//? Higher Order Function :-

function double(value) {
  return function execute(num) {
    return value * num;
  };
}
let n = double(20);
console.log(n);
console.log(n(9));
// OR
n = double(12)(6);
console.log(n);
