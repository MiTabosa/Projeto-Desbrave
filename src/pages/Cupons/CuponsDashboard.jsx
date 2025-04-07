import "./CuponsDashboard.css";
import { MdStarOutline } from "react-icons/md";
import { FaCopy } from "react-icons/fa6";
import Sidebar from "../../components/Sidebar/Sidebar";
import BottomDashboard from "../../components/BottomDashboard/BottomDashboard";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CuponsDashboard() {
  const [modalAberto, setModalAberto] = useState(false);
  const [conteudoModal, setConteudoModal] = useState("");
  const [cupons, setCupons] = useState([]);
  const [pontos, setPontos] = useState(0);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const { data: dadosCupons } = await axios.get("http://localhost:8081/cupom");
        setCupons(dadosCupons);
        const { data: dadosPontos } = await axios.get("http://localhost:8081/cupom");
        setPontos(dadosPontos);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    buscarDados();
  }, []);

  return (
    <Sidebar>
      <BottomDashboard>
        <div className="cuponsContainer">
          <div>
            <h2 className="titulo">Meus Cupons</h2>
            <div className="estrela">
              <div className="estrelaCaixa">
                <span><MdStarOutline className="estrelaIcon" /></span>
                <h1 className="estrelaH1">Pontos</h1>
                <span>{pontos}</span>
              </div>
              <a href="/Scanner"><button className="botaoResgate">Resgatar Mais</button></a>
              <a href="/CuponsUsados"><button className="botaoUsados">Cupons Usados</button></a>
            </div>
          </div>
          <div className="CuponsConteudo">
            <div className="AreaCupons">
              <div className="cuponsGrade">
                {cupons.map((cupom) => (
                  <div
                    key={cupom.id}
                    className={cupom.ativo ? `cupomValido${cupom.desconto}` : `cupomDesabilitado${cupom.desconto}`}
                  >
                    <h3 className={`cupomTitulo${cupom.desconto}`}>{cupom.desconto}% OFF</h3>
                    <p className={`cupomDescricao${cupom.desconto}`}>COM APENAS {cupom.estrelas} ESTRELAS</p>
                    <div className={cupom.ativo ? `des${cupom.desconto}` : "desVazio"}>
                      {cupom.ativo && (
                        <>
                          {cupom.codigo} <FaCopy className="copiar" />
                        </>
                      )}
                    </div>
                    <button
                      className="botaoSaiba"
                      onClick={() => abrirModal(cupom.descricao)}
                    >
                      &gt;&gt; Saiba Mais
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {modalAberto && (
          <div className="modalSaibaMais" onClick={() => setModalAberto(false)}>
            <div className="modalConteudo" onClick={(e) => e.stopPropagation()}>
              <h3>SAIBA MAIS</h3>
              <p>{conteudoModal}</p>
              <button onClick={() => setModalAberto(false)}>Fechar</button>
            </div>
          </div>
        )}
      </BottomDashboard>
    </Sidebar>
  );
}







