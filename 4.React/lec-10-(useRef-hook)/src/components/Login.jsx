import { useRef } from "react";

function Login() {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  console.log("render");

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
  };

  function handleSubmit(e) {
    e.preventDefault();

    console.log(emailRef.current.value);
    console.log(passRef.current.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h1>Form</h1>
        <input
          style={inputStyle}
          type="email"
          ref={emailRef}
          placeholder="enter your email"
        />
        <input
          style={inputStyle}
          type="password"
          ref={passRef}
          placeholder="password"
        />
        <button style={btnStyle} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
export default Login;
