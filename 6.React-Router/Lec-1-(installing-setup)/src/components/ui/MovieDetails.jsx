import { useLoaderData, NavLink } from "react-router-dom";
import "./MovieDetails.css";

export const MovieDetails = () => {
  //? First way:-
  //   const params = useParams();
  //   console.log(params);

  //? Second way:-
  const movieData = useLoaderData();
  console.log(movieData);

  const {
    Actors,
    Poster,
    Title,
    Type,
    Year,
    Plot,
    BoxOffice,
    imdbID,
    imdbRating,
    Runtime,
    Genre,
    Director,
  } = movieData;

  return (
    <section className="section-movie-details container">
      <div className="movie-container">
        <div className="movie-poster">
          <img src={Poster} alt={imdbID} />
        </div>
        <div className="movie-content">
          <p className="movie-type">{Type}</p>
          <h2 className="movie-title">{Title}</h2>

          <div className="movie-meta">
            <span><strong>Rating:</strong> {imdbRating}</span>
            <span><strong>Runtime:</strong> {Runtime}</span>
            <span><strong>Year:</strong> {Year}</span>
          </div>

          <p className="movie-genre">{Genre}</p>

          <div className="movie-info-block">
            <p className="movie-plot">{Plot}</p>
            <p><strong>Director:</strong> {Director}</p>
            <p><strong>Actors:</strong> {Actors}</p>
            <p><strong>Box Office:</strong> {BoxOffice}</p>
          </div>

          <NavLink to="/movie" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};
