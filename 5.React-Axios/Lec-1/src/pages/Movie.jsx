import { useEffect, useState } from "react";
import { Card } from "../components/ui/Card";
import { getMovie } from "../services/GetServices";

export const Movie = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const res = await getMovie();
        console.log(res.data.Search);
        setData(res.data.Search);
      } catch (error) {
        console.log("Error message", error.message);
        console.log("Error status", error.response.status);
        console.log("Error data", error.response.data);
      }
    };

    getMovieData();
  }, []);

  return (
    <ul className="container grid">
      {data &&
        data.map((curEle) => {
          return <Card key={curEle.imdbID} movieData={curEle} />;
        })}
    </ul>
  );
};
