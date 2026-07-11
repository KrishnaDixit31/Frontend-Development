//? Array in JavaScript :-

let marks = [100, 200, 50, 40];
console.log(marks);

let names = ["Rohan", "Ram", "Aman"];
console.log(names);

let mix = [10, "Rohan", 300, true, null, "Krishna"];
console.log(mix);
console.log("Length of array:- ", mix.length);

console.log(mix[0]);
console.log(mix[4]);

mix[1] = 20;
console.log(mix);

//? Adding/Deleting element in array :-

let arr = [12, 30, "Aman", true, "Rohit"];

arr.push(20);
console.log(arr);
arr.pop();
console.log(arr);

arr.unshift(5);
console.log(arr);
arr.shift();
console.log(arr);

let arr1 = [];
console.log(arr1);
arr1.pop();
console.log(arr1);

//? Loop in Array :-

let Score = [20, 13, 22, 44, 7, 92];

for (let i = 0; i < Score.length; i++) {
  console.log(Score[i]);
}

for (let num of Score) {
  console.log(num);
}

//? Extracting some part of array :-

let count = [10, 5, 67, 3, 50, 40, 55, 43, 23, 4];
let subcount = count.slice(2, 4);
console.log(count);
console.log(subcount);

count.splice(2, 3);
console.log(count);

//? To combine arrays :-

const first = [10, 20, 30];
const sec = ["Name", 11, true];

const combine1 = first.concat(sec);
console.log(combine1);

const combine2 = [...first, ...sec];
console.log(combine2);

//? Array to string conversion :-

const one = ["Rohit", "Alice", "Mohan"];

const two = one.toString();
console.log(two);

const three = one.join("-");
console.log(three);

//? To find element in array :-

const data = ["name", "age", 32, 54, true];

console.log(data.indexOf("age"));
console.log(data.lastIndexOf(32));
console.log(data.includes(true));

//? Sorting Array :-

const letters = ["a", "b", "d", "A", "e", 12];
letters.sort();
console.log(letters);
letters.reverse();
console.log(letters);

const num = [111, 33, 221, 1, 45, 0];
num.sort();
console.log(num);

// Ascending order:-
const info1 = [10, 120, 31, 2];
info1.sort((a, b) => a - b);
console.log(info1);

//Descending order:-
const info2 = [10, 120, 31, 2];
info2.sort((a, b) => b - a);
console.log(info2);

//? Flattening Array :-

const a = [10, 30, [20, 22, [100, [33], 55], [45]], 43, 66];
const b = a.flat();
console.log(b);
const c = a.flat(2);
console.log(c);
const d = a.flat(Infinity);
console.log(d);
