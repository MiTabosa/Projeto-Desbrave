import { FaGooglePlus } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import "./Cadastro.css";
import { Link } from "react-router-dom"; 
import { useState } from "react";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    try {
      const response = await fetch('/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          senha: formData.senha,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Usuário cadastrado com sucesso!");
        console.log(data);
        
      } else {
        alert("Erro ao cadastrar usuário.");
        console.error(response.statusText);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="cadastroContainer">
      <div className="cadastroEsquerda">
        <h2 className="cadastroTitulo">Cadastro</h2>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          className="inputCadastro"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="inputCadastro"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="inputSenhaContainer">
          <input
            type={mostrarSenha ? "text" : "password"}
            name="senha"
            placeholder="Senha"
            className="inputCadastro"
            value={formData.senha}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="toggleSenha"
            onClick={toggleMostrarSenha}
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
            value={formData.confirmarSenha}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="toggleSenha"
            onClick={toggleMostrarSenha}
          >
            {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="termos">
          <input type="checkbox" id="termos" required />
          <label htmlFor="termos">
            Eu li e concordo com os <a href="/diretrizes" className="link-termos">termos e políticas</a> de uso e privacidade
          </label>
        </div>
        <button type="submit" className="botaoCadastro">Criar conta</button>
        <Link to="/login" className="BotaoLogin">Já tenho uma conta</Link>
      </div>
      <div className="cadastroDireita">
      </div>
    </form>
  );
}
