import { useState } from "react";
import "./NavbarDashboard.css";
import { IoPersonCircle } from "react-icons/io5";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavbarDashboard() {
  const navigate = useNavigate();
  const [dropAberto, setDropAberto] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <>
      {menuAberto && <div className="overlay" onClick={alternarMenu}></div>}

      <main className="usuario">
        <header className="header">
          {/* Ícone do menu hambúrguer */}
          <div className="menu-dashboard-icon" onClick={alternarMenu}>
            <GiHamburgerMenu size={24} />
          </div>

          <span className="user">
            <TbSquareRoundedArrowDownFilled
              className="setaBaixo"
              onClick={() => setDropAberto(!dropAberto)}
            />

            {dropAberto && (
              <div className="menu-drop">
                <button onClick={() => navigate("/#")}>Início</button>
                <button onClick={() => navigate("/mapa")}>Mapa</button>
                <button onClick={() => navigate("/parceiros")}>Parceiros</button>
                <button onClick={() => navigate("/sobre")}>Sobre</button>
              </div>
            )}
            Nome do Usuário <IoPersonCircle className="iconperson" />
          </span>
        </header>
      </main>
    </>
  );
}
