import axios from "axios";
import { useState, useEffect } from "react";
import './App.css';
import { Link } from "react-router-dom";
import Dserie from "./Detailsser";
export default function Serie() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=4a78675b&s=from&type=series`)
      .then(res => {
        if (res.data.Search) {
          setSeries(res.data.Search); 
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error); 
      });
  }, [series]);

  return (
    <>
      <div className="con">
        {series.map((se, i) => (
          <div className="card" style={{width:"250px"}} key={i}>
          <img src={se.Poster} className="card-img-top" alt={se.Title} />
          <div className="card-body">
          <h6 className="card-title">{se.Title}</h6>
          Year of Release<h5>{se.Year}</h5>
          <Link to={`/serie/${se.Title}`} className="btn btn-primary">Details</Link>
          </div>
          </div>
        ))}
      </div>
    </>
  );
}
