import { useState } from "react";

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 34 },
//   { name: "Jacob", age: 54 },
//   { name: "Michel", age: 36 },
//   { name: "Jeo", age: 45 },
// ];

export const DerivedState = () => {
  const [users] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 34 },
    { name: "Jacob", age: 54 },
    { name: "Micheal", age: 36 },
    { name: "Jeo", age: 45 },
  ]);

  // Derived state
  const userCount = users.length;
  const averageAge =
    users.reduce((accum, currElem) => accum + currElem.age, 0) / userCount;

  return (
    <>
      <div>
        <h1>Users List</h1>
        <ul>
          {users.map((currElem, index) => {
            return (
              <li key={index}>
                {currElem.name} - {currElem.age} year old
              </li>
            );
          })}
        </ul>
        <h2>Total: {userCount}</h2>
        <h3>Average: {averageAge}</h3>
      </div>
    </>
  );
};
