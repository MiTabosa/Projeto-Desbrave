import "./Sidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { PiBookOpenTextThin } from "react-icons/pi";
import { FaAward } from "react-icons/fa";
import { GrTicket } from "react-icons/gr";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar({ children }) {
  const navigate = useNavigate();
  const location = useLocation(); // Obtém a URL atual

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <ul>
          <li
            className={`sidebar-item ${
              location.pathname === "/dashboard" ? "sidebar-item-active" : ""
            }`}
            onClick={() => navigate("/dashboard")}
          >
            <MdOutlineDashboard className="icon" /> <span>Dashboard</span>
          </li>

          <li
            className={`sidebar-item ${
              location.pathname === "/meusCursos" ? "sidebar-item-active" : ""
            }`}
            onClick={() => navigate("/meusCursos")}
          >
            <PiBookOpenTextThin className="icon" /> <span>Meus cursos</span>
          </li>

          <li
            className={`sidebar-item ${
              location.pathname === "/certificados" ? "sidebar-item-active" : ""
            }`}
            onClick={() => navigate("/certificados")}
          >
            <FaAward className="icon" /> <span>Certificados</span>
          </li>

          <li
            className={`sidebar-item ${
              location.pathname === "/cupons" ? "sidebar-item-active" : ""
            }`}
            onClick={() => navigate("/cupons")}
          >
            <GrTicket className="iconTickt" /> <span>Meus Cupons</span>
          </li>
        </ul>
      </aside>
      <div className="dashboard-content">{children}</div>
    </div>
  );
}
