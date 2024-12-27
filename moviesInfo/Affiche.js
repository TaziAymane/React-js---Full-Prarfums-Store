import { Link } from "react-router-dom"
export default function Aff(props){
    return (
      <>
      
      <div className="card" style={{width:"250px"}}>
        <img src={props.movie.Poster} className="card-img-top" alt={props.movie.Title} />
        <div className="card-body">
        <h6 className="card-title">{props.movie.Title}</h6>
        Year of Release<h5>{props.movie.Year}</h5>
        <Link to={`/movie/${props.movie.Title}`} className="btn btn-primary">Details</Link>
        </div>
        </div>
      </>
        
      )
}