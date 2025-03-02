import "./Footer.css";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container1">
        {/* Coluna 1 - Logo e Descrição */}
        <div className="footer-section"> 
          <h3>Desbrave</h3>
          <p>Desbrave é uma plataforma educacional que visa promover<br/> o conhecimento e a cultura, oferecendo cursos, desafios e <br/> espaços de interação sobre diversas temáticas de Recife.</p>
        </div>

        {/* Coluna 2 - Contato */}
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: contato@desbrave.com</p>
          <a href="#"><FaTiktok /></a>
          <a href="#"><img src="/instagram.svg" alt="Instagram" /></a>
          <a href="#"><img src="/twitter.svg" alt="Twitter" /></a>
        </div>
        <div>
        <p>© 2025 Desbrave. Todos os direitos reservados.</p>
        </div>

      </div>

      <div className="footer-container2">
        {/* Coluna 3 - Links Rápidos */}
        <div className="footer-section">
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Cursos</a></li>
              <li><a href="#">Mapa Interativo</a></li>
              <li><a href="#">Fórum</a></li>
            </ul>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
