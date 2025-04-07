import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Cadastro.css";
import { Link } from "react-router-dom"; 
import { useState } from "react";
import axios from "axios";

export default function Cadastro() {
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    tipoUsuario: "USER"
  });

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState("");

  const lidarComMudanca = (e) => {
    const { name, value } = e.target;
    setDadosFormulario({ ...dadosFormulario, [name]: value });
  };

  const alternarMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const lidarComEnvio = async (e) => {
    e.preventDefault();

    if (dadosFormulario.senha !== dadosFormulario.confirmarSenha) {
      const mensagemErro = "As senhas não coincidem!";
      setErro(mensagemErro);
      alert(mensagemErro);
      return;
    }

    setErro("");

    try {
      const { confirmarSenha, ...dadosParaAPI } = dadosFormulario;

      const resposta = await axios.post("http://localhost:8081/api/usuarios/cadastrar", dadosParaAPI);

      alert("Cadastro realizado com sucesso!");
      console.log(resposta.data); 

    } catch (error) {
      const mensagemErro = "Erro ao conectar com o servidor.";
      console.error("Erro ao cadastrar usuário:", error.response || error.message || error);
      setErro(mensagemErro);
      alert(mensagemErro);
    }
  };

  return (
    <form onSubmit={lidarComEnvio} className="cadastroContainer">
      <div className="cadastroEsquerda">
        <h2 className="cadastroTitulo">Cadastro</h2>
        
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          className="inputCadastro"
          value={dadosFormulario.nome}
          onChange={lidarComMudanca}
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="inputCadastro"
          value={dadosFormulario.email}
          onChange={lidarComMudanca}
          required
        />
        
        <div className="inputSenhaContainer">
          <input
            type={mostrarSenha ? "text" : "password"}
            name="senha"
            placeholder="Senha"
            className="inputCadastro"
            value={dadosFormulario.senha}
            onChange={lidarComMudanca}
            required
          />
          <button
            type="button"
            className="toggleSenha"
            onClick={alternarMostrarSenha}
          >
            {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        
        <div className="inputSenhaContainer">
          <input
            type={mostrarSenha ? "text" : "password"}
            name="confirmarSenha"
            placeholder="Confirme sua senha"
            className="inputCadastro"
            value={dadosFormulario.confirmarSenha}
            onChange={lidarComMudanca}
            required
          />
          <button
            type="button"
            className="toggleSenha"
            onClick={alternarMostrarSenha}
          >
            {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <input
          type="hidden"
          name="tipoUsuario"
          value={dadosFormulario.tipoUsuario}
        />

        <div className="termos">
          <input type="checkbox" id="termos" required />
          <label htmlFor="termos">
            Eu li e concordo com os <a href="/diretrizes" className="link-termos">termos e políticas</a> de uso e privacidade.
          </label>
        </div>
        
        <button type="submit" className="botaoCadastro">Criar conta</button>
        <Link to="/login" className="BotaoLogin">Já tenho uma conta</Link>
      </div>
      
      <div className="cadastroDireita"></div>
    </form>
  );
}
