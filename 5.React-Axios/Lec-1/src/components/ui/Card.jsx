export const Card = ({ movieData }) => {
  const { Poster, imdbID, Title, Year, Type } = movieData;

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
          <a to={`/movie/${imdbID}`}>
            <button className="watch-btn">Watch Now</button>
          </a>
        </div>
      </div>
    </li>
  );
};
