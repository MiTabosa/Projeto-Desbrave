import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NavbarLogado.css";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

const NavbarLogado = () => {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

  // Verifica o tamanho da tela ao carregar e redimensionar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <div className="area-usuario" onClick={alternarDropdown}>
            <FaUserCircle className="icone-usuario" />
            <span className="nome-usuario">Usuário</span>
            {dropdownAberto && (
              <div className="menu-dropdown ativo">
                <button onClick={handlePerfil}>Perfil</button>
                <button onClick={handleLogout}>Sair</button>
              </div>
            )}
          </div>
          {/* Botões para mobile */}
          {isMobile && menuAberto && (
            <div className="botoesNavLogado">
              <button onClick={handlePerfil}>Ver Perfil</button>
              <button onClick={() => navigate("/login")}>Entrar</button>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavbarLogado;