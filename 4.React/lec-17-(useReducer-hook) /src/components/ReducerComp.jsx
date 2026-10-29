import { useReducer } from "react";

export const ReducerComp = () => {
  const initialState = {
    count: 0,
    increment: 2,
    decrement: 2,
  };

  const reducer = (state, action) => {
    console.log(state, action);

    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };

      case "DECREMENT":
        return { ...state, count: state.count - 1 };

      case "RESET":
        return { ...state, count: 0 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const divStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  };

  const btnStyle = {
    width: "300px",
    fontSize: "1.8rem",
    fontFamily: "sans-serif",
    fontWeight: "800",
    outline: "none",
    border: "1px solid blue",
    borderRadius: "2rem",
    padding: "2rem",
    cursor: "pointer",
    backgroundColor: "aqua",
    margin: "2rem 2rem",
  };

  return (
    <div style={divStyle}>
      <h1>Count: {state.count}</h1>
      <button style={btnStyle} onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <button style={btnStyle} onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
      <button style={btnStyle} onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
};
