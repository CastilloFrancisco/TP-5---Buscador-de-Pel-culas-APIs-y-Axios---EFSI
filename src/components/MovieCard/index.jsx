import "./movieCard.css";
import movieDetail from "../MovieDetail";
const Card = ({ pelicula }) => {
  if (!pelicula) return null;

  return (
    <div className={`Card`}>
      <h2>{pelicula.Title}</h2>

      <img src={pelicula.Poster} alt={pelicula.Title} />

      <movieDetail titulo={pelicula.Title} año={pelicula.Year} tipo={pelicula.Type}/>
    </div>
  );
};

export default Card;