import { useMemo } from "react";

const TotalPrime = ({ number }) => {
  const total = useMemo(() => {
    let result = 0;

    if (number > 1) result++;

    for (let i = 3; i <= number; i++) {
      result++;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          result--;
          break;
        }
      }
    }

    console.log("Prime Calculation render ");

    return result;
  }, [number]);

  console.log("Prime render");

  return <>{total}</>;
};

export default TotalPrime;
