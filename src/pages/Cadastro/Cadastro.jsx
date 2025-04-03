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
        <a href="/login" className="BotaoLogin">Já tenho uma conta</a>
  
      </div>
      <div className="cadastroDireita">
      </div>
    </div>
  );
}
