import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import BottomDashboard from "../../components/BottomDashboard/BottomDashboard";
import Sidebar from "../../components/Sidebar/Sidebar";
import NavbarDashboard from "../../components/NavbarDashboard/NavbarDashboard";
import Button from "../../components/Button/Button";
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle";

// fotos
import elementoVerde from "../../assets/elemento-verde.png";

// icons
import { BsArrow90DegRight } from "react-icons/bs";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiBookOpenTextThin } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { FaPencil } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { GoCheckCircle } from "react-icons/go";

const Dashboard = () => {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Milena");
  const [subName, setSubName] = useState("Tabosa");
  const [subtitle, setSubtitle] = useState("Professora de História");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // troca de nomes, sobrenome e descrição
  const nameRef = useRef(null);
  const SubNameRef = useRef(null);
  const SubRef = useRef(null);

  const editClick = () => {
    setEditing(true);
  };

  const handleEnter = () => {
    setTimeout(() => {
      if (
        document.activeElement !== nameRef.current &&
        document.activeElement !== SubNameRef.current &&
        document.activeElement !== SubRef.current
      ) {
        setEditing(false);
      }
    }, 100);
  };

  // relação de cursos e estrelas
  const [infoGeral, setInfoGeral] = useState({
    cursos: 23,
    estrelas: 1,
  });

  // filtros de cursos iniciados
  const [filtro, setFiltro] = useState("todos");

  const cursos = [
    {
      id: 1,
      titulo: "Cursos de Extensão IA para direito",
      status: "andamento",
      progresso: 40,
    },
    {
      id: 2,
      titulo: "Desenvolvimento Android Moderno",
      status: "andamento",
      progresso: 70,
    },
    {
      id: 3,
      titulo: "Frevo ao Manguebeat",
      status: "concluido",
      progresso: 100,
    },
  ];

  const cursosFiltrados = cursos.filter(
    (curso) => filtro === "todos" || curso.status === filtro
  );

  return (
    <div className="container-dashboard">
      <Sidebar>
        <BottomDashboard>
          <NavbarDashboard />

          {/* Seção Topo - Cabeçalho, Info e Perfil */}
          <div className="top-section">
            <div className="left-section">
              <div className="header-dashboard">
                <h2 className="Title-dashboard">
                  Olá, {name} {subName}!
                </h2>
                <p className="paragraf-dashboard">Bem-vinda de volta! 😃</p>
                <img src={elementoVerde} alt="elemento verde" />
                <button
                  className="forum-button"
                  onClick={() => navigate("/forum")}
                >
                  Ir para fórum <BsArrow90DegRight />
                </button>
              </div>

              {/* Exibir os cartões apenas no desktop */}
              {!isMobile && (
                <div className="info-general">
                  <div className="info-card-dashboard info-card-courses">
                    <div className="icon-number">
                      <div className="icon-container">
                        <RiGraduationCapLine className="icon-general" />
                      </div>
                      <div className="number-text">
                        <p className="number-general">{infoGeral.cursos}</p>
                        <p className="label-general">Cursos</p>
                      </div>
                    </div>
                  </div>

                  <div className="info-card-dashboard info-card-star">
                    <div className="icon-number">
                      <div className="icon-container">
                        <CiStar className="icon-general" />
                      </div>
                      <div className="number-text">
                        <p className="number-general">
                          {infoGeral.estrelas < 10 ? `0${infoGeral.estrelas}` : infoGeral.estrelas}
                        </p>
                        <p className="label-general">Estrelas</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Área de Informações do Usuário */}
            <div className="container-profile">
              <div className="perfil-banner">
                <IoPersonCircle className="img-profile" />
              </div>

              <div className="title-profile">
                {editing ? (
                  <div>
                    <input ref={nameRef} type="text" value={name} onChange={(e) => setName(e.target.value)} onBlur={handleEnter} className="input-profile" autoFocus />
                    <input ref={SubNameRef} type="text" value={subName} onChange={(e) => setSubName(e.target.value)} onBlur={handleEnter} className="input-profile" />
                    <input ref={SubRef} type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} onBlur={handleEnter} className="input-profile" />
                  </div>
                ) : (
                  <>
                    <h2>
                      <span className="name-dashboard">{name}</span>
                      <span className="subname-dashboard"> {subName}</span>
                    </h2>
                    <p className="subtitle-dashboard">{subtitle}</p>
                    <FaPencil onClick={editClick} style={{ cursor: "pointer" }} />
                  </>
                )}
              </div>

              {/* Renderiza os cartões apenas no mobile */}
              {isMobile && (
                <div className="info-general">
                  <div className="info-card-dashboard info-card-courses">
                    <RiGraduationCapLine className="icon-general" />
                    <p className="number-general">{infoGeral.cursos}</p>
                    <p className="label-general">Cursos</p>
                  </div>

                  <div className="info-card-dashboard info-card-star">
                    <CiStar className="icon-general" />
                    <p className="number-general">
                      {infoGeral.estrelas < 10 ? `0${infoGeral.estrelas}` : infoGeral.estrelas}
                    </p>
                    <p className="label-general">Estrelas</p>
                  </div>
                </div>
              )}

              <div className="profile-info">
                <p>
                  <RiLockPasswordLine />
                  <a onClick={() => navigate("/esqueceuSenha")}>Alterar senha</a>
                </p>
              </div>
              <div className="profile-terms">
                <a onClick={() => navigate("/diretrizes")}>
                  <GoCheckCircle /> Termos de uso e segurança
                </a>
              </div>
            </div>
          </div>
          {/* area de cursos */}
          <div className="content-wrap">
            <div className="init-Courses">
              <div className="header-courses">
                <PiBookOpenTextThin className="header-book" />
                <p className="courses-paragraph">Meus cursos</p>
              </div>

              <div className="filtro-container">
                <label htmlFor="filtro">Cursos Iniciados:</label>
                <select
                  id="filtro"
                  value={filtro}
                  onChange={(e) => setFiltro(e.target.value)}
                >
                  <option value="todos">Todos</option>
                  <option value="andamento">Em Andamento</option>
                  <option value="concluido">Concluídos</option>
                </select>
              </div>

              <div className="container-courses">
                {cursosFiltrados.map((curso) => (
                  <div key={curso.id} className="curso-card">
                    <p className="curso-title">{curso.titulo}</p>
                    <ProgressCircle percent={curso.progresso} />
                    <div className="button-curso">
                      <Button
                        text="Retomar"
                        color="#0367A5"
                        size="small"
                        onClick={() => navigate("/curso")}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BottomDashboard>
      </Sidebar>
    </div>
  );
};

export default Dashboard;