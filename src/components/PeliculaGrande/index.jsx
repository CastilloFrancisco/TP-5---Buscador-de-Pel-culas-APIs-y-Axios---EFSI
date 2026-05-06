import MovieData from "../MovieData";
import "./PeliculaGrande.css";

const PeliculaGrande = ({ p }) => {
    if (!p) return null;

    return (
        <div className="CardGrande">
            <div className="contenedorGrande">

                <div className="imagen">
                    <img src={p.Poster} alt={p.Title} />
                </div>

                <div className="info">
                    <h1>{p.Title}</h1>

                    <MovieData
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

            </div>
        </div>
    );
};

export default PeliculaGrande;