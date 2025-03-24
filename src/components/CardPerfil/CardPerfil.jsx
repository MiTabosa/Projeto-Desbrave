import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { GoCheckCircle } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { RiGraduationCapLine } from "react-icons/ri";
import "./CardPerfil.css";

const CardPerfil = ({ name, setName, subName, setSubName }) => {
  const navigate = useNavigate();
  const [subtitle, setSubtitle] = useState("Professora de História");
  const [editing, setEditing] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [infoGeral, setInfoGeral] = useState({ cursos: 23, estrelas: 1 });

  const nomeRef = useRef(null);
  const subNomeRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleEnter = () => {
    setTimeout(() => {
      if (
        document.activeElement !== nomeRef.current &&
        document.activeElement !== subNomeRef.current &&
        document.activeElement !== subRef.current
      ) {
        setEditing(false);
      }
    }, 100);
  };

  return (
    <div className="container-perfil">
      <div className="perfil-banner">
        <IoPersonCircle className="img-perfil" />
      </div>

      <div className="titulo-perfil">
        {editing ? (
          <div>
            <input
              ref={nomeRef}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={handleEnter}
              className="input-perfil"
              autoFocus
            />
            <input
              ref={subNomeRef}
              type="text"
              value={subName}
              onChange={(e) => setSubName(e.target.value)}
              onBlur={handleEnter}
              className="input-perfil"
            />
            <input
              ref={subRef}
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              onBlur={handleEnter}
              className="input-perfil"
            />
          </div>
        ) : (
          <>
            <h2>
              <span className="nome-dashboard">{name}</span>
              <span className="subnome-dashboard"> {subName}</span>
            </h2>
            <p className="subtitulo-dashboard">{subtitle}</p>
            <FaPencil onClick={() => setEditing(true)} style={{ cursor: "pointer" }} />
          </>
        )}
      </div>

      {isMobile && (
        <div className="info-geral">
          <div className="info-card-dashboard info-card-curso">
            <div className="icone-container">
              <RiGraduationCapLine className="icone-geral" />
            </div>
            <div className="texto-container">
            <p className="numero-geral">{infoGeral.cursos}</p>
            <p className="paragrafo-geral">Cursos</p>
            </div>
          </div>

          <div className="info-card-dashboard info-card-estrela">
            <div className="icone-container">
              <CiStar className="icone-geral" />
            </div>
            <div className="texto-container">
            <p className="numero-geral">
              {infoGeral.estrelas < 10
                ? `0${infoGeral.estrelas}`
                : infoGeral.estrelas}
            </p>
            
            <p className="paragrafo-geral">Estrelas</p>
            </div>
          </div>
        </div>
      )}

      <div className="perfil-info">
        <p>
          <RiLockPasswordLine />
          <a onClick={() => navigate("/esqueceuSenha")}>Alterar senha</a>
        </p>
      </div>
      <div className="perfil-termos">
        <a onClick={() => navigate("/diretrizes")}>
          <GoCheckCircle /> Termos de uso e segurança
        </a>
      </div>
    </div>
  );
};

export default CardPerfil;
