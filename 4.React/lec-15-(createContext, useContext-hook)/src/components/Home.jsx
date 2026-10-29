import { useContext } from "react";
import { BioContext } from "./CreateContext";

export const Home = () => {
  const { myname, myage } = useContext(BioContext);

  const container = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#24004c",
    color: "white",
  };

  return (
    <section style={container}>
      <h1>
        (Home) Hello my name is {myname} and i am {myage} years old
      </h1>
    </section>
  );
};
