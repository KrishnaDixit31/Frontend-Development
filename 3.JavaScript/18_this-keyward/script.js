//? global Object: In browser it is called window, in node.js, It is called global.
//? globalThis points to global object of the environment.
// console.log(globalThis);

//* Learn about this keyword :-

// 'use strict'; //? use strict mode or not output is same in terminal and console.
// console.log(this);

//* this in function :-

//? normal function: non strict mode, this will point to global object.
//? in strict mode: It will point to undefined.
// "use strict";
function meet() {
  console.log(this);
}
// meet();

function greet() {
  console.log(`Hello, ${this.name}`);
}

function incrementAge(value) {
  this.age += value;
  console.log(this.age);
  console.log(this.name);
}

const user1 = {
  name: "Krishna",
  age: 21,
};

const user2 = {
  name: "Rohit",
  age: 28,
};

greet.call(user1);
greet.call(user2);

//? call apply bind, this point to the invoking object.
incrementAge.call(user1, 2);
incrementAge.apply(user2, [5]);
const incr = incrementAge.bind(user2, 8);

incr();

//* this in class :-
//? this point to {name:"Krishna", age:20}
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person("Krishna", 20);
console.log(p1);

//* Arrow Function :-
//? Arrow Function: this doesn't exist for arrow function.
//? arrow function take this keyword from it lexical(surrounding) environment scope.
//? this keyword in global scope: Node.JS(Empty Object), in browser it will point to global Object(window).
const greeting = () => {
  console.log(this);
};
greeting();

const user = {
  name: "Shyam",
  update: () => {
    console.log(this);
  },
};
user.update();

const obj = {
  name: "Shyam",
  greet: function () {
    // console.log(this);
    const that = this;
    function meet() {
      //   console.log(this);
      console.log(that);
    }
    meet();
  },
};

obj.greet();

// eg:-

const stopWatch1 = {
  second: 0,
  start: function () {
    console.log(this);
    setInterval(() => {
      this.second++;
      console.log(this.second);
    }, 1000);
  },
};

const stopWatch2 = {
  second: 0,
  start: function () {
    const that = this;
    setInterval(function () {
      that.second++;
      console.log(that.second);
    }, 1000);
  },
};

// stopWatch1.start();
// stopWatch2.start();

//* this in DOM :-
// const button = document.getElementById("first");

// button.addEventListener("click", () => {
//   console.log(this);
// });
