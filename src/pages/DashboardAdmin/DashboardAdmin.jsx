import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardAdmin.css";
import { PiBookOpenTextThin } from "react-icons/pi";
import { FaComments } from "react-icons/fa";
import BottomDashboard from "../../components/BottomDashboard/BottomDashboard";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";
import NavbarDashboard from "../../components/NavbarDashboard/NavbarDashboard";
import CardPerfil from "../../components/CardPerfil/CardPerfil";
import elementoVerde from "../../assets/elemento-verde.png"; 
import Button from "../../components/Button/Button";

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
        <NavbarDashboard/>
        {!isMobile && (
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
            <CardPerfil
              name={name}
              subName={subName}
            />
          </div>
        )}
        <div className="admin-dashboard-container">
          <h2 className="admin-title">Painel do Administrador</h2>

          <div className="admin-info-cards">
            <div className="admin-card admin-card-cursos">
              <div className="admin-card-content">
                <div className="admin-card-icon">
                  <PiBookOpenTextThin size={35} color="#0A5FA3" />
                </div>
                <div className="admin-card-text">
                  <p className="admin-card-number">{numCursos}</p>
                  <p>Cursos cadastrados</p>
                </div>
              </div>
              <div className="admin-buttons">
                <Button
                  text="Cadastrar Curso"
                  color="#0367A5"
                  size={isMobile ? "small" : "medium"}
                  onClick={() => navigate("/gestaoCursos")}
                />
              </div>
            </div>
            <div className="admin-card admin-card-foruns">
              <div className="admin-card-content">
                <div className="admin-card-icon">
                  <FaComments size={30} color="#0A5FA3" />
                </div>
                <div className="admin-card-text">
                  <p className="admin-card-number">{numForuns}</p>
                  <p>Fóruns cadastrados</p>
                </div>
              </div>
              <div className="admin-buttons">
                <Button
                  text="Cadastrar Fórum"
                  color="#0A5FA3"
                  size={isMobile ? "small" : "medium"}
                  onClick={() => navigate("/gestaoForum")}
                />
              </div>
            </div>
          </div>
        </div>
      </BottomDashboard>
    </SidebarAdmin>
  );
};

export default DashboardAdmin;