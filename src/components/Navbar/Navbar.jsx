import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
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
          <div className={`botoes ${menuAberto ? "ativo" : ""}`}>
            <Button
              text="Login"
              color="#0367A5"
              size="small"
              onClick={() => navigate("/login")}
            />
            <Button
              text="Cadastre-se"
              color="#0367A5"
              size="small"
              onClick={() => navigate("/cadastro")}
            />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;