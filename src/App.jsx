import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PaginaInicial from "./components/Pontos/PaginaInicial";
import Scanner from "./components/Pontos/Scanner" 
import Mapa from './pages/Mapa/Mapa';
import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro/Cadastro"
import Diretrizes from "./components/Diretrizes/Diretrizes";
import InvalidScanner from "./components/Pontos/InvalidScanner";
<<<<<<< HEAD
import Sobre from "./components/Sobre/Sobre";

=======
import Forum from "./pages/Forum/Foruns"
>>>>>>> 5eebc34158f5f43d6e98c4b891716de1c8eaffad



function App() {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("user"));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paginaInicial" element={<PaginaInicial />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/invalidScanner" element={<InvalidScanner/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/diretrizes" element={<Diretrizes />} />
<<<<<<< HEAD
        <Route path="/sobre" element={<Sobre />} />
=======
        <Route path="/forum" element={<Forum />} />
>>>>>>> 5eebc34158f5f43d6e98c4b891716de1c8eaffad
        
      </Routes>
    </Router>
  );
}

export default App;
