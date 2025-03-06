import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png"; // Imagem padrão

const Navbar = ({ isLogged, setIsLogged }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false); // Controla o popup
  const user = JSON.parse(localStorage.getItem("user")); // Pega o nome do usuário

  const handleLogout = () => {
    setIsLogged(false); 
    localStorage.removeItem("user");
    navigate("/");
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    // Fecha o popup ao clicar fora dele
    const handleClickOutside = (event) => {
      if (showPopup && !event.target.closest(".user-profile")) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="Logo" />
      <ul className="nav-links">
        <li><a onClick={() => navigate("/")}>Início</a></li>
        <li><a onClick={() => navigate("/sobre")}>Sobre</a></li>
        <li><a onClick={() => navigate("/destaque")}>Destaque</a></li>
        <li><a onClick={() => navigate("/contato")}>Contato</a></li>
        <li><a onClick={() => navigate("/mapa")}>Mapa</a></li>
      </ul>

      <div className="buttons">
        {isLogged ? (
          <div className="user-profile">
            <span>Olá, {user?.name}!</span>
            <img
              src={avatar}
              alt="Perfil"
              className="profile-pic"
              onClick={togglePopup}
            />
            {showPopup && (
              <div className="popup">
                <button onClick={() => navigate("/perfil")}>Página do Usuário</button>
                <button onClick={handleLogout}>Sair</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Button text="Login" color="#0367A5" size="small" onClick={() => navigate("/login")} />
            <Button text="Cadastre-se" color="#0367A5" size="small" onClick={() => navigate("/cadastro")} />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
