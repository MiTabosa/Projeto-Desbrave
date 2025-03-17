import { useState } from "react";
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

const Dashboard = () => {
  const navigate = useNavigate();

  const [infoGeral, setInfoGeral] = useState({
    cursos: 23,
    estrelas: 1,
  });

  const [filtro, setFiltro] = useState("todos");

  const cursos = [
    {
      id: 1,
      titulo: "Cursos de Extensão IA para direito",
      status: "andamento",
      progresso: 100,
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

  // tentei implementar a porcentagem mais falhou

  const cursosFiltrados = cursos.filter(
    (curso) => filtro === "todos" || curso.status === filtro
  );
  
  return (
<div className="container-dashboard">
  <Sidebar>
    <BottomDashboard>
      <NavbarDashboard />
      
      {/* Seção Topo - Cabeçalho + Info + Perfil */}
      <div className="top-section">
        <div className="left-section">
          <div className="header-dashboard">
            <h2 className="Title-dashboard">Olá, Milena!</h2>
            <p className="paragraf-dashboard">Bem-vinda de volta! 😃</p>
            <img src={elementoVerde} alt="elemento verde" />
            <button className="forum-button" onClick={() => navigate("/forum")}>
              Ir para fórum <BsArrow90DegRight />
            </button>
          </div>

          <div className="info-general">
            <div className="info-card-courses">
              <RiGraduationCapLine className="icon-curse" />
              <p>{infoGeral.cursos} Cursos</p>
            </div>
            <div className="info-card-star">
              <CiStar className="icon-star" />
              <p>{infoGeral.estrelas} Estrelas</p>
            </div>
          </div>
        </div>

        {/* Área de Informações do Usuário */}
        <div className="container-profile">
    <div className="perfil-banner">
        <IoPersonCircle className="img-profile" />
    </div>
    <h2 className="profile-title"><FaPencil /> Milena Tabosa</h2>
    <p className="profile-subtitle">Professora de História</p>

    <div className="profile-info">
        <p><FaPencil /> Perfil</p>
        <p><IoPersonCircle /> Milena_tabosa@exemplo.com</p>
        <p><IoPersonCircle /> (81) 9983-1024</p>
        <p><a href="#">Alterar senha</a></p>
    </div>

    <div className="profile-terms">
        <a href="#">
            Termos de uso e segurança
        </a>
    </div>
</div>
</div>
      {/* Cursos devem continuar logo abaixo da seção do topo */}
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


