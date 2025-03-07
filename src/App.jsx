import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PaginaInicial from "./components/Pontos/PaginaInicial";
import Scanner from "./components/Pontos/Scanner" 
import Sucesso from "./components/Pontos/sucesso"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foruns" element={<div>Fóruns Page</div>} />
        <Route path="/cursos" element={<div>Cursos Page</div>} />
        <Route path="/paginaInicial" element={<PaginaInicial />} />
        <Route path="/mapa" element={<div>Mapa Page</div>} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/sucesso" element={<Sucesso />} />
      
    

      </Routes>
    </Router>
  );
}

export default App;
