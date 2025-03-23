import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavbarLogado.css";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

const NavbarLogado = () => {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const handleLogout = () => {
    // Lógica para logout (esperar o back)
    navigate("/login");
  };

  const handlePerfil = () => {
    navigate("/dashboard");
  };

  return (
    <>
      {menuAberto && <div className="overlay" onClick={alternarMenu}></div>}
      <nav className="navbar">
        <a href="/">
          <img className="logo" src={logo} alt="Logo" />
        </a>
        <div className="icone-menu" onClick={alternarMenu}>
          <GiHamburgerMenu />
        </div>
        <ul className={`links-nav ${menuAberto ? "ativo" : ""}`}>
          <div className="area-usuario">
            <div className="info-usuario">
              <FaUserCircle className="icone-usuario" />
              <span className="nome-usuario">Usuário</span>
            </div>
          </div>
          <li>
            <a href="#" onClick={() => navigate("/")}>
              Início
            </a>
          </li>
          <li>
            <a href="#" onClick={() => navigate("/sobre")}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#" onClick={() => navigate("/parceiros")}>
              Parceiros
            </a>
          </li>
          <li>
            <a href="#" onClick={() => navigate("/mapa")}>
              Mapa
            </a>
          </li>
          <div className="botoesNavLogado">
            <button onClick={handlePerfil}>Ver Perfil</button>
            <button onClick={handleLogout}>Sair</button>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default NavbarLogado;