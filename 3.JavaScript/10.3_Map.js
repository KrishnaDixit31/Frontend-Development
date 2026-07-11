//? Map (Data Structure) :-

//* creating set :-
const m1 = new Map([
  ["Rohit", 22],
  [11, true],
  [8, "Ram"],
  [[10, 20, 30], "array"],
]);
console.log(m1);

//* add key-value pair map :-
m1.set(12, 55);
m1.set({ name: "Manish", age: 20 }, false);
console.log(m1);

//* Update key-value pair map :-
m1.set(8, 55);
console.log(m1);

//* delete key-value in map :-
m1.delete("Rohit");
console.log(m1);

//* get value from key in map :-
console.log(m1.get(8));

//* check key in map :-
console.log(m1.has(8));
console.log(m1.has(22));

//* size of map :-
console.log(m1.size);

//* Iteration over map :-
for (let num of m1) {
  console.log(num);
}
for (let [key, value] of m1) {
  console.log(key, value);
}

//* clear map :-
m1.clear();
console.log(m1);
