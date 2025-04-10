import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardAdmin.css";
import { PiBookOpenTextThin } from "react-icons/pi";
import { FaComments, FaQrcode } from "react-icons/fa";
import BottomDashboard from "../../components/BottomDashboard/BottomDashboard";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";
import elementoDashboard from "../../assets/elemento-dashboard.png";
import Button from "../../components/Button/Button";
import CardPerfilAdmin from "../../components/CardPerfilAdmin/CardPerfilAdmin";

const DashboardAdmin = () => {
  const navigate = useNavigate();
  const [ehMobile, setEhMobile] = useState(window.innerWidth <= 768);
  const [numCursos, setNumCursos] = useState(12);
  const [numForuns, setNumForuns] = useState(5);
  const [nome, setNome] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setEhMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const buscarNomeUsuario = async () => {
      try {
        const usuarioId = localStorage.getItem("usuarioId");
        const response = await api.get(`/usuario/${usuarioId}`);
        setNome(response.data.nome);
      } catch (error) {
        console.error("Erro ao buscar nome do usuário:", error);
      }
    };

    buscarNomeUsuario();
  }, []);

  return (
    <SidebarAdmin>
      <BottomDashboard>
        <div className="secao-superior">
          <div className="esquerda-secao">
            <div className="cabecalho-painel-adm">
              <h2 className="titulo-dashboard">Olá, {nome}!</h2>
              <p className="paragrafo-dashboard">Bem-vindo de volta! 😃</p>
              <button
                className="botao-home-adm"
                onClick={() => navigate("/")}
              >
                Home
              </button>
              <img src={elementoDashboard} alt="elemento dashboard colorido" />
            </div>

            {!ehMobile && (
              <div className="cards-info-adm">
                {/* Card de Cursos */}
                <div className="card-adm card-cursos-adm">
                  <div className="conteudo-card-adm">
                    <div className="icone-card-adm">
                      <PiBookOpenTextThin size={35} color="#c69715" />
                    </div>
                    <div className="texto-card-adm">
                      <p className="texto-card-adm">Cursos cadastrados</p>
                    </div>
                  </div>
                  <div className="botoes-adm">
                    <Button
                      text="Cadastrar Curso"
                      color="#35A150"
                      size="medium"
                      onClick={() => navigate("/gestaoCursos")}
                    />
                  </div>
                </div>

                {/* Card de QRCode */}
                <div className="card-adm card-qrcode-adm">
                  <div className="conteudo-card-adm">
                    <div className="icone-card-adm">
                      <FaQrcode size={30} color="#c69715" />
                    </div>
                    <div className="texto-card-adm">
                      <p className="texto-card-adm">QR Codes cadastrados</p>
                    </div>
                  </div>
                  <div className="botoes-adm">
                    <Button
                      text="Cadastrar QR Code"
                      color="#35A150"
                      size="medium"
                      onClick={() => navigate("/gestaoQrcodes")}
                    />
                  </div>
                </div>

                {/* Card de Fóruns */}
                <div className="card-adm card-foruns-adm">
                  <div className="conteudo-card-adm">
                    <div className="icone-card-adm">
                      <FaComments size={30} color="#c69715" />
                    </div>
                    <div className="texto-card-adm">
                      <p className="texto-card-adm">Fóruns cadastrados</p>
                    </div>
                  </div>
                  <div className="botoes-adm">
                    <Button
                      text="Cadastrar Fórum"
                      color="#35A150"
                      size="medium"
                      onClick={() => navigate("/gestaoForum")}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <CardPerfilAdmin nome={nome} setNome={setNome} />
        </div>
      </BottomDashboard>
    </SidebarAdmin>
  );
};

export default DashboardAdmin;