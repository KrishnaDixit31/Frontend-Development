import { useState } from "react";

function App() {
  // let count = 0;
  // function increaseNumber() {

  //   count++;
  //   // console.log(count);
  //   const para = document.querySelector("p");
  //   para.textContent = `Counter: ${count}`;
  //   const button = document.querySelector("button");
  //   button.textContent = `Increment: ${count}`;

  // }

  const [count, setCount] = useState(0);
  function increaseNumber() {
    setCount(count + 1);
  }

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={increaseNumber}>Increment: {count}</button>
    </>
  );
}

export default App;
