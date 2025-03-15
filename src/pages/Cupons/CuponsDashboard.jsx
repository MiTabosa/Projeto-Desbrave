import "./CuponsDashboard.css";
import { MdStarOutline } from "react-icons/md";
import { FaCopy } from "react-icons/fa6";
import { PiGreaterThanThin } from "react-icons/pi";
import Sidebar from "../../components/Sidebar/Sidebar";
import NavbarDashboard from "../../components/NavbarDashboard/NavbarDashboard";

export default function CuponsDashboard() {
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
        </div>

        <div className="cuponsGrade">
          <div className="cupons-grid">
            <div className="cupom valido">
              <h3 className="cupom-titulo">5% OFF</h3>
              <p className="cupom-descricao">COM APENAS 01 ESTRELA</p>
              <div className="des10">DESBRAVE10 <FaCopy className="copy" /></div>
              <button className="botaoSaiba">&gt;&gt; Saiba Mais</button>
            </div>

            <div className="cupom desabilitado">
              <h3 className="cupom-titulo">10% OFF</h3>
              <p className="cupom-descricao">COM APENAS 15 ESTRELAS</p>
              <div className="desVazio"></div>
              <button className="botaoSaiba">&gt;&gt; Saiba Mais</button>
            </div>


            <div className="cupom valido">
              <h3 className="cupom-titulo">20% OFF</h3>
              <p className="cupom-descricao">COM APENAS 20 ESTRELAS</p>
              <div className="desCultura">CULTURAL220 <FaCopy className="copy" /></div>
              <button className="botaoSaiba">&gt;&gt; Saiba Mais</button>
            </div>

            <div className="cupom desabilitado">
              <h3 className="cupom-titulo">50% OFF</h3>
              <p className="cupom-descricao">COM APENAS 50 ESTRELAS</p>
              <div className="desVazio"></div>
              <button className="botaoSaiba">&gt;&gt; Saiba Mais</button>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
