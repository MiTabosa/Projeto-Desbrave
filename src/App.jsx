import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PaginaInicial from "./components/Pontos/PaginaInicial";
import Scanner from "./components/Pontos/Scanner" 
import Mapa from './pages/Mapa/Mapa'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foruns" element={<div>Fóruns Page</div>} />
        <Route path="/cursos" element={<div>Cursos Page</div>} />
        <Route path="/paginaInicial" element={<PaginaInicial />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/scanner" element={<Scanner />} />
      </Routes>
    </Router>
  );
}

export default App;
