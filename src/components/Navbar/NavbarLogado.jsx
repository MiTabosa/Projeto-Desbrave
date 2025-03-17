import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavbarLogado.css"; // Estilos específicos para o Navbar logado
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa"; // Ícone de usuário

const NavbarLogado = () => {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const alternarDropdown = () => {
    setDropdownAberto(!dropdownAberto);
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
        <div className="menu-icon" onClick={alternarMenu}>
          <GiHamburgerMenu />
        </div>
        <ul className={`nav-links ${menuAberto ? "active" : ""}`}>
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
            <a href="#" onClick={() => navigate("/destaque")}>
              Destaque
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
          <div className={`user-area ${menuAberto ? "active" : ""}`}>
            <div className="user-info" onClick={alternarDropdown}>
              <FaUserCircle className="user-icon" />
              <span className="user-name">Usuário</span>
            </div>
            {dropdownAberto && (
              <div className="dropdown-menu">
                <button onClick={handlePerfil}>Perfil</button>
                <button onClick={handleLogout}>Sair</button>
              </div>
            )}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default NavbarLogado;