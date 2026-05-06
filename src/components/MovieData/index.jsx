export default function movieData({ titulo, año, genero, director, actores, sinopsis, duracion, idioma, pais, puntaje = null }) {

    return (
        <div className="data">
            <h3>{titulo}</h3>
            <h5>{año}</h5>
            <h5>{genero}</h5>
            <h5>{director}</h5>
            <h5>{actores}</h5>
            <h5>{sinopsis}</h5>
            <h5>{duracion}</h5>
            <h5>{idioma}</h5>
            <h5>{pais}</h5>
            <h5>{puntaje}</h5>

        </div>
    );
}