//? For Floating Point Inaccuracy :-

let a = 12;
let b = 2.345;
let sum = a + b;
console.log(sum);
console.log(typeof sum);

console.log(sum.toFixed(2));
console.log(typeof sum.toFixed(2));

let c = b.toFixed(1);
console.log(c);
console.log(typeof c);

let d = b.toPrecision(3);
console.log(d);
console.log(typeof d);

let str = b.toString();
console.log(str);
console.log(typeof str);

//? Creating Number as Object :-

let num1 = new Number(20);
console.log(num1);
console.log(typeof num1);

let num2 = new Number(20);
console.log(num1 == num2);

let num3 = num1;
console.log(num1 == num3);

//? Math. Operator :-

console.log(Math.abs(-3));
console.log(Math.floor(-3.345));
console.log(Math.floor(3.345));
console.log(Math.ceil(-3.345));
console.log(Math.ceil(3.345));
console.log(Math.PI);
console.log(Math.LN10);
console.log(Math.max(12, 234, 56, 88));

//* Random Number Generation:-
console.log(Math.random()); // Output is Random number between [0,1).
console.log(Math.floor(Math.random() * 10)); // Output is Random number between [0,10).
console.log(Math.floor(Math.random() * 6)); // Output is Random number between [0,6).

// Formula :- Math.floor(Math.random() * (max-min+1)) + min .

// Q. Generate an four digit random number ?
/* four digit number means it lies in interval [1000, 9999)
here min = 1000 and max = 9999 */
console.log(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);