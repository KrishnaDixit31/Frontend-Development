import { useRef, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const intrervalIdRef = useRef(null);

  const btnStyle = {
    width: "200px",
    fontSize: "1.8rem",
    fontFamily: "Urbanist",
    fontWeight: "600",
    outline: "none",
    border: "none",
    borderRadius: "2rem",
    padding: "1rem",
    cursor: "pointer",
    backgroundColor: "aqua",
    margin: "1.8rem 1rem",
  };

  function handleStart() {
    if (intrervalIdRef.current != null) {
      return;
    }

    intrervalIdRef.current = setInterval(() => {
      setTime((time) => time + 1);
      console.log("hii");
    }, 1000);
  }

  function handleStop() {
    clearInterval(intrervalIdRef.current);
    intrervalIdRef.current = null;
  }

  function handleRestart() {
    clearInterval(intrervalIdRef.current);
    intrervalIdRef.current = null;
    setTime(0);
  }

  return (
    <>
      <h1>Stopwatch: {time}</h1>
      <button style={btnStyle} onClick={handleStart}>
        Start
      </button>
      <button style={btnStyle} onClick={handleStop}>
        Stop
      </button>
      <button style={btnStyle} onClick={handleRestart}>
        Restart
      </button>
    </>
  );
}

export default App;
