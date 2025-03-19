import "./Footer.css";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Coluna 1 - Logo e Descrição (oculta no mobile) */}
      <div className="footer-logo-section">
        <div className="footer-section">
          <h3>Desbrave</h3>
          <p className="resumoD">
            Desbrave é uma plataforma que visa promover o conhecimento e a<br />
            cultura, oferecendo cursos, desafios e espaços de interação sobre<br />
            diversas temáticas de Recife.
          </p>
        </div>
      </div>

      {/* Coluna 2 - Contato e Explorar (visíveis no mobile) */}
      <div className="footer-content">
        {/* Coluna 2.1 - Contato */}
        <div className="footer-contact-section">
          <div className="footer-section">
            <h3>Contato</h3>
            <p>Email: DesbraveRecife@gmail.com</p>
            <div className="social-icons">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
            </div>
            <p>© 2025 Desbrave. Todos os direitos reservados.</p>
          </div>
        </div>

        {/* Coluna 2.2 - Explorar */}
        <div className="footer-explore-section">
          <div className="footer-section">
            <h3>Explorar</h3>
            <ul>
              <li><a href="#">Cursos</a></li>
              <li><a href="#">Fóruns</a></li>
              <li><a href="#">Mapa Interativo</a></li>
              <li><a href="#">Desafios</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vetor Verde (oculto no mobile) */}
      {/* <div className="vetor-verde">
        <img src="./src/assets/VetorVerde.png" alt="Vetor Verde" />
      </div> */}
    </footer>
  );
};

export default Footer;