// Operators :-

//? 1. Arithmetic Operators:-

let a = 5;
let b = 10;
let c = a + b;
let d = a - b;
let e = a * b;
let f = a / b;
let g = a % b;
let h = a ** b;

// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);

//? 2. Assignment Operators:-

a = 5;
b = 10;

// a += b;
// console.log(a);

// a -= b;
// console.log(a);

// a *= b;
// console.log(a);

// a /= b;
// console.log(a);

// a %= b;
// console.log(a);

// a **= b;
// console.log(a);

//? 3. Comparison Operators:-

let x = 3;
let y = 8;

// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x == y);
// console.log(x === y);
// console.log(x != y);

x = 4;
y = 4;
console.log(x == y);
console.log(x === y);

x = 4;
y = "4";
console.log(x == y);
console.log(x === y);

//? 4. Conversion Operators:-

//* Convert to String:-
let num = 123;
let strnum = String(num);
console.log(num);
console.log(strnum);
console.log(typeof num);
console.log(typeof strnum);

let bool = true;
let strbool = String(bool);
console.log(bool);
console.log(strbool);
console.log(typeof bool);
console.log(typeof strbool);

let user = null;
let strnull = String(user);
console.log(user);
console.log(strnull);
console.log(typeof user);
console.log(typeof strnull);

let member;
let str = String(member);
console.log(member);
console.log(str);
console.log(typeof member);
console.log(typeof str);

let id1 = Symbol("id");
let strid = String(id1);
console.log(id1);
console.log(strid);
console.log(typeof id1);
console.log(typeof strid);

let arr = [1, 2, 3];
let strarr = String(arr);
console.log(arr);
console.log(strarr);
console.log(typeof arr);
console.log(typeof strarr);

//* Convert to Number:-
let username = "12345";
let num1 = Number(username);
console.log(username);
console.log(num1);
console.log(typeof username);
console.log(typeof num1);

console.log(true);
console.log(Number(true));
console.log(typeof true);
console.log(typeof Number(true));

console.log(null);
console.log(Number(null));
console.log(typeof null);
console.log(typeof Number(null));

console.log(undefined);
console.log(Number(undefined));
console.log(typeof undefined);
console.log(typeof Number(undefined));

let code = "12es";
let numcode = Number(code);
console.log(code);
console.log(numcode);
console.log(typeof code);
console.log(typeof numcode);

console.log("12es");
console.log(parseInt("12es"));
console.log(typeof "12es");
console.log(typeof Number("12es"));

console.log("1.42em");
console.log(parseFloat("1.42es"));
console.log(typeof "1.42es");
console.log(typeof Number("1.42es"));

console.log("1.42em");
console.log(parseFloat("1.42es"));
console.log(typeof "1.42es");
console.log(typeof Number("1.42es"));

//* Convert to Boolean:-
console.log("");
console.log(Boolean(""));
console.log(typeof "");
console.log(typeof Boolean(""));

console.log(null);
console.log(Boolean(null));
console.log(typeof null);
console.log(typeof Boolean(null));

console.log(NaN);
console.log(Boolean(NaN));
console.log(typeof NaN);
console.log(typeof Boolean(NaN));

//? * Float value adding problem:-

let first1 = 0.1;
let sec1 = 0.2;
let ans1 = first1 + sec1;
console.log(ans1); // ans is not equal to 0.3, because of 0.1, 0.2 is not as it is store in memory.

//? * Null value Properties:-

console.log(null == undefined);
console.log(null == false);
console.log(null == 0);
console.log(null == "");

console.log(null >= undefined);
console.log(null >= false);
console.log(null >= 0);
console.log(null >= "");

//? 5. Logical Operators:-

let one = 2;
let two = 4;
console.log(one && two);
console.log(one || two);
console.log(!one);

one = 0;
two = 3;
console.log(one && two);
console.log(one || two);

one = 5;
two = 0;
console.log(one && two);
console.log(one || two);

//? 6. Bitwise Operators:-

console.log(2 & 3);
console.log(2 | 3);
console.log(2 ^ 3);
console.log(~3);
console.log(5 << 2);
console.log(5 >> 2);

//? 7. Ternary Operators:-

let age = 13;
let eligible = age >= 18 ? "Eligible for Vote" : " Not Eligible for Vote";
console.log(eligible);
