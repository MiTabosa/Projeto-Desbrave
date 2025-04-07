import BottomDashboard from "../../components/BottomDashboard/BottomDashboard";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./MeusCursos.css";
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../service/api";

const MeusCursos = () => {
  const navigate = useNavigate();
  const [cursos, setCursos] = useState([]);

  const manipularCartaoClick = (id) => {
    navigate("/curso/${id}");
  };

  useEffect(() => {
    const buscarCursos = async () => {
      try {
        const usuarioId = localStorage.getItem("usuarioId");
        const response = await api.get(`/usuarioCurso/usuario/${usuarioId}`);
        setCursos(response.data);
      } catch (error) {
        console.error("Erro ao buscar cursos:", error);
      }
    };
    buscarCursos();
  }, []);

  return (
    <Sidebar>
      <BottomDashboard>
        <div className="container-meusCursos">
          <h2 className="titulo-inicio-cursos">Meus Cursos</h2>
          <div className="cursos-list">
            {cursos.length === 0 ? (
              <p className="nenhum-curso">
                Você ainda não iniciou nenhum curso..
              </p>
            ) : (
              cursos.map((curso) => (
                <div
                  key={curso.id}
                  className="curso-dcard"
                  onClick={() => manipularCartaoClick(curso.id)}
                >
                  <h3 className="title-dash">{curso.nomeCurso}</h3>
                  <div className="progresso-container">
                    <ProgressCircle percent={curso.progresso} />
                    <div className="info-progresso">
                      <span className="interacao">
                        Última Interação: {curso.dataUltimaInteracao}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </BottomDashboard>
    </Sidebar>
  );
};

export default MeusCursos;
