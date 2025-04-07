import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Dashboard.css";
import BottomDashboard from "../../components/BottomDashboard/BottomDashboard";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import CardPerfil from "../../components/CardPerfil/CardPerfil";
import BarraPesquisa from "../../components/BarraPesquisa/barra"; 
import { api } from "../../service/api";
import { jwtDecode } from "jwt-decode";

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
  const [infoGeral, setInfoGeral] = useState({ cursos: 0, pontos: 0 });
  const [name, setName] = useState("");
  const [cursos, setCursos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

      // todos cursos
      const cursosResponse = await api.get(`/cursos`);
      
      setInfoGeral({
        cursos: cursosResponse.data.length,
        pontos: totalPontos,
      });

      setCursos(cursosResponse.data);

    } catch (error) {
      console.error("Erro ao buscar histórico de resgate:", error);
      setInfoGeral((prev) => ({ ...prev, pontos: 0 }));
    }
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const cursosFiltrados = cursos.filter((curso) =>
    curso.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container-dashboard">
      <Sidebar>
        <BottomDashboard>
          {/* Seção Topo */}
          <div className="secao-superior">
            <div className="esquerda-secao">
              <div className="cabecalho-painel">
                <h2 className="titulo-dashboard">Olá, {name}!</h2>
                <p className="paragrafo-dashboard">Bem-vinda de volta! 😃</p>
                <img src={elementoDashboard} alt="elemento dashboard colorido" />
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
                          {infoGeral.pontos < 10
                            ? `0${infoGeral.pontos}`
                            : infoGeral.pontos}
                        </p>
                        <p className="paragrafo-geral">Pontos</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Área de cursos */}
              <div className="area-cursos">
                <div className="inicio-curso">
                  <div className="cabecalho-curso">
                    <PiBookOpenTextThin />
                    <p className="titulo-cabecalho">Explore os cursos</p>
                  </div>

                  {/* Barra de Pesquisa */}
                  <BarraPesquisa onSearch={handleSearch} />

                  {/* Lista de cursos */}
                  <div className="container-curso-dashboard">
                    {cursosFiltrados.length === 0 ? (
                      <p>Nenhum curso encontrado.</p>
                    ) : (
                      cursosFiltrados.map((curso, index) => (
                        <div key={index} className="curso-card-dashboard">
                          <p className="curso-titulo-dashboard">{curso.titulo}</p>
                          <div className="botao-curso-dashboard">
                            <Button
                              text="Saiba Mais"
                              color="#35a150"
                              size="small"
                              onClick={() => navigate(`/descricaoCurso/${curso.idcursos}`)}
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
