import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { GoCheckCircle } from "react-icons/go";
import { PiBookOpenTextThin } from "react-icons/pi";
import { FaComments } from "react-icons/fa";
import Button from "../../components/Button/Button";
import { api } from "../../service/api";

const CardPerfil = ({ name, setName, numCursos, numForuns }) => {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const nomeRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const usuarioId = localStorage.getItem("usuarioId");
        const response = await api.get(`/usuario/${usuarioId}`);
        setName(response.data.nome);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    };

    fetchUser();
  }, [setName]);

  const handleSave = async () => {
    try {
      const usuarioId = localStorage.getItem("usuarioId");
      await api.put(`/usuario/${usuarioId}`, {
        nome: name,
      });
      alert("Nome atualizado com sucesso!");
      setEditing(false);
    } catch (error) {
      console.error("Erro ao atualizar nome:", error);
      alert("Erro ao atualizar nome. Tente novamente.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
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
              onKeyDown={handleKeyDown}
              onBlur={handleSave}
              className="input-perfil"
              autoFocus
            />
          </div>
        ) : (
          <>
            <h2>
              <span className="nome-dashboard">{name}</span>
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
