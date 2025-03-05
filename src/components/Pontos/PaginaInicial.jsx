import { useNavigate } from "react-router-dom";
import "./Pontos.css";
import Navbar from "../Navbar/Navbar";

function PaginaInicial() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <section className="pontos-section">
                <div className="pontos-text">
                    <h2>EXPLORE RECIFE E GANHE PONTOS!</h2>
                    <p>
                        Descubra Recife de forma única com o Desbrave! Explore pontos turísticos,
                        escaneie QR Codes e ganhe pontos, para ganhar descontos em cursos de nossas empresas parceiras.
                    </p>
                    <button className="scan-button" onClick={() => navigate("/scanner")}>
                        Ler QR Code
                    </button>
                    {/* <img className="pontos-image" src={elementDesign} alt="imagem de elemento" /> */}
                </div>
            </section>
        </>
    );
}

export default PaginaInicial;
