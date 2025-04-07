import "./CuponsUsados.css";
import { MdStarOutline } from "react-icons/md";
import Sidebar from "../../components/Sidebar/Sidebar";
import BottomDashboard from "../../components/BottomDashboard/BottomDashboard";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CuponsUsados() {
  const [pontos, setPontos] = useState(0);
  const [CuponsUsados, setCuponsUsados] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [cupomSelecionado, setCupomSelecionado] = useState(null);

  // useEffect(() => {
  //   const buscarCuponsUsados = async () => {
  //     try {
  //       const { data: dadosCupons } = await axios.get("http://localhost:3000/cupomUsado");
  //       setCuponsUsados(dadosCupons);
  //       const { data: dadosPontos } = await axios.get("http://localhost:3000/pontos");
  //       setPontos(dadosPontos.pontos);
  //     } catch (error) {
  //       console.error("Erro ao buscar dados:", error);
  //     }
  //   };
  //   buscarCuponsUsados();
  // }, []);

  useEffect(() => {
    const buscarCuponsUsados = () => {
      setTimeout(() => {
        // Mock de cupons usados
        const dadosCupons = [
          { id: 1, desconto: "5% OFF", descricao: "COM APENAS 01 ESTRELA" },
          { id: 2, desconto: "10% OFF", descricao: "COM APENAS 5 ESTRELAS" },
        ];
        setCuponsUsados(dadosCupons);

        // Mock de pontos do usuário
        setPontos(20);
      }, 1000);
    };

    buscarCuponsUsados();
  }, []);

  const abrirModal = (cupom) => {
    setCupomSelecionado(cupom);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setCupomSelecionado(null);

  }; 

  return (
    <Sidebar>
      <BottomDashboard>
        <div className="containerCuponsUsados">
          <div>
           <h2 className="tituloPaginaUsados">Meus Cupons</h2>

          <div className="boxEstrelaUsados">
            <div className="boxEstrelaInterno">
              <span><MdStarOutline className="iconeEstrela" /></span>
              <h1 className="tituloEstrela">Pontos</h1>
              <span>{pontos}</span>
            </div>
            <a href="/Scanner"><button className="botaoResgatarMais">Resgatar Mais</button></a>
            <button className="botaoCuponsUsados">Cupons Usados</button>
            <a href="/cupons" className="voltarLoginCupons">↩ Voltar para meus cupons</a>
          </div> 
          </div>
          <div className="CuponsConteudo">
            <div className="gradeCuponsUsados">
              <h2 className="h1">Cupons Usados</h2>
              <div className="gridCupons">
                {CuponsUsados.map((cupom) => (
                  <div key={cupom.id} className="cupomDesabilitado">
                    <h3 className="tituloCupom">{cupom.desconto}</h3>
                    <p className="descricaoCupom">{cupom.descricao}</p>
                    <button
                      className="botaoCupomExpirado"
                      onClick={() => abrirModal(cupom)}
                    >
                      &gt;&gt; EXPIRADO
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BottomDashboard>

      {modalAberto && (
        <div className="modalFundo">
          <div className="modalConteudo">
            <h2 className="modalTitulo">Cupom Expirado</h2>
            <p className="modalMensagem">
              Você já utilizou o cupom <strong>{cupomSelecionado?.desconto}</strong>.
            </p>
            <button className="modalBotaoFechar" onClick={fecharModal}>Fechar</button>
          </div>
        </div>
      )}
    </Sidebar>
  );
}
