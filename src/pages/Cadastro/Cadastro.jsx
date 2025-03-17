import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGooglePlus } from "react-icons/fa";
import "./Cadastro.css";
import { Link } from "react-router-dom"; 

export default function Cadastro() {
  return (
    <div className="cadastroContainer">
      <div className="cadastroEsquerda">
        <h2 className="cadastroTitle">Cadastro</h2>
        <input type="text" placeholder="Nome" className="input-field" />
        <input type="email" placeholder="E-mail" className="input-field" />
        <input type="password" placeholder="Senha" className="input-field" />
        <input type="password" placeholder="Confirme sua senha" className="input-field" />
        <div className="termos">
        <input type="checkbox" id="termos" />
        <label htmlFor="termos">
            Eu li e concordo com os <a href="#" className="link-termos">termos e políticas</a> de uso e privacidade
        </label>
        </div>
        <button className="submit-button">Criar conta</button>
        <p className="connecText">Ou cadastre-se com:</p>
        <div className="socialIcons">
          <FaFacebook className="FacebookIcon"/>
          <FaInstagram className="InstagramIcon"/>
          <FaGooglePlus className="GoogleIcon"/>
        </div>
      </div>
      <div className="cadastroDireita">
        <h2 className="bemVindo">Bem-vindo <br />de volta!</h2>
        <p className="subtexto">Se mantenha conectado fazendo <br />login com as suas informações!</p>
        <Link to="/Login">
        <button className="login-button">Já tenho uma conta</button> 
        </Link>
      </div>
    </div>
  );
}
