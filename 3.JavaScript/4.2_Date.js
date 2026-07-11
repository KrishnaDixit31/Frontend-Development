//? Creating Date Object :-

const now = new Date();
console.log(now);
console.log(now.toString());
console.log(now.toLocaleString());

console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getHours());
console.log(now.getTime());
console.log(now.getSeconds());

const data = new Date(2025, 8, 30);
data.setMonth(11);
console.log(data);
console.log(data.toString());

const timestamp = Date.now();
console.log(timestamp);
const dates = new Date(timestamp);
console.log(dates);
