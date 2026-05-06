import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({ buscarPelicula, buscarLista }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    buscarPelicula(input.toLowerCase());
  };

  return (
    <form className="buscador">
      <input
        type="text"
        placeholder="Nombre de la película"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={(e) => {
        e.preventDefault();
        buscarPelicula(input.toLowerCase());
        setInput("");
      }}>
        Buscar 1
      </button>

      <button onClick={(e) => {
        e.preventDefault();
        buscarLista(input.toLowerCase());
        setInput("");
      }}>
        Lista
      </button>
    </form>
  );
};

export default SearchBar; 