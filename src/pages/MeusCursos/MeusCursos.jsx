import BottomDashboard from "../../components/BottomDashboard/BottomDashboard"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./MeusCursos.css";
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle";
import { Navigate } from "react-router-dom";

const cursos = [
    {
        id: 1,
        titulo: "Curso de Extensão IA para o direito",
        ultimaInteracao: "02 jan, 2025",
        progresso: 80,
    }, 
    {
        id: 2,
        titulo: "Curso de JavaScript",
        ultimaInteracao: "10 jan, 2025",
        progresso: 20,
    }, 
    {
        id: 3,
        titulo: "Curso de Desenvolvimento Android moderno",
        ultimaInteracao: "22 Fev, 2025",
        progresso: 10,
    }, 
    {
        id: 4,
        titulo: "Frevo ao Manguebeat",
        ultimaInteracao: "20 mar, 2025",
        progresso: 1,
    }, 



]

const manipularCartaoClick = (id) => {
    Navigate('/cursos/${id}')
}



const MeusCursos = () => {
    return (
            <Sidebar>
        <BottomDashboard>
           <div className="container-meusCursos">
            <h2 className="titulo-inicio-cursos">Meus Cursos</h2>
            <div className="cursos-list">
                {cursos.map((curso) => (
                    <div key={curso.id} className="curso-dcard" onClick={() => manipularCartaoClick(curso.id)}>
                        
                        <h3 className="title-dash">{curso.titulo}</h3>
                        <div className="progresso-container">
                            <ProgressCircle percent={curso.progresso} />
                            <div className="info-progresso">
                                <span className="interacao">
                                    Última Interação: {curso.ultimaInteracao}
                                </span>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
           </div>
        </BottomDashboard>
        </Sidebar>
       
    )
}

export default MeusCursos