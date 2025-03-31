import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardAdmin.css";
import { PiBookOpenTextThin } from "react-icons/pi";
import { FaComments } from "react-icons/fa";
import BottomDashboard from "../../components/BottomDashboard/BottomDashboard";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";
import elementoVerde from "../../assets/elemento-verde.png"; 
import Button from "../../components/Button/Button";
import CardPerfilAdmin from "../../components/CardPerfilAdmin/CardPerfilAdmin";

const DashboardAdmin = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [numCursos, setNumCursos] = useState(12);
  const [numForuns, setNumForuns] = useState(5);
  const [name, setName] = useState("Admin");
  const [subName, setSubName] = useState("User");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SidebarAdmin>
      <BottomDashboard>
          <div className="secao-superior">
            <div className="esquerda-secao">
              <div className="cabecalho-painel">
                <h2 className="titulo-dashboard">Olá, {name} {subName}!</h2>
                <p className="paragrafo-dashboard">Bem-vinda de volta! 😃</p>
                <button
                    className="adm-home-botao"
                    onClick={() => navigate("/")}
                >
                  Home
                </button>
                <img src={elementoVerde} alt="elemento verde" />
              </div>
            </div>
            <CardPerfilAdmin
              name={name}
              subName={subName}
              numCursos={numCursos}
              numForuns={numForuns}
              
            />
          </div>
    
          {!isMobile && (
        <div className="admin-dashboard-container">
          <h2 className="admin-title">Painel do Administrador</h2>

          <div className="admin-info-cards">
            <div className="admin-card admin-card-cursos">
              <div className="admin-card-content">
                <div className="admin-card-icon">
                  <PiBookOpenTextThin size={35} color="#c69715" />
                </div>
                <div className="admin-card-text">
                  <p className="admin-card-number">{numCursos}</p>
                  <p className="texto-card-adm">Cursos cadastrados</p>
                </div>
              </div>
              <div className="admin-buttons">
                <Button
                  text="Cadastrar Curso"
                  color=" #35A150"
                  size={isMobile ? "small" : "medium"}
                  onClick={() => navigate("/gestaoCursos")}
                />
              </div>
            </div>
            <div className="admin-card admin-card-foruns">
              <div className="admin-card-content">
                <div className="admin-card-icon">
                  <FaComments size={30} color="#c69715" />
                </div>
                <div className="admin-card-text">
                  <p className="admin-card-number">{numForuns}</p>
                  <p className="texto-card-adm">Fóruns cadastrados</p>
                </div>
              </div>
              <div className="admin-buttons">
                <Button
                  text="Cadastrar Fórum"
                  color=" #35A150"
                  size={isMobile ? "small" : "medium"}
                  onClick={() => navigate("/gestaoForum")}
                />
              </div>
            </div>
          </div>
        </div>
          )}
      </BottomDashboard>
    </SidebarAdmin>
  );
};

export default DashboardAdmin;