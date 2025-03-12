import { useNavigate } from "react-router-dom";
import BottomDashboard from "../bottomDashboard/BottomDashboard";
import "./Dashboard.css";
import elementoVerde from "../../assets/elemento-verde.png";
import { BsArrow90DegRight } from "react-icons/bs";
import { useState } from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";

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
    },
    { id: 2, titulo: "Desenvolvimento Android Moderno", status: "andamento" },
    { id: 3, titulo: "Frevo ao Manguebeat", status: "concluido" },
  ];

  const cursosFiltrados = cursos.filter(
    (curso) => filtro === "todos" || curso.status === filtro
  );

  return (
    <div className="container-dashboard">
      <BottomDashboard>
        <div className="header-dashboard">
          <h2 className="Title-dashboard">Olá, Milena!</h2>
          <p className="paragraf-dashboard">Bem-vinda de volta! 😃</p>
          <img src={elementoVerde} alt="elemento verde" />
          <button className="forum-button">
            Ir para fórum
            <BsArrow90DegRight />
          </button>{" "}
          {/* fazer navegação pro forum */}
        </div>
        <div className="info-general">
          <div className="info-card-courses">
            <RiGraduationCapLine />
            <p>{infoGeral.cursos} Cursos</p>
          </div>
          <div className="info-card-star">
            <CiStar />
            <p>{infoGeral.estrelas} Estrelas</p>
          </div>
        </div>
        <div className="init-Courses">
          <IoBookOutline />
          <p>Meus cursos</p>
          <div className="filtro-container">
            <label htmlFor="filtro">Cursos Iniciados</label>
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

            <div className="cursos-container">
             {cursosFiltrados.map((curso) => (
                <div key={curso.id} className="curso-card">
                    <p>{curso.titulo}</p>
                </div>
             ))}
            </div>
        </div>
      </BottomDashboard>
    </div>
  );
};

export default Dashboard;
