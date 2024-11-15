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
