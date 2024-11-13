import '../App.css'
import Avatar from './avatar'
 
export default function Contenido({saludo, contenido, usuario}){
    return(
        <div>
            <h1>{saludo}</h1>
            <p>{contenido}</p>
            <Avatar usuario={usuario} />
        </div>
    )
}
