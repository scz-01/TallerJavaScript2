import '../App.css'

export default function Avatar({usuario}){
    return(
        <div>
              <h1>{usuario.name}</h1>
    <img
      className="avatar"
      src={usuario.imageUrl}
      alt={'Foto de ' + usuario.name}
      style={{
        width: usuario.imageSize,
        height: usuario.imageSize
      }
    }/>
        </div>
    )

}