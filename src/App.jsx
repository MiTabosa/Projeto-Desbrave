import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pontos from "./components/Pontos/Pontos"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foruns" element={<div>Fóruns Page</div>} />
        <Route path="/cursos" element={<div>Cursos Page</div>} />
        <Route path="/Pontos" element={<Pontos/>} />
        <Route path="/mapa" element={<div>Mapa Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
