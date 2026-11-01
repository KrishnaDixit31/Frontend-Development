import { useLoaderData } from "react-router-dom";
import { Card } from "../components/ui/Card";

export const Movie = () => {
  const movieData = useLoaderData();
  console.log(movieData);
  return (
    <section className="section-movie container">
      <ul className="movie-grid">
        {movieData.Search.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie={curMovie} />;
        })}
      </ul>
    </section>
  );
};
