import React from "react";
import { useState } from "react";

export const LiftingState = () => {
  const [inputValue, setinputValue] = useState("");
  return (
    <>
      <h1>Lifting State Up</h1>
      <InputComponent inputValue={inputValue} setinputValue={setinputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({ inputValue, setinputValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      ></input>
    </>
  );
};

const DisplayComponent = ({ inputValue }) => {
  return <p>The current input value is: {inputValue} </p>;
};
