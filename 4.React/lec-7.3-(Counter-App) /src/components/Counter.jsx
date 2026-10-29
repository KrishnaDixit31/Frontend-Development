import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState("");

  function increaseNumber() {
    setCount(count + step);
  }

  function decrementNumber() {
    setCount(count - step);
  }

  function resetCount() {
    setCount(0);
    setStep("");
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>Counter: {count}</p>
      <div>
        <label>
          Steps:
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="grid-three--cols">
        <button onClick={increaseNumber} disabled={count >= 100}>
          Increment
        </button>
        <button onClick={decrementNumber} disabled={count <= 0}>
          Decrement
        </button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </>
  );
};
