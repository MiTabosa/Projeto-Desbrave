import "./CuponsUsados.css";
import { MdStarOutline } from "react-icons/md";
import { FaCopy } from "react-icons/fa6";
import { PiGreaterThanThin } from "react-icons/pi";
import Sidebar from "../../components/Sidebar/Sidebar";
import NavbarDashboard from "../../components/NavbarDashboard/NavbarDashboard";

export default function CuponsUsados() {
  return (
    <Sidebar>
      <div className="cupons-container">
        <NavbarDashboard />

        <h2 className="titulo">Meus Cupons</h2>

        <div className="estrela">
          <div className="estrela-box">
            <span><MdStarOutline  className="estrelaIcon"/></span>
            <h1 className="estrelaH1">Estrelas</h1>
            <span>20</span>
          </div>
          <button className="botaoResgate">Resgatar Mais</button>
          <button className="botaoUsados">Cupons Usados</button>
          <div className="cuponsGrade">
        <h2 className="titulo">Cupons Usados</h2>
        <div className="cupons-grid">
          <div className="cupom desabilitado">
            <h3 className="cupom-titulo">5% OFF</h3>
            <p className="cupom-descricao">COM APENAS 01 ESTRELAS</p>
            <button className="botaoSaiba">⏩ EXPIRADO</button>
            <div className="desVazio"></div>
          </div>
          <div className="cupom desabilitado">
            <h3 className="cupom-titulo">10% OFF</h3>
            <p className="cupom-descricao">COM APENAS 5 ESTRELAS</p>
            <button className="botaoSaiba">⏩ EXPIRADO</button>
            <div className="des10">Você já utilizou esse cupom.</div>
            <div className="desVazio"></div>
          </div>
          </div>
          </div>
        </div>
        </div>
    </Sidebar>
    )
    }