import "./NavbarDashboard.css";
import { IoPersonCircle } from "react-icons/io5";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function NavbarDashboard() {
    const navigate = useNavigate();
  
    return (
        <main className="usuario">
          <header className="header">
            <span className="user"><TbSquareRoundedArrowDownFilled className="setaBaixo"/> Nome do Usuário <IoPersonCircle className="iconperson"/></span>
          </header>
        </main>
    );
  }
  