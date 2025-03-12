import "./CuponsDashboard.css";
import { MdOutlineDashboard } from "react-icons/md";
import { PiBookOpenTextThin } from "react-icons/pi";
import { FaAward } from "react-icons/fa";
import { GrTicket } from "react-icons/gr";
import { IoPersonCircle } from "react-icons/io5";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function CuponsDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <ul>
        <li className="sidebar-item" onClick={() => navigate("/")}>
            <MdOutlineDashboard className="icon" /> <span>Dashboard</span>
          </li>
          <li className="sidebar-item" onClick={() => navigate("/cursos")}>
          <PiBookOpenTextThin className="icon" /> <span>Meus cursos</span>
          </li>
          <li className="sidebar-item" onClick={() => navigate("/certificados")}>
          <FaAward className="icon" /> <span>Certificados</span>
          </li>
          <li className="sidebar-item-active" onClick={() => navigate("/cupons")}>
          <GrTicket className="iconTickt"/> <span>Meus Cupons</span>
          </li>
        </ul>
      </aside>
      <main className="usuario">
        <header className="header">
          <span className="user"><TbSquareRoundedArrowDownFilled className="setaBaixo"/> Milena Tabosa <IoPersonCircle className="iconperson"/></span>
        </header>
        <section className="cuponsSeçao">
          <h2>Meus Cupons</h2>
          <div className="estrelaContainer">
            <div className="estrelaBox">
              <span className="estrela">⭐</span>
              <span className="contador">20</span>
            </div>
            <button className="resgate">Resgatar Mais</button>
            <button className="cuponsUsados">Cupons Usados</button>
          </div>
          <div className="meusCupons">
            <div className="cuponValido">
              <h3>5% OFF</h3>
              <p>COM APENAS 01 ESTRELA</p>
              <input type="text" value="DESBRAVE10" readOnly />
              <button className="btn-info">Saiba Mais</button>
            </div>
            <div className="cuponValido">
              <h3>20% OFF</h3>
              <p>COM APENAS 20 ESTRELAS</p>
              <input type="text" value="CULTURAL220" readOnly />
              <button className="btn-info">Saiba Mais</button>
            </div>
            <div className="cuponDesabilitado">
              <h3>10% OFF</h3>
              <p>COM APENAS 15 ESTRELAS</p>
              <input type="text" readOnly />
              <button className="btn-info">Saiba Mais</button>
            </div>
            <div className="cuponDesabilitado">
              <h3>50% OFF</h3>
              <p>COM APENAS 50 ESTRELAS</p>
              <input type="text" readOnly />
              <button className="saibaMais">Saiba Mais</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
