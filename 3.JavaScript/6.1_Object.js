//? Object :-

let user = {
  name: "Krishna",
  age: 20,
  gender: "Male",
};

console.log(user);

// access any value in object :-

console.log(user.name);
console.log(user["name"]);
console.log(user.age);
console.log(user["age"]);

//* Key store as string :-

let user1 = {
  name: "Krishna",
  "account number": 23456,
};
console.log(user1);
console.log(user1["account number"]);

//* CRUD (Create Read Update Delete) Operation on Object :-

// Create
user1.age = 20;
user1.gender = "Male";
console.log(user1);

// Update
user1["account number"] = 12345;
// Read
console.log(user1);

// Delete
delete user1.gender;
console.log(user1);

//* Print all keys of an object :-

let obj1 = {
  name: "Krishna",
  age: 20,
  gender: "Male",
  address: "Indore",
};
console.log(obj1);
console.log(Object.keys(obj1));

//* Print all values of an object :-
console.log(Object.values(obj1));

//* Print both keys and values of an object :-
console.log(Object.entries(obj1));

//* Loops over Object :-

// for-in loop
/* print keys of object */
for (let keys in obj1) {
  console.log(keys);
}
/* print keys with values of object */
for (let keys in obj1) {
  console.log(keys, "-", obj1[keys]);
}

// for-of loop
/* print keys of object */
const temparr = Object.keys(obj1);
for (let keys of temparr) {
  console.log(keys);
}
/* print keys with values of object */
for (let keys of Object.keys(obj1)) {
  console.log(keys, "-", obj1[keys]);
}
for (let [keys, values] of Object.entries(obj1)) {
  console.log(keys, ":", values);
}

//* Destructuring of object :-

let info = {
  name: "Mohan",
  age: 30,
  gender: "Male",
  address: "Mumbai",
};

// 1.
const name1 = info.name;
console.log(name1);

// 2. preferred
const { name, age, gender } = info;
console.log(name, age, gender);
/* change variable name */
const { name: username, age: year } = info;
console.log(username, year);

//* function inside object :-

const obj2 = {
  name: "Mohan",
  age: 30,
  greeting: function () {
    console.log("Hello Coders");
    return 20;
  },
};
obj2.greeting();
const a = obj2.greeting();
console.log(a);

// 'this' keywords
let obj3 = {
  name: "Krishna",
  age: 20,
  greeting: function () {
    console.log(`Hello ${this.name}`);
    return 20;
  },
};
let obj4 = {
  name: "Rahul",
  age: 21,
};
obj4.greeting = obj3.greeting;
obj3.greeting();
obj4.greeting();

//* Nested Object :-

const employ = {
  name: "Mohan",
  age: 30,
  gender: "Male",
  address: {
    city: "indore",
    state: "MP",
  },
};
console.log(employ);
console.log(employ.name);
console.log(employ.address);
console.log(employ.address.city);

// Copy by reference
const employ1 = employ;
console.log(employ1);
employ1.name = "Shyam";
console.log(employ.name);
console.log(employ1.name);

// Copy by spread operator
const employ2 = { ...employ };
console.log(employ2);
employ2.name = "Krishna";
console.log(employ.name);
console.log(employ2.name);

employ2.address.city = "Dewas";
console.log(employ.address.city);
console.log(employ2.address.city);

// Best Method to copy object
const employ3 = structuredClone(employ);
console.log(employ3);
employ3.name = "Krishna";
console.log(employ.name);
console.log(employ3.name);

employ3.address.city = "Bhopal";
console.log(employ.address.city);
console.log(employ3.address.city);

//* number-key in object :-

const student = {
  name: "Rohit",
  age: 30,
  0: 100,
  20: "indore",
};
console.log(student);
console.log(student[0]);
console.log(student[20]);