import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Details() {
  const { title } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=4a78675b&t=${title}`)
      .then(res => {
        setMovie(res.data);
      })
  }, [title]);
  return (
    <div className="card1">
        <div className="card-thumbnail1">
          <img src={movie.Poster} />
        </div>
        <div className="card-body1">
          <span className="card-title1">{movie.Title}</span>
          <p>
            <span>{movie.Year}</span>  
            <span>{movie.Genre}</span>
          </p>
          <p className="card-description1">{movie.Plot}</p>
          <div className="eeee"><button className="trailer">Add Watch List</button><button className="trailer"> Watched</button></div>
          <Link to={`/`}  className="btn btn-secondary">Home</Link>
        </div>
      </div>
  );
}

