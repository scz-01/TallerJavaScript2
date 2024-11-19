import Encabezado from './encabezado';
import Contenido from './contenido';
import Footer from './pieDePagina';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://mujeresconciencia.com/app/uploads/2015/11/lamar1.png',
  imageSize: 250,
};


function Main() {

    // Ejemplo con useEffect
    useEffect( () => {
      console.log("Componente main montado correctamente")
      
      return () => {
        console.log("Componente main desmontado correctamente")
      }

    },[] )
    

  return (
    <>
    <Encabezado/>
    <Contenido saludo={'Hola mundo'} 
      contenido={'El contenido de la pagina'}
      usuario={user} 
    />

    <h1>Lista de componentes navegables</h1>
    <ul>
        <li> <Link to="/">Inicio</Link></li>
        <li> <Link to="/input">Ejemplo input</Link></li>
        <li> <Link to="/modal"> Ejemplo del modal</Link></li>
        <li> <Link to="/rym">Listado de personajes</Link></li>
    </ul>

    <Footer></Footer>
    </>
  );
}

export default Main;