import { FaGooglePlus } from "react-icons/fa";
import img_conecta_recife from "../../assets/img_conecta_recife.png";
import gov_br from "../../assets/gov_br.png";
import "./Cadastro.css";
import { Link } from "react-router-dom"; 

export default function Cadastro() {
  return (
    <div className="cadastroContainer">
      <div className="cadastroEsquerda">
        <h2 className="cadastroTitulo">Cadastro</h2>
        <input type="text" placeholder="Nome" className="inputCadastro" />
        <input type="email" placeholder="E-mail" className="inputCadastro" />
        <input type="password" placeholder="Senha" className="inputCadastro" />
        <input type="password" placeholder="Confirme sua senha" className="inputCadastro" />
        <div className="termos">
        <input type="checkbox" id="termos" />
        <label htmlFor="termos">
            Eu li e concordo com os <a href="/diretrizes" className="link-termos">termos e políticas</a> de uso e privacidade
        </label>
        </div>
        <button className="botaoCadastro">Criar conta</button>
        <p className="conecteText">Ou cadastre-se com:</p>
        <div className="socialIcons">
          <img src= {img_conecta_recife} alt="Conecta Recife" className="socialImg"/>
          <img src= {gov_br} alt="GOVBr" className="socialImg2"/>
          <FaGooglePlus className="GoogleIcon"/>
        </div>
      </div>
      <div className="cadastroDireita">
        <h2 className="bemVindo">Bem-vindo <br />de volta!</h2>
        <p className="subtexto">Se mantenha conectado fazendo <br />login com as suas informações!</p>
        <Link to="/Login">
        <button className="loginButaoCadastro">Já tenho uma conta</button> 
        </Link>
      </div>
    </div>
  );
}
