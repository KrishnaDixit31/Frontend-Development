//? Set (Data Structure) :-

//* creating set :-
const arr = [10, 20, 30, 10, 50, 20, 10];
const s1 = new Set(arr);
console.log(s1);

//* add value in set :-
s1.add(12);
console.log(s1);

//* delete value in set :-
s1.delete(20);
console.log(s1);

//* check value in set :-
console.log(s1.has(12));
console.log(s1.has(22));

//* size of set :-
console.log(s1.size);

//* Iteration over set :-
for (let num of s1) {
  console.log(num, num * 2);
}

//* clear set :-
s1.clear();
console.log(s1);