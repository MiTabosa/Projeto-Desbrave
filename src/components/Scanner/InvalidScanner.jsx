import { useNavigate } from "react-router-dom";
import elementDesign from "../../assets/element-design.png";
import "../../pages/Pontos/Pontos.css";
import Button from "../Button/Button";
import { MdErrorOutline } from "react-icons/md";


function InvalidScanner() {
  const navigate = useNavigate();

  return  (
    <div>
    <section className="vetor-section">
        <div className="initial-erro">
        <div className="titulo-container">
                <MdErrorOutline className="vector-img-error" />
            <div className="texto-container">
                <h2 >QR Code inválido ou Expirado</h2>
            <p>Quer tentar novamente?</p>
            </div>
            </div>
        </div>
        <div className="botao-container-erro">
        <Button text="Tentar novamente" color="#0367A5"  size="small"  onClick={() => navigate("/PaginaInicial")}/>
        <Button  text="Voltar ao início" color="#0367A5"  size="small"  onClick={() => navigate("/")} />
        </div>
         <img className="pontos-image" src={elementDesign} alt="imagem de elemento"/>
    </section>
    </div>
  )
}

export default InvalidScanner;