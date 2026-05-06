export default function MovieDetail({ titulo, año, tipo }) {

    if (!titulo || !año || !tipo) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="detalle">
            <h3>{titulo}</h3>
            <h5>{año}</h5>
            <h5>{tipo}</h5>
        </div>
    );
}