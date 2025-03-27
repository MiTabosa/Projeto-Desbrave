import "./Sidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { PiBookOpenTextThin } from "react-icons/pi";
import { FaAward } from "react-icons/fa";
import { GrTicket } from "react-icons/gr";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logoSimplicada from "../../assets/logo-simplificada.png";

export default function Sidebar({ children }) {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <div className="dashboard-container">
      <aside className={`sidebar ${isMobile ? "mobile-sidebar" : ""}`}>
      <div className="conteiner-logo" onClick={() => navigate("/")}>
              <img className="logo-simplificada" src={logoSimplicada} alt="Logo" />
          </div>
        <ul>
          <li
            className={`sidebar-item ${
              location.pathname === "/dashboard" ? "sidebar-item-active" : ""
            }`}
            onClick={() => navigate("/dashboard")}
          >
            <MdOutlineDashboard className="icon" /> {!isMobile && <span>Dashboard</span>}
          </li>

          <li
            className={`sidebar-item ${
              location.pathname === "/meusCursos" ? "sidebar-item-active" : ""
            }`}
            onClick={() => navigate("/meusCursos")}
          >
            <PiBookOpenTextThin className="icon" /> 
            {!isMobile && <span>Meus cursos</span>}
          </li>

          <li
            className={`sidebar-item ${
              location.pathname === "/certificados" ? "sidebar-item-active" : ""
            }`}
            onClick={() => navigate("/certificados")}
          >
            <FaAward className="icon" /> 
            {!isMobile && <span>Certificados</span>}
          </li>

          <li
            className={`sidebar-item ${
              location.pathname === "/cupons" ? "sidebar-item-active" : ""
            }`}
            onClick={() => navigate("/cupons")}
          >
            <GrTicket className="iconTickt" /> 
            {!isMobile && <span>Meus Cupons</span>}
          </li>
          
        </ul>
      </aside>
      <div className="dashboard-content">{children}</div>
    </div>
 
  );
}

