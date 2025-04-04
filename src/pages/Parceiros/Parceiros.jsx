import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import avanade from "../../assets/avanade.png";
import accenture from "../../assets/accenture.png";
import prefeitura from "../../assets/prefeitura.png";
import redecidada from "../../assets/redecidada.png";
import parceiro from "../../assets/parceiro.png";
import formasparceiro from "../../assets/formasparceiro.png";
import "./Parceiros.css";


function Parceiros () {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div>
            <div className="conteiner-parceiros">
            <div>
        <h2 className="text-nossos-parceiros">NOSSOS PARCEIROS</h2>
        
        <div className="lista-parceiros">
            <div className="parceiros-logo">
                <img src={accenture} alt="ACCENTURE" />
                <p className="text-accenture">Accenture</p>
            </div>
            <div className="parceiros-logo">
                <img src={redecidada} alt="REDECIDADA" />
                <p className="text-redecidada">Rede Cidadã</p>
            </div>
            <div className="parceiros-logo">
                <img src={avanade} alt="AVANADE" />
                <p className="text-avanade">Avanade</p>
            </div>
            <div className="parceiros-logo">
                <img src={prefeitura} alt="PREFEITURA" />
                <p className="text-prefeitura">Prefeitura Recife</p>
            </div>
        </div>
    </div>

    <div className="seja-parceiro">
        <h4 className="seja-nosso-parceiro">Seja nosso parceiro:</h4>
        <img src={parceiro} alt="PARCEIRO" />
        <p className="text-parceiros">
            Seja nosso parceiro e impulsione seu <br />
            negócio com soluções inovadoras e personalizadas!
        </p>
        <button className="saiba-mais-btn" onClick={() => setShowInfo(!showInfo)}> {showInfo ? "✖" : "Saiba mais"}</button>

        {showInfo && (
            <div className="info-parceiro">
                <h4 className="saiba-mais-text">SEJA UM PARCEIRO</h4>
                <p className="info-saiba-mais">
                    Torne-se nosso parceiro e amplie suas oportunidades! O processo é simples: <br/>
                    1- Preencha nosso formulário de parceria com seus dados e proposta. <br/>
                    2- Nossa equipe analisará sua solicitação e verificará a compatibilidade com nossos critérios. <br/>
                    3- Após a aprovação, entraremos em contato para alinhar detalhes, formalizar a parceria e iniciar nossa colaboração. <br/>
                    Ao se juntar a nós, você poderá hospedar seus cursos em nossa plataforma, alcançando mais alunos e expandindo seu negócio!
                </p>
            </div>
        )}
    </div>
</div>
            
            <Footer />
        </div>
    );
}

export default Parceiros
    
