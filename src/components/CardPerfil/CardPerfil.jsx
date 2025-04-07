import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { GoCheckCircle } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { RiGraduationCapLine } from "react-icons/ri";
import "./CardPerfil.css";
import { api } from "../../service/api";

const CardPerfil = ({ name, setName }) => {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [pontos, setPontos] = useState(0); 
  const [quantidadeCursos, setQuantidadeCursos] = useState(0); 
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

        // Buscar nome do usuário
        const response = await api.get(`/usuario/${usuarioId}`);
        setName(response.data.nome);

        // Buscar pontos do usuário
        const pontosResponse = await api.get(`/historicoResgate/usuario/${usuarioId}`);
        const totalPontos = pontosResponse.data.reduce((acc, item) => acc + item.pontosGanhos, 0);
        setPontos(totalPontos);

        const cursosResponse = await api.get(`/usuarios/${usuarioId}/cursos-com-progresso`);
        setQuantidadeCursos(cursosResponse.data.length);

      } catch (error) {
        console.error("Erro ao buscar usuário ou pontos:", error);
      }
    };

    fetchUser();
  }, []);

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
            <button onClick={handleSave} className="botao-salvar">Salvar</button>
          </div>
        ) : (
          <>
            <h2>
              <span className="nome-dashboard">{name}</span>
            </h2>
            <FaPencil onClick={() => setEditing(true)} style={{ cursor: "pointer" }} />
          </>
        )}
      </div>

      {/* Exibe Cursos e Pontos no Mobile */}
      {isMobile && (
        <div className="info-geral">
          <div className="info-card-dashboard info-card-curso">
            <div className="icone-container">
              <RiGraduationCapLine className="icone-geral" />
            </div>
            <div className="texto-container">
              <p className="numero-geral">{quantidadeCursos}</p>
              <p className="paragrafo-geral">Cursos</p>
            </div>
          </div>

          <div className="info-card-dashboard info-card-estrela">
            <div className="icone-container">
              <CiStar className="icone-geral" />
            </div>
            <div className="texto-container">
              <p className="numero-geral">
                {pontos < 10 ? `0${pontos}` : pontos}
              </p>
              <p className="paragrafo-geral">Pontos</p>
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
