import { FaGooglePlus, FaEye, FaEyeSlash } from "react-icons/fa"; 
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
  });

  const [mostrarSenha, setMostrarSenha] = useState(false);

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
      alert("As senhas não coincidem!");
      return;
    }

  //   try {
  //     const resposta = await axios.post("http://localhost:3000/usuario", {
  //       nome: dadosFormulario.nome,
  //       email: dadosFormulario.email,
  //       senha: dadosFormulario.senha,
  //     });

  //     alert("Cadastro realizado com sucesso!");
  //     console.log(resposta.data); 

  //   } catch (error) {
  //     console.error("Erro ao cadastrar usuário:", error);
  //     alert("Erro ao conectar com o servidor.");
  //   }
  // };
// Simulação de resposta da API
setTimeout(() => {
  const usuarioMockado = {
    id: Math.floor(Math.random() * 1000),
    nome: dadosFormulario.nome,
    email: dadosFormulario.email,
    senha: dadosFormulario.senha,
  };

  console.log("Usuário cadastrado (mock):", usuarioMockado);
  localStorage.setItem("usuario", JSON.stringify(usuarioMockado));

  alert("Cadastro realizado com sucesso!");
}, 1000);
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
