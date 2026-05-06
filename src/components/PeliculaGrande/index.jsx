import MovieData from "../MovieData";

const PeliculaGrande = ({ p }) => {
    if (!p) return null;

    return (
        <div className="Card">
            <h1>{p.Title}</h1>

            <img src={p.Poster} alt={p.Title} />

            <MovieData
                titulo={p.Title}
                año={p.Year}
                genero={p.Genre}
                director={p.Director}
                actores={p.Actors}
                sinopsis={p.Plot}
                duracion={p.Runtime}
                idioma={p.Language}
                pais={p.Country}
                puntaje={p.imdbRating}
            />
        </div>
    );
};

export default PeliculaGrande;