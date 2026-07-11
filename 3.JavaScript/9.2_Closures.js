//? Closures :-

//* Storing Function as Reference :-
function print() {
  function increment() {
    console.log("I am Increment Function.");
  }
  return increment; //return reference of increment function.
}

print(); //return reference of increment function. Dose not print anything.
console.log(print()); //output is reference of increment function.

const a = print(); //storing reference of increment function in a.
console.log(a); //output is reference of increment function.
console.log(a()); //output is same as that of when we call increment function.

//* Closures function :-
function counter() {
  let count = 0;
  function update() {
    count++;
    return count;
  }
  return update; //return reference of update function.
}

counter();
console.log(counter);
console.log(counter());

const counting = counter();
console.log(counting());
console.log(counting());
console.log(counting());

//* Closures for private variable :-
function Account() {
  let balance = 400;
  const user = {
    deposit: function (amount) {
      if (typeof amount === "number" && amount >= 0) {
        balance += amount;
        return `Current Balance :- ` + balance;
      } else {
        console.log(`Amount is Invalid, Please Enter Valid Amount.`);
      }
    },
  };
  return user;
}

const customer = Account();
console.log(customer);
console.log(typeof customer);

console.log(customer.deposit(300));
console.log(customer.deposit("0ne"));
