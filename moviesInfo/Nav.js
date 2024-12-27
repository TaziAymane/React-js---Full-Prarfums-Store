import { Link } from "react-router-dom"
export default function Nav(){
    return(
        <>
            <nav className="navbar navbar-expand-lg " id="header">
        <nav className="container-fluid" id="nav11">
            <Link className="navbar-brand" id="logo" to={'/'}><p><i id="id">M</i>oviesInfo</p></Link>
          <ul className="navbar-nav me-auto mb-0" >
            <li className="nav-item">
              <Link className="nav-link active" id="mmm"  aria-current="page" to={'/'}><p>Movies</p></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" id="mmm" aria-current="page" to={'/serie'}><p>Series</p></Link>
            </li>
    
            <li className="nav-item">
              <Link className="nav-link active" id="mmm" aria-current="page" to={'/search'}><p>Search</p></Link>
            </li>
          </ul>
          </nav>
          </nav>
        </>
    )
}