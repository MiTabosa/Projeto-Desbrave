import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Dashboard.css";
import BottomDashboard from "../../components/BottomDashboard/BottomDashboard";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle";
import CardPerfil from "../../components/CardPerfil/CardPerfil";
import { api } from "../../service/api";
import {jwtDecode} from "jwt-decode";


// imagens e ícones
import elementoDashboard from "../../assets/elemento-dashboard.png";
import { BsArrow90DegRight } from "react-icons/bs";
import { RiGraduationCapLine } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { PiBookOpenTextThin } from "react-icons/pi";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [infoGeral, setInfoGeral] = useState({ cursos: 0, pontos: 0});
  const [filtro, setFiltro] = useState("todos");
  const [name, setName] = useState("");
  const [cursosIniciados, setCursosIniciados] = useState([]);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const decodedToken = jwtDecode(token);
  
      const usuarioId = decodedToken?.sub;


      // nomeUsuario
      const userResponse = await api.get(`/api/usuarios/${usuarioId}`);
      setName(userResponse.data.nome);

      // pontos
      const pontosResponse = await api.get(`/historicoResgate/usuario/${usuarioId}`);
      const totalPontos = pontosResponse.data.reduce((acc, item) => acc + item.pontosGanhos, 0);

      // cursos iniciados 
      const cursosResponse = await api.get(`/api/usuarios/${usuarioId}/cursos-com-progresso`);


      setInfoGeral({
        cursos: cursosResponse.data.length,
        pontos: totalPontos,
      });

      setCursosIniciados(cursosResponse.data);

   } catch (error) {
    console.error("Erro ao buscar histórico de resgate:", error);
    setInfoGeral((prev) => ({...prev,pontos: 0}));
   }
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  const cursosFiltrados = cursosIniciados.filter(
    (curso) => filtro === "todos" || 
   (filtro === "andamento" && curso.progresso < 100) ||
   (filtro === "concluido" && curso.progresso === 100)
  );

  return (
    <div className="container-dashboard">
      <Sidebar>
        <BottomDashboard>
          {/* Seção Topo */}
          <div className="secao-superior">
            <div className="esquerda-secao">
              <div className="cabecalho-painel">
                <h2 className="titulo-dashboard">Olá, {name}! </h2>
                <p className="paragrafo-dashboard">Bem-vinda de volta! 😃</p>
                <img src={elementoDashboard} alt="elemento dashboard colorido"/>
                <button
                  className="forum-botao"
                  onClick={() => navigate("/forum")}
                >
                  Ir para fórum <BsArrow90DegRight />
                </button>
              </div>

              {/* Cartões no desktop */}
              {!isMobile && (
                <div className="info-geral">
                  <div className="info-card-dashboard info-card-curso">
                    <div className="icone-numero">
                      <div className="icone-container">
                        <RiGraduationCapLine className="icone-geral" />
                      </div>
                      <div className="texto-numero">
                        <p className="numero-geral">{infoGeral.cursos}</p>
                        <p className="paragrafo-geral">Cursos</p>
                      </div>
                    </div>
                  </div>

                  <div className="info-card-dashboard info-card-estrela">
                    <div className="icone-numero">
                      <div className="icone-container">
                        <CiStar className="icone-geral" />
                      </div>
                      <div className="texto-numero">
                        <p className="numero-geral">
                          {isNaN(infoGeral.pontos) < 10
                            ? `0${infoGeral.pontos}`
                            : infoGeral.pontos}
                        </p>
                        <p className="paragrafo-geral">Pontos</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
            <div className="area-cursos">
              <div className="inicio-curso">
                <div className="cabecalho-curso">
                  <PiBookOpenTextThin />
                  <p className="titulo-cabecalho">Inicie um curso</p>
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

            
                <div className="container-curso-dashboard">
                    {cursosFiltrados.length === 0 ? (
                      <p>Você ainda não iniciou nenhum curso.</p>
                    ) : (
                      cursosFiltrados.map((curso, index) => (
                        <div key={index} className="curso-card-dashboard">
                          <p className="curso-titulo-dashboard">{curso.tituloCurso}</p>
                          <ProgressCircle percent={curso.progresso} />
                          <div className="botao-curso-dashboard">
                            <Button
                              text="Retomar"
                              color="#0367A5"
                              size="small"
                              onClick={() => navigate("/curso")} 
                            />
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <CardPerfil
              name={name}
              setName={setName}
            />
    </div>

        </BottomDashboard>
      </Sidebar>
    </div>
  );
};

export default Dashboard;
