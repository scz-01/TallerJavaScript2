// import logo from './logo.svg';
// import './App.css';
// import Encabezado from './componentes/encabezado';
// import Contenido from './componentes/contenido';
// import Footer from './componentes/pieDePagina';

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://mujeresconciencia.com/app/uploads/2015/11/lamar1.png',
//   imageSize: 250,
// };
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Main from "./componentes/main";
import Input from "./componentes/input";
import BasicModal from "./componentes/modal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Main></Main>} />
        <Route path="/input" element={ <Input/>} />
        <Route path="/modal" element={ <BasicModal/> } />
      </Routes>
    </Router>
  );
}

export default App;
