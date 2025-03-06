import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foruns" element={<div>Fóruns Page</div>} />
        <Route path="/cursos" element={<div>Cursos Page</div>} />
        <Route path="/desafios" element={<div>Desafios Page</div>} />
        <Route path="/mapa" element={<div>Mapa Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
