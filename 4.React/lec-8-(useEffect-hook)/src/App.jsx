import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState([]);
  const [count, setCount] = useState(30);

  useEffect(() => {
    async function GithubProfile() {
      const response = await fetch(
        `https://api.github.com/users?per_page=${count}`,
      );
      const data = await response.json();
      setUser(data);
      console.log("Hello");
    }

    GithubProfile();
  }, [count]);

  const imgStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
  };

  const inputStyle = {
    width: "200px",
    fontSize: "1.8rem",
    fontFamily: "Urbanist",
    fontWeight: "500",
    outline: "none",
    border: "none",
    borderRadius: "1rem",
    padding: "1rem",
    backgroundColor: "aqua",
    marginBottom: "2rem",
  };

  return (
    <>
      <h1>Github Profile</h1>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        style={inputStyle}
      />
      <div style={imgStyle}>
        {user.map((user) => (
          <img
            src={user.avatar_url}
            height={"100px"}
            width={"100px"}
            key={user.login}
          />
        ))}
      </div>
    </>
  );
}

export default App;
