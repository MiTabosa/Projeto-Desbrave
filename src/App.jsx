import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro/Cadastro";
import EsqueceuSenha from "./components/RecuperaçaoSenha/EsqueceuSenha";
import RecuperarSenha from './components/RecuperaçaoSenha/RecuperarSenha';
import RedefinirSenha from './components/RecuperaçaoSenha/RedefinirSenha';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foruns" element={<div>Fóruns Page</div>} />
        <Route path="/cursos" element={<div>Cursos Page</div>} />
        <Route path="/desafios" element={<div>Desafios Page</div>} />
        <Route path="/mapa" element={<div>Mapa Page</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/redefinir-senha" element={<RedefinirSenha />} />
      </Routes>
    </Router>
  );
}

export default App;
