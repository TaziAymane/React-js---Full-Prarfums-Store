import Aff from "./Affiche";
import Home1 from './Home1'
export default function Home(props){
    return( 
        <>
        <div className="con">
            {
                props.movie.map((mov,i)=>{
                    return ( 
                        <Aff movie={mov} key={i} /> 
                    )
                })
            }
            
        </div>
        <Home1 /></>
    )
}
