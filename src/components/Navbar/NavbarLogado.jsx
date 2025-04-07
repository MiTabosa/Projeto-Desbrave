import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NavbarLogado.css";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { useAutenticacao } from "../../context/AutenticacaoContext";

const NavbarLogado = ({ userData }) => {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { deslogar } = useAutenticacao();

  const { usuario } = useAutenticacao();
  const isAdmin = userData?.role === "admin";

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const alternarDropdown = () => {
    setDropdownAberto(!dropdownAberto);
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("usuarioLogado");
  //   navigate("/login");
  //   window.location.reload();
  // };

  const handleLogout = () => {
    deslogar(); // limpa o contexto e localStorage
    navigate("/login");
  };
  

  const handlePerfil = () => {
    navigate(isAdmin ? "/dashboardAdmin" : "/dashboard");
  };

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
          <div className="links-navegacao">
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
          </div>
          
          <div className="area-usuario" onClick={alternarDropdown}>
            <FaUserCircle className="icone-usuario" />
            <span className="nome-usuario">
              {userData?.nome || "Usuário"} {isAdmin ? "(Admin)" : ""}
            </span>
            {dropdownAberto && (
              <div className="menu-dropdown ativo">
                <button onClick={handlePerfil}>
                  {isAdmin ? "Painel Admin" : "Meu Perfil"}
                </button>
                <button onClick={handleLogout}>Sair</button>
              </div>
            )}
          </div>
          {isMobile && menuAberto && (
            <div className="botoesNavLogado">
              <button onClick={handlePerfil}>
                {isAdmin ? "Painel Admin" : "Meu Perfil"}
              </button>
              <button onClick={handleLogout}>Sair</button>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavbarLogado;