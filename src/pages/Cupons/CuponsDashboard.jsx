import React, { useState } from "react";
import "./CuponsDashboard.css";
import { MdStarOutline } from "react-icons/md";
import { FaCopy } from "react-icons/fa6";
import { PiGreaterThanThin } from "react-icons/pi";
import Sidebar from "../../components/Sidebar/Sidebar";
import BottomDashboard from "../../components/BottomDashboard/BottomDashboard";
import NavbarDashboard from "../../components/NavbarDashboard/NavbarDashboard";

export default function CuponsDashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleSaibaMaisClick = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <Sidebar>
    <BottomDashboard>
      <div className="cuponsContainer">
        <NavbarDashboard />

        <h2 className="titulo">Meus Cupons</h2>

        <div className="estrela">
          <div className="estrelaCaixa">
            <span><MdStarOutline  className="estrelaIcon"/></span>
            <h1 className="estrelaH1">Estrelas</h1>
            <span>20</span>
          </div>
          <a href="/Scanner"><button className="botaoResgate">Resgatar Mais</button></a>
          <a href="/CuponsUsados"><button className="botaoUsados">Cupons Usados</button></a>
        </div>

        <div className="AreaCupons">
          <div className="cuponsGrade">
            <div className="cupomValido5">
              <h3 className="cupomTitulo5">5% OFF</h3>
              <p className="cupomDescricao5">COM APENAS 01 ESTRELA</p>
              <div className="des10">DESBRAVE10 <FaCopy className="copiar" /></div>
              <button className="botaoSaiba" onClick={() => handleSaibaMaisClick("Cada vez que você visita um ponto turístico ao ler o QR CODE, você ganha estrelas. Com essa estrela, você pode desbloquear um cupom de 5% de desconto para utilizar em um curso ou em nossos restaurantes parceiros. Para resgatar, basta copiar o código do cupom e, na aba Cursos, colar no campo correspondente e clicar em Aplicar. O desconto será aplicado automaticamente no valor do curso escolhido. Aproveite!")}> &gt;&gt; Saiba Mais</button>
            </div>

            <div className="cupomDesabilitado10">
              <h3 className="cupomTitulo10">10% OFF</h3>
              <p className="cupomDescricao10">COM APENAS 15 ESTRELAS</p>
              <div className="desVazio"></div>
              <button className="botaoSaiba" onClick={() => handleSaibaMaisClick("Para desbloquear o cupom de 10% OFF, você precisa acumular 15 estrelas. No momento, você ainda não tem estrelas suficientes para gerar o código do cupom. Mas não se preocupe! Você pode visitar um de nossos pontos turísticos parceiros e escanear o QR Code disponível para ganhar estrelas. Cada ponto visitado rende 1 estrela, então quanto mais lugares você explorar, mais rápido poderá resgatar seu desconto!")}> &gt;&gt; Saiba Mais</button>
            </div>


            <div className="cupomValido20">
              <h3 className="cupomTitulo20">20% OFF</h3>
              <p className="cupomDescricao20">COM APENAS 20 ESTRELAS</p>
              <div className="desCultura">CULTURAL220 <FaCopy className="copiar" /></div>
              <button className="botaoSaiba" onClick={() => handleSaibaMaisClick("Cada vez que você visita um ponto turístico ao ler o QR CODE, você ganha estrelas. Com essa estrela, você pode desbloquear um cupom de 20% de desconto para utilizar em um curso ou em nossos restaurantes parceiros. Para resgatar, basta copiar o código do cupom e, na aba Cursos, colar no campo correspondente e clicar em Aplicar. O desconto será aplicado automaticamente no valor do curso escolhido. Aproveite!")}> &gt;&gt; Saiba Mais</button>
            </div>

            <div className="cupomDesabilitado50">
              <h3 className="cupomTitulo50">50% OFF</h3>
              <p className="cupomDescricao50">COM APENAS 50 ESTRELAS</p>
              <div className="desVazio"></div>
              <button className="botaoSaiba" onClick={() => handleSaibaMaisClick("Para desbloquear o cupom de 50% OFF, você precisa acumular 50 estrelas. No momento, você ainda não tem estrelas suficientes para gerar o código do cupom. Mas não se preocupe! Você pode visitar um de nossos pontos turísticos parceiros e escanear o QR Code disponível para ganhar estrelas. Cada ponto visitado rende 1 estrela, então quanto mais lugares você explorar, mais rápido poderá resgatar seu desconto!")}> &gt;&gt; Saiba Mais</button>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="modalSaibaMais" onClick={() => setModalOpen(false)}>
          <div className="modalConteudo" onClick={(e) => e.stopPropagation()}>
            <h3>SAIBA MAIS</h3>
            <p>{modalContent}</p>
            <button onClick={() => setModalOpen(false)}>Fechar</button>
          </div>
        </div>
      )}
    </BottomDashboard>
      
    </Sidebar>
  );
}







