import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const myname = "Krishna";
  const myage = 21;

  console.log(children);
  return (
    <BioContext.Provider value={{ myname, myage }}>
      {children}
    </BioContext.Provider>
  );
};
