import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Aff from "./Affiche";
export default function Search(props) {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch movies from OMDB API when the search value changes
  useEffect(() => {
    if (value) {
      axios.get(`http://www.omdbapi.com/?apikey=4a78675b&s=${value}`)
        .then(res => setMovies(res.data.Search || []))
        .catch(error => console.error("Error fetching data:", error));
    }
  }, [value]);

  // Handle search submission and set selected movie
  function handleSearchSubmit(e) {
    e.preventDefault();
    setSelectedMovie(props.movies.find(movie => movie.Title.toLowerCase() === value.toLowerCase()) || null);
  }

  return (
<>
      <nav className="container-fluid" id="header">
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit} id="form">
                  <input class="form-control me-2" type="text" placeholder="Search..." aria-label="Search" onChange={(e) => { setValue(e.target.value) }} />
              <button className="btn btn-subtle" type="submit"><i className="fa-solid fa-magnifying-glass fa-lg"></i></button>
          </form>
      </nav> 
      <div className="container mt-4">
        <div className="row">
          {selectedMovie ? (
            <Aff />
          ) : (
            movies.map((movie, i) => (
              <Aff movie={movie} key={i}/>
            ))
          )}
        </div>
      </div>
      </>
  );
}

