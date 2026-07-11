//? Prototype :-

const obj1 = {
  name: "Krishna",
  age: 21,
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

console.log(obj1);
console.log(obj1.name, obj1.age);
obj1.greet();

console.log(obj1.hasOwnProperty("name"));
console.log(obj1.hasOwnProperty("score"));
console.log(obj1.hasOwnProperty("greet"));
console.log(obj1.toString());
console.log(typeof obj1);
console.log(obj1);

const obj2 = {
  account_no: 123467890,
  balance: 200,
};

console.log(obj2);
console.log(obj2.hasOwnProperty("name"));
console.log(obj2.name);

obj2.__proto__ = obj1;
console.log(obj2.hasOwnProperty("name"));
console.log(obj2.name);
obj2.name = "ram";
console.log(obj2.name);
console.log(obj1.name);

console.log(obj2.__proto__);
