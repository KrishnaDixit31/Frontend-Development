import SeriesData from "../api/SeriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {SeriesData.map((Element) => {
        return <SeriesCard key={Element.id} Element={Element} />;
      })}
    </ul>
  );
};

export default NetflixSeries;
