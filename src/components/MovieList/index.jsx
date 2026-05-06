import "./MovieList.css";
import MovieCard from "../MovieCard";

const MovieList = ({ lista, onSelect }) => {

    if (!lista || lista.length === 0) {
        return <p>No hay películas para mostrar</p>;
    }

    return (
        <div className="lista">
            {lista
                .filter(pelicula => pelicula)
                .map((pelicula) => (
                    <MovieCard
                        key={pelicula.imdbID}
                        pelicula={pelicula}
                        onClick={() => onSelect(pelicula)}
                    />
                ))}
        </div>
    );
};

export default MovieList;