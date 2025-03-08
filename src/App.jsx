import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Foruns from './pages/Forum/Foruns';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foruns" element={<Foruns/>} />
        <Route path="/cursos" element={<div>Cursos Page</div>} />
        <Route path="/desafios" element={<div>Desafios Page</div>} />
        <Route path="/mapa" element={<div>Mapa Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
