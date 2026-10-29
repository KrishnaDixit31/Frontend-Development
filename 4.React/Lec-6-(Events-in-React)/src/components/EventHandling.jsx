import "./Event.css";

// function handleButtonClick() {
//   alert("Hay I am onClick Event");
// }

const handleButtonClick = (event) => {
  console.log(event);
  console.log(event.target);
  alert("Hay I am onClick Event");
};

const handleUser = (user) => {
  console.log(`Hay ${user}, Welcome`);
};

export const EventHandeling = () => {
  return (
    <>
      <button onClick={handleButtonClick}>Click Me 1</button>
      <br />
      <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
      <br />
      <button onClick={() => console.log("Hay I am Inline Function Event")}>
        Click Me 3
      </button>
      <br />
      <button onClick={() => handleUser("Krishna")}>Click Me 4</button>
    </>
  );
};
