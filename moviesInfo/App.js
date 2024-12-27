import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from './Home';
import Search from './Search'
import Serie from './Series';
import Details from './Details';
import Nav from './Nav'
import Dserie from "./Detailsser";
import './App.css';

export default function App() {
  const [movie, setMovies] = useState([]);
  useEffect(()=>{
    axios.get(`http://www.omdbapi.com/?apikey=4a78675b&s=star`)
  .then(res=>(setMovies(res.data.Search)))
  })
  return (

    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home movie={movie} />} />
        <Route path="/serie" element={<Serie />} />
        <Route path="/search" element={<Search movie={movie} />} />
        <Route 
          path="/movie/:title" 
          element={<Details />}
        />
        <Route 
          path="/serie/:title"  
          element={<Dserie />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

