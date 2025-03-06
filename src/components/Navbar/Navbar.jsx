import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Button from "../Button/Button";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); 

  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="Logo" />
      <ul className="nav-links">
        <li><a href="#" onClick={() => navigate("/")}>Início</a></li>
        <li><a href="#" onClick={() => navigate("/sobre")}>Sobre</a></li>
        <li><a href="#" onClick={() => navigate("/destaque")}>Destaque</a></li>
        <li><a href="#" onClick={() => navigate("/contato")}>Contato</a></li>
        <li><a href="#" onClick={() => navigate("/mapa")}>Mapa</a></li>
      </ul>
      <div className="buttons">
      <Link to="/login">
        <Button text="Login" color="#0367A5" size="small" onClick={() => navigate("/login")} />
        </Link>
        <Button text="Cadastre-se" color="#0367A5"  size="small" onClick={() => navigate("/Cadastro")} />
      </div>
    </nav>
  );
};

export default Navbar;
