import { useNavigate } from "react-router-dom";
import "./Pontos.css";
import Navbar from "../../components/Navbar/Navbar";
import elementDesign from "../../assets/element-design.png";
import Button from "../../components/Button/Button";


function PaginaInicial() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section className="pontos-section">
        <div className="pontos-text">
          <h2>EXPLORE RECIFE E GANHE PONTOS!</h2>
          <p>
            Descubra Recife de forma única com o Desbrave! Explore pontos
            turísticos, escaneie QR Codes e ganhe pontos, para ganhar descontos
            em cursos de nossas empresas parceiras. Uma jornada interativa pela
            história e cultura da cidade.
          </p>
          <div className="button-init">
          <Button
            text="Ler QR Code"
            color="#0367A5"
            size="small"
            onClick={() => navigate("/scanner")}
          />
          </div>
          <img
            className="pontos-image"
            src={elementDesign}
            alt="imagem de elemento"
          />
        </div>
      </section>
    </>
  );
}

export default PaginaInicial;
