import "./SidebarAdmin.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { PiBookOpenTextThin } from "react-icons/pi";
import { FaAward, FaComments } from "react-icons/fa";
import { GrTicket } from "react-icons/gr";
import logoSimplicada from "../../assets/logo-simplificada.png";

export default function SidebarAdmin({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dashboard-container">
      {!isMobile && (
        <aside className="sidebar-admin">
          <div className="conteiner-logoAdmin" onClick={() => navigate("/")}>
            <img className="logo-simplificadaAdmin" src={logoSimplicada} alt="Logo" />
          </div>
          <ul>
            <li
              className={`sidebar-item ${
                location.pathname === "/dashboardAdmin" ? "sidebar-item-active" : ""
              }`}
              onClick={() => navigate("/dashboardAdmin")}
            >
              <MdOutlineDashboard className="icon" />
              <span>Dashboard</span>
            </li>
          </ul>
        </aside>
      )}
      
      <div className="dashboard-content">{children}</div>
      
      {isMobile && (
        <aside className="mobile-sidebar">
          <ul>
            <li
              className={`sidebar-item ${
                location.pathname === "/dashboardAdmin" ? "sidebar-item-active" : ""
              }`}
              onClick={() => navigate("/dashboardAdmin")}
            >
              <MdOutlineDashboard className="icon" />
              <span>Dashboard</span>
            </li>
          </ul>
        </aside>
      )}
    </div>
  );
}