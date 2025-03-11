import { useNavigate } from "react-router-dom";
import "./DescricaoCurso.css";
import cursos from '../../data/cursos.json';
import Navbar from "../../components/Navbar/Navbar";
import elementDesign from "../../assets/element-design.png";
import Button from "../../components/Button/Button";


function DescricaoCurso() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section className="cursoSection">
        <div className="textdesc">
          <h2>EXPLORE RECIFE E GANHE PONTOS!</h2>
          <p className="descCurso"></p>
          <div className="button-init">
          <Button
            text="Ler QR Code"
            color="#0367A5"
            size="small"
            onClick={() => navigate("/")}
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

export default DescricaoCurso;