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
      "tt5726616", // CMBYN
      "tt0147800", // 10 cosas que odio de vos
      "tt3783958", // La La Land
      "tt0074119", // All the Presidents Men
      "tt0388795", // Secreto en la Montaña
      "tt2980516", // La teoría del Todo
      "tt0119217", // Good Will Hunting
      "tt4574334", // Stranger Things
      "tt4975722", // Moonlight
      "tt4034228", // Manchester by the sea
      "tt21192142", // All of us Strangers
      "tt0480249", // Soy leyenda
      "tt23867882", // Pokemon
      "tt0371746", // Ironman
      "tt1442556", // Gaturro
      "tt21436120", // Gaturro serie
      "tt0952640", // Alvin y las ardillas
      "tt1615918", // Alvin y las ardillas 3
      "tt0412142", // Dr House en honor a Bruno
      "tt1329164"  // Algo de Dr House en honor a Bruno tmb
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