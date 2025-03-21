import { useState } from "react";
import "./NavbarDashboard.css";
import { IoPersonCircle } from "react-icons/io5";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function NavbarDashboard() {
    const navigate = useNavigate();
    const [dropAberto, setDropAberto] = useState(false)
  
    return (
        <main className="usuario">
          <header className="header">
            <span className="user"><TbSquareRoundedArrowDownFilled className="setaBaixo" onClick={() => setDropAberto(!dropAberto)}/> 
            {dropAberto && (
              <div className="menu-drop">
                <button onClick={() => navigate("/#")}>Início</button>
                <button onClick={() => navigate("/mapa")}>Mapa</button>
                <button onClick={() => navigate("/parceiros")}>Parceiros</button>
                <button onClick={() => navigate("/sobre")}>Sobre</button>



              </div>
            )}
            Nome do Usuário <IoPersonCircle className="iconperson"/></span>
          </header>
        </main>
    );
  }
  