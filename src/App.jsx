import { useEffect, useState } from 'react'

import axios from "axios";
import './App.css'
import SearchBar from './components/SearchBar';
import Error from './components/ErrorMessage';
import PeliculaGrande from './components/PeliculaGrande';
import MovieList from './components/MovieList'

function App() {
  const [lista, setLista] = useState([]);
  const [error, setError] = useState("");
  const [peliculaGrande, setPelicula] = useState("")
  useEffect(() => { obtenerListaBase(); }, []);

  const buscarPelícula = async (texto) => {

    if (!texto) {
      setError("Ingresá una película");
      return;
    }

    try {
      setError("");

      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=e84efcd2&t=${texto}`
      );

      setLista([]);
      setPelicula(response.data);

    } catch (err) {

      setError("No existe esa película :(");
      setLista([]);

    }
  };

  const buscarLista = async (texto) => {

    if (!texto) {
      setPelicula(null);      
      obtenerListaBase();
      return;
    }

    try {
      setError("");
      setPelicula(null); 

      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=e84efcd2&s=${texto}&page=1`
      );

      if (!response.data.Search) {
        setLista([]);
        setError("No se encontraron resultados");
        return;
      }

      const detalles = await Promise.all(
        response.data.Search.map(async (p) => {
          const res = await axios.get(
            `http://www.omdbapi.com/?apikey=e84efcd2&i=${p.imdbID}`
          );
          return res.data;
        })
      );

      setLista(detalles);

    } catch {
      setError("Error buscando lista");
    }
  };

  const obtenerListaBase = async () => {
    const movieIds = [
      "tt0952640", 
      "tt1231580", 
      "tt1615918", 
      "tt2974918", 
      "tt0084972", 
      "tt0799921", 
      "tt0207957", 
      "tt0069698", 
      "tt0054514", 
      "tt3529484", 
      "tt1321808",
      "tt2270482", 
      "tt01", //muestra cargando
      "tt5645298", 
      "tt1442556", 
      "tt11983728",
      "tt0842012", 
      "tt0428803", 
      "tt0412142", 
      "tt21436120"  
    ];

    const shuffled = [...movieIds].sort(() => Math.random() - 0.5);
    const seleccionados = shuffled.slice(0, 10);

    const detalles = await Promise.all(
      seleccionados.map(async (id) => {
        const res = await axios.get(
          `http://www.omdbapi.com/?apikey=e84efcd2&i=${id}`
        );
        return res.data;
      })
    );

    setLista(detalles);
  };



  return (
    <>
      <SearchBar
        buscarPelicula={buscarPelícula}
        buscarLista={buscarLista}
      />
      {error && <Error mensaje={error} />}
      <PeliculaGrande p={peliculaGrande} />

      <MovieList lista={lista} onSelect={setPelicula} />
    </>
  );
}

export default App;