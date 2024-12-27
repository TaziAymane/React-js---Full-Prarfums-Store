import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Dserie() {
  const { title } = useParams();
  const [serie, setSerie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=4a78675b&t=${title}&type=series`)
      .then(res => {
        setSerie(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching series details:", err);
        setLoading(false);
      });
  }, [title]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!serie) {
    return <div>Series not found.</div>;
  }

  return (
    <div className="card1">
        <div className="card-thumbnail1">
          <img src={serie.Poster} />
        </div>
        <div className="card-body1">
          <span className="card-title1">{serie.Title}</span>
          <p>
            <span>{serie.Year}</span>  
            <span>{serie.Genre}</span>
          </p>
          <p className="card-description1">{serie.Plot}</p>
          <div className="eeee"><button className="trailer">Add Watch List</button><button className="trailer"> Watched</button></div>
          <Link to={`/serie`} className="btn btn-secondary">Home</Link>
        </div>
      </div>
  );
}
