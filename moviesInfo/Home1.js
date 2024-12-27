import { useState,useEffect } from "react";import { Link } from "react-router-dom";
import axios from "axios";
export default function Home1() {
    const [movie, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=4a78675b&s=batman&type=movie`)
          .then(res => {
            if (res.data.Search) {
                setMovies(res.data.Search); 
            }
          })
          .catch(error => {
            console.error("Error fetching data:", error); 
          });
      }, [movie]);
return(
        <>
          <div className="con">
            {movie.map((movie, i) => (
              <div className="card" style={{width:"250px"}} key={i} id="messi">
              <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
              <div className="card-body">
              <h6 className="card-title">{movie.Title}</h6>
              Year of Release<h5>{movie.Year}</h5>
              <Link to={`/movie/${movie.Title}`} className="btn btn-primary">Details</Link>
              </div>
              </div>
            ))}
          </div>
        </>
      )
}