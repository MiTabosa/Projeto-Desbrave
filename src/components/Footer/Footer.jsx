import "./Footer.css";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container1">
        {/* Coluna 1 - Logo e Descrição */}
        <div className="footer-section"> 
          <h3>Desbrave</h3>
          <p className="resumoD">Desbrave é uma plataforma que visa promover<br/> o conhecimento e a cultura, oferecendo cursos, desafios e <br/> espaços de interação sobre diversas temáticas de Recife.</p>
        </div>

        {/* Coluna 2 - Contato */}
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: DesbraveRecife@gmail.com</p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
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

      <div className="footer-container2">
        {/* Coluna 3 - Links Rápidos */}
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

      <div className="vetor-verde">
        <img src="./src/assets/VetorVerde.png" a />
      </div>
    </footer>
  );
};

export default Footer;
