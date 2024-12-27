import { Link } from "react-router-dom"
export default function Aff(props){
    return (
      <>
      <div className="card" style={{width:"250px"}}>
        <img src={props.serie.Poster} className="card-img-top" alt={props.serie.Title} />
        <div className="card-body">
        <h6 className="card-title">{props.serie.Title}</h6>
        Year of Release<h5>{props.serie.Year}</h5>
        <Link to={`/serie/${props.serie.Title}`} className="btn btn-primary">Details</Link>
        </div>
        </div>
      </>
        
      )
}