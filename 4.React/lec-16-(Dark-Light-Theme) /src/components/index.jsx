import { createContext, use, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const handletoggleTheme = () => {
    return setTheme(theme == "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={{ theme, handletoggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const Theme = () => {
  const { theme, handletoggleTheme } = use(ThemeContext);

  const containerstyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme === "dark" ? "#222" : "#fff",
  };

  const headingstyle = {
    fontSize: "4rem",
    fontFamily: "sans-serif",
    fontWeight: "900",
    color: theme === "dark" ? "#fff" : "#000",
  };

  const parastyle = {
    fontSize: "2.4rem",
    fontFamily: "sans-serif",
    fontWeight: "800",
    color: theme === "dark" ? "#fff" : "#000",
  };

  const btnStyle = {
    width: "400px",
    fontSize: "1.8rem",
    fontFamily: "sans-serif",
    fontWeight: "800",
    outline: "none",
    border: "1px solid blue",
    borderRadius: "2rem",
    padding: "2rem",
    cursor: "pointer",
    backgroundColor: "aqua",
    margin: "4rem 2rem",
  };

  return (
    <section style={containerstyle}>
      <h1 style={headingstyle}>Dark Light Mode Website</h1>
      <p style={parastyle}>Welcome to React Website</p>
      <button style={btnStyle} onClick={handletoggleTheme}>
        Switch to {theme == "dark" ? "Light" : "Dark"} Mode
      </button>
    </section>
  );
};
