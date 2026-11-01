import { NavLink } from "react-router-dom";
import "./Card.css";

export const Card = ({ curMovie }) => {
  const { Poster, imdbID, Title, Year, Type } = curMovie;
  return (
    <li className="card-item">
      <div className="card-container">
        <div className="image-container">
          <img src={Poster} alt={imdbID} />
        </div>
        <div className="content-container">
          <div className="movie-info">
            <span className="movie-type">{Type}</span>
            <h3 className="movie-title">{Title}</h3>
            <p className="movie-year">{Year}</p>
          </div>
          <NavLink to={`/movie/${imdbID}`}>
            <button className="watch-btn">Watch Now</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
