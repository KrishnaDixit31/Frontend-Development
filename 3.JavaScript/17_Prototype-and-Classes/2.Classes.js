//? Classes:-

const obj1 = {
  name: "Krishna",
  age: 21,
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

const obj2 = {
  name: "Rohit",
  age: 28,
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

const obj3 = {
  name: "Shyam",
  age: 31,
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

//* above syntax me code ka repetition hai to ise hum classes ki help se aasani se likh sakte hai

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hii, ${this.name}`);
  }
}

const person1 = new person("Krishna", 21);
const person2 = new person("Rohit", 28);
const person3 = new person("Shyam", 31);

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person1.sayHi());

//* Inheritance:-
class Customer extends person {
  constructor(name, age, account, balance) {
    super(name, age);
    this.account = account;
    const obj = {
      name: "Rohit",
      age: 20,
    };

    const obj2 = Object.create(obj);
    obj2.account = 10;

    console.log(obj2.account);
    this.balance = balance;
  }

  checkBalance() {
    return this.balance;
  }
}

const c1 = new Customer("Mohan", 20, 123456, 540);

console.log(c1);
console.log(c1.checkBalance());
