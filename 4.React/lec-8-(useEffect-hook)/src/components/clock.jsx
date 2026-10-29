import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US"));
  const [show, setShow] = useState(true);

  const btnStyle = {
    width: "200px",
    fontSize: "1.8rem",
    fontFamily: "Urbanist",
    fontWeight: "600",
    outline: "none",
    border: "none",
    borderRadius: "1rem",
    padding: "1rem",
    backgroundColor: "aqua",
    margin: "1.8rem 0rem",
  };

  useEffect(() => {
    if (!show) return;

    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US"));
      console.log("Hi");
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [show]);

  return (
    <>
      <button style={btnStyle} onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <h1>Current Time: {time}</h1>}
    </>
  );
}

export default Clock;
