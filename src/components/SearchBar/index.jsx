  import "./SearchBar.css";
  import { useState } from "react";

  const SearchBar = ({ buscarPelicula }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault(); 
      buscarPelicula(input.toLowerCase());
    };

    return (
      <form className="buscador" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de la película"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    );
  };

  export default SearchBar; 