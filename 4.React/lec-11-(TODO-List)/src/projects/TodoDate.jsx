import { useEffect, useState } from "react";

export const TodoDate = () => {
  const [datetime, setdatetime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString("en-US");
      setdatetime(`${date} - ${time}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h2 className="date-time">{datetime}</h2>;
};
