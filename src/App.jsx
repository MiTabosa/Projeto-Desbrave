import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PaginaInicial from "./pages/Pontos/PaginaInicial";
import Scanner from "./pages/Pontos/Scanner" 
import Mapa from './pages/Mapa/Mapa';
import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro/Cadastro"
import Diretrizes from "./components/Diretrizes/Diretrizes";
import InvalidScanner from "./pages/Pontos/InvalidScanner";
import Foruns from "./pages/Forum/Foruns";



function App() {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("user"));

  return (
    <Router>
      <Routes>
        <Route path="/Foruns" element={<Foruns/>}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/paginaInicial" element={<PaginaInicial />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/invalidScanner" element={<InvalidScanner/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/diretrizes" element={<Diretrizes />} />
  
      </Routes>
    </Router>
  );
}

export default App;
