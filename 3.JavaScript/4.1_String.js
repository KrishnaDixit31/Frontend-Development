//? Creating String :-

const str1 = "Krishna Dixit";
const str2 = "Krishna Dixit";
const str3 = `Krishna 
Dixit`;
console.log(str1);
console.log(str2);
console.log(str3);

//? Put Data in string (Variable Interpolation) :-

// old way :-
// let Name = `Alice`;
// let age = `30`;
// let message = `My name is ` + Name + ` and I am ` + age + ` years old.`;
// console.log(message);

// new way :-
let Name = `Alice`;
let age = `30`;
let message = `My name is ${Name} and I am ${age} years old.`;
console.log(message);

//? To determine length of string :-

let greeting = `Hello, Welcome`;
console.log(greeting.length);

//? To excess character of string :-

let info = `Hello, Welcome`;
console.log(greeting[0]);
console.log(greeting[5]);

//? To convert string to uppercase and lowercase :-

const username = `Shree Krishna Dixit`;
const upperstring = username.toUpperCase();
console.log(upperstring);
const lowerstring = username.toLowerCase();
console.log(lowerstring);
console.log(username);

//? To find character in string :-

let para = `hello coder army coders`;
console.log(para.indexOf("cod"));
console.log(para.indexOf("Cod"));
console.log(para.indexOf(""));

console.log(para.lastIndexOf("cod"));
console.log(para.lastIndexOf("r"));

console.log(para.includes("cod"));
console.log(para.includes(""));
console.log(para.includes(" "));
console.log(para.includes("don"));

//? Extracting some part of string :-

const a = `Hello Coders`;
console.log(a.slice(2, 7));
console.log(a.slice(0, 5));
console.log(a.slice(5));
console.log(a.slice(2, -2));
console.log(a.slice(-2));

console.log(a.substring(0, 5));
console.log(a.substring(0, -5));

//? Adding strings :-

let first = `MY name is `;
let second = `Shree Krishna`;
let last = `Dixit`;
let fullmessage = first + second + " " + last;
console.log(fullmessage);

//? Replacing string :-

const text = `hello world, hello there`;
let newtext = text.replace("hell", "hi");
console.log(newtext);
newtext = text.replaceAll("hell", "hi");
console.log(newtext);

//? To cleaning whitespace :-

let userinput = " my name  is ";
console.log(userinput.trim());
console.log(userinput.trimStart());
console.log(userinput.trimEnd());

//? Split string :-

let names = `Rohan,Rohit, Raman, Raj`;
console.log(names.split(","));