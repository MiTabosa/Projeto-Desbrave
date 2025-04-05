import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { GoCheckCircle } from "react-icons/go";
import { PiBookOpenTextThin } from "react-icons/pi";
import { FaComments } from "react-icons/fa";
import Button from "../../components/Button/Button";

const CardPerfil = ({ name, setName, subName, setSubName, numCursos, numForuns }) => {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const nomeRef = useRef(null);
  const subNomeRef = useRef(null);

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
        document.activeElement !== subNomeRef.current
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
          </div>
        ) : (
          <>
            <h2>
              <span className="nome-dashboard">{name}</span>
              <span className="subnome-dashboard"> {subName}</span>
            </h2>
            <FaPencil
              onClick={() => setEditing(true)}
              style={{ cursor: "pointer" }}
            />
          </>
        )}
      </div>

      {isMobile && (
        <div className="admin-dashboard-container">
          <h2 className="admin-title">Painel do Administrador</h2>

          <div className="admin-info-cards">
            <div className="admin-card admin-card-cursos">
              <div className="admin-card-content">
                <div className="admin-card-icon">
                  <PiBookOpenTextThin size={35} color="#0A5FA3" />
                </div>
                <div className="admin-card-text">
                  <p className="admin-card-number">{numCursos}</p>
                  <p>Cursos cadastrados</p>
                </div>
              </div>
              <div className="admin-buttons">
                <Button
                  text="Cadastrar Curso"
                  color="#0367A5"
                  size={isMobile ? "small" : "medium"}
                  onClick={() => navigate("/gestaoCursos")}
                />
              </div>
            </div>
            <div className="admin-card admin-card-foruns">
              <div className="admin-card-content">
                <div className="admin-card-icon">
                  <FaComments size={30} color="#0A5FA3" />
                </div>
                <div className="admin-card-text">
                  <p className="admin-card-number">{numForuns}</p>
                  <p>Fóruns cadastrados</p>
                </div>
              </div>
              <div className="admin-buttons">
                <Button
                  text="Cadastrar Fórum"
                  color="#0A5FA3"
                  size={isMobile ? "small" : "medium"}
                  onClick={() => navigate("/gestaoForum")}
                />
              </div>
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