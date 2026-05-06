import "./movieCard.css";
import MovieDetail from "../MovieDetail";

const MovieCard = ({ pelicula, onClick }) => {
  if (!pelicula) return null;

  return (
    <div className="Card" onClick={onClick}>
      <h2>{pelicula.Title}</h2>

      <img src={pelicula.Poster} alt={pelicula.Title} />

      <MovieDetail
        titulo={pelicula.Title}
        año={pelicula.Year}
        tipo={pelicula.Type}
      />
    </div>
  );
};

export default MovieCard;