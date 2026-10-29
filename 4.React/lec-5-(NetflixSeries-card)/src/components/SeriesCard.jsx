import styles from "./Netflix.module.css";
import styled from "styled-components";

const ButtonWatch = styled.button`
  padding: 1.2rem 2.4rem;
  border: none;
  font-size: 1.6rem;
  background-color: ${(props) => (props.$rating >= 8.5 ? "#7dcea0" : "#f7dc6f")};
  color: #000;
  cursor: pointer;
  border-radius: 10px;
`;

export const SeriesCard = (props) => {
  const { img_url, id, name, rating, description, genre, cast, watch_url } =
    props.Element;

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={id} width="100%" height="50%" />
      </div>
      <div className={styles["card-details"]}>
        <h2>Name: {name}</h2>
        <h3>
          Rating:
          <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre.join(", ")}</p>
        <p>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank">
          {/* <button style={btn_style}>Watch Now</button> */}
          <ButtonWatch $rating={rating}>Watch Now</ButtonWatch>
        </a>
      </div>
    </li>
  );
};
