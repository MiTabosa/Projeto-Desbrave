import "./CuponsDashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import NavbarDashboard from "../../components/NavbarDashboard/NavbarDashboard";

export default function CuponsDashboard() {
  return (
    <Sidebar>
      <div className="cupons-container">
        {/* Navbar dentro da área de cupons */}
        <NavbarDashboard />

        <h2 className="cupons-title">Meus Cupons</h2>

        {/* Seção das estrelas e botões */}
        <div className="estrela-container">
          <div className="estrela-box">
            <span>⭐</span>
            <span>20</span>
          </div>
          <button className="botao-resgate">Resgatar Mais</button>
          <button className="botao-usados">Cupons Usados</button>
        </div>

        {/* Container dos cupons */}
        <div className="cupons-wrapper">
          <div className="cupons-grid">
            <div className="cupom valido">
              <h3 className="cupom-titulo">5% OFF</h3>
              <p className="cupom-descricao">COM APENAS 01 ESTRELA</p>
              <input type="text" value="DESBRAVE10" readOnly />
              <button className="btn-info">Saiba Mais</button>
            </div>

            <div className="cupom desabilitado">
              <h3 className="cupom-titulo">10% OFF</h3>
              <p className="cupom-descricao">COM APENAS 15 ESTRELAS</p>
              <input type="text" readOnly />
              <button className="btn-info">Saiba Mais</button>
            </div>

            
            <div className="cupom valido">
              <h3 className="cupom-titulo">20% OFF</h3>
              <p className="cupom-descricao">COM APENAS 20 ESTRELAS</p>
              <input type="text" value="CULTURAL220" readOnly />
              <button className="btn-info">Saiba Mais</button>
            </div>

            <div className="cupom desabilitado">
              <h3 className="cupom-titulo">50% OFF</h3>
              <p className="cupom-descricao">COM APENAS 50 ESTRELAS</p>
              <input type="text" readOnly />
              <button className="btn-info">Saiba Mais</button>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
