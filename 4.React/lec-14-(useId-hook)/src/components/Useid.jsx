import { useId } from "react";

export const UseId = () => {
  const id = useId();

  const inputStyle = {
    fontSize: "1rem",
    fontWeight: "500",
    outline: "none",
    border: "none",
    padding: "1rem",
    borderRadius: "1.8rem",
    backgroundColor: "rgb(181 188 189)",
  };

  const btnStyle = {
    width: "200px",
    margin: "auto",
    fontSize: "1rem",
    fontWeight: "500",
    outline: "none",
    border: "none",
    padding: "1rem",
    borderRadius: "1.8rem",
    backgroundColor: "rgb(3 169 224)",
  };

  const formStyle = {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <form style={formStyle}>
      <div>
        <label htmlFor={id + "username"}>Username: </label>
        <input
          type="text"
          id={id + "username"}
          name="name"
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor={id + "email"}>Email: </label>
        <input type="email" id={id + "email"} name="email" style={inputStyle} />
      </div>
      <div>
        <label htmlFor={id + "password"}>Password: </label>
        <input
          type="password"
          id={id + "password"}
          name="password"
          style={inputStyle}
        />
      </div>
      <button type="submit" style={btnStyle}>
        Submit
      </button>
    </form>
  );
};
