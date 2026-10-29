import { useCallback, useState, useMemo } from "react";
import "./App.css";
import Sum from "./components/Sum";
import TotalPrime from "./components/Prime";
import Post from "./components/Post";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10000);

  const handleClick = useCallback(() => {
    console.log(`Hello, I am useCallback ${count}`);
  }, [count]);

  const obj = useMemo(() => {
    return { name: "Krishna", age: 21 };
  }, []);

  console.log("App render");

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Your Current Number: {number}</h2>
      <button onClick={() => setNumber(number + 1000)}>Increment Number</button>
      <h3>
        Total Prime Number between 1 and {number} is:{" "}
        <TotalPrime number={number} />
      </h3>
      <Sum number={number} />
      <button onClick={handleClick}>Greeting Click</button>
      <Post value={obj} />
    </>
  );
}

export default App;
