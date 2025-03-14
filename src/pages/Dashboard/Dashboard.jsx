import { useNavigate } from "react-router-dom";
import BottomDashboard from "../../components/bottomDashboard/BottomDashboard";
import "./Dashboard.css";
import elementoVerde from "../../assets/elemento-verde.png";
import { BsArrow90DegRight } from "react-icons/bs";
import { useState } from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import imageIA from "../../assets/image-ia.png";
import imageTelefone from "../../assets/image-telefone.png";
import imageCultural from "../../assets/imagem-cultural.png";
import { IoPersonCircle } from "react-icons/io5";
import Sidebar from "../../components/Sidebar/Sidebar";
import NavbarDashboard from  "../../components/NavbarDashboard/NavbarDashboard";


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
      imagem: imageIA
    },
    { id: 2,
       titulo: "Desenvolvimento Android Moderno", 
       status: "andamento",
        imagem: imageTelefone
      },
    { id: 3, 
      titulo: "Frevo ao Manguebeat", 
      status: "concluido",
      imagem: imageCultural
    },
  ];

  const cursosFiltrados = cursos.filter(
    (curso) => filtro === "todos" || curso.status === filtro
  );

  return (
    <div className="container-dashboard">
      <Sidebar>
      <BottomDashboard>
     {/* <NavbarDashboard/> */}
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

        {/* cursos */}
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
                <div key={curso.id}
                 className="curso-card">
                  <img src={curso.imagem} alt={curso.titulo} className="curso-img" />
                    <p>{curso.titulo}</p>
                </div>
             ))}
            </div>

            <div className="container-profile">
          <div className="perfil-banner">
         <IoPersonCircle/>
          </div>

             <div className="perfil-info">
             <h2>Milena Tabosa</h2>
             <p>Professora de história</p>
             </div>

             <div className="perfil-detalhes">
             <div className="perfil-item">
              Milena_tabosa@exemplo.com
             </div>
             <div className="perfil-item">
             (81) 9983-1024
             </div>
             <div className="perfil-item alterar-senha">
             <a href="#">Alterar Senha</a>
             </div>
             <div className="perfil-termos">
              <a href="#">Termos de uso e segurança</a>
             </div>
             </div>

            </div>
        </div>
      </BottomDashboard>
      </Sidebar>
    </div>
  );
};

export default Dashboard;
